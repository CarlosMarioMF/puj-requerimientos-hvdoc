(function () {
  'use strict';

  const base = new URL('assets/documents/', document.baseURI);
  const files = {
    requirements: new URL('requirements-register.csv', base),
    changes: new URL('requirements-change-log.csv', base)
  };
  const expected = {
    requirements: ['id', 'nombre', 'descripcion', 'clasificacion', 'version', 'fecha', 'fuente', 'responsable', 'estabilidad', 'prioridad', 'estado', 'release', 'trazabilidad'],
    changes: ['id_cambio', 'fecha', 'requisito_origen', 'tipo_cambio', 'requisito_destino', 'descripcion_motivo', 'version_origen', 'version_destino']
  };
  const cache = {};

  function parseCsv(input) {
    const text = input.replace(/^\uFEFF/, '');
    const records = [];
    let record = [];
    let field = '';
    let quoted = false;

    for (let index = 0; index < text.length; index += 1) {
      const character = text[index];
      if (quoted) {
        if (character === '"' && text[index + 1] === '"') {
          field += '"';
          index += 1;
        } else if (character === '"') {
          quoted = false;
        } else {
          field += character;
        }
      } else if (character === '"') {
        quoted = true;
      } else if (character === ',') {
        record.push(field);
        field = '';
      } else if (character === '\n') {
        record.push(field);
        records.push(record);
        record = [];
        field = '';
      } else if (character !== '\r') {
        field += character;
      }
    }
    if (quoted) throw new Error('El archivo CSV termina dentro de un campo entre comillas.');
    if (record.length || field) {
      record.push(field);
      records.push(record);
    }
    const header = records.shift();
    if (!header || !header.length) throw new Error('El archivo CSV está vacío.');
    return { header: header, rows: records.filter(row => row.some(value => value !== '')).map((row, index) => {
      if (row.length !== header.length) throw new Error('La fila ' + (index + 2) + ' tiene un número inesperado de columnas.');
      return Object.fromEntries(header.map((name, column) => [name, row[column]]));
    }) };
  }

  function load(name) {
    if (!cache[name]) {
      cache[name] = fetch(files[name]).then(response => {
        if (!response.ok) throw new Error('No se pudo abrir ' + files[name].pathname + ' (' + response.status + ').');
        return response.text();
      }).then(text => {
        const parsed = parseCsv(text);
        const missing = expected[name].filter(column => !parsed.header.includes(column));
        if (missing.length) throw new Error('Faltan columnas en el CSV: ' + missing.join(', ') + '.');
        return parsed.rows;
      }).catch(error => {
        delete cache[name];
        throw error;
      });
    }
    return cache[name];
  }

  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }

  function clear(node) { node.replaceChildren(); }
  function normalize(value) { return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
  function countBy(rows, key) {
    const counts = new Map();
    rows.forEach(row => counts.set(row[key] || 'Sin dato', (counts.get(row[key] || 'Sin dato') || 0) + 1));
    return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'es'));
  }
  function family(row) { return row.clasificacion.split('/')[0].trim(); }
  function unique(rows, key) { return [...new Set(rows.map(row => row[key]))].filter(Boolean).sort((a, b) => a.localeCompare(b, 'es')); }
  function formatDate(value) {
    const parts = value.split('-');
    return parts.length === 3 ? parts[2] + '/' + parts[1] + '/' + parts[0] : value;
  }

  function sourceNote(parent, text, href, label) {
    const note = element('p', 'data-source', text + ' ');
    const link = element('a', '', label);
    link.href = href;
    link.setAttribute('download', '');
    note.append(link);
    parent.append(note);
  }

  function errorMessage(root, error) {
    if (!root.isConnected) return;
    clear(root);
    const message = element('p', 'data-error', 'No se pudieron cargar los datos: ' + error.message + ' Abra el sitio mediante el servidor local de Docsify.');
    message.setAttribute('role', 'alert');
    root.append(message);
  }

  function metric(label, value, detail) {
    const card = element('div', 'data-metric');
    card.append(element('span', 'data-metric-value', String(value)));
    card.append(element('strong', '', label));
    card.append(element('small', '', detail));
    return card;
  }

  function chart(title, entries, total, description) {
    const section = element('section', 'data-chart');
    section.append(element('h3', '', title));
    section.append(element('p', 'data-chart-description', description));
    const list = element('div', 'data-bars');
    const maximum = Math.max(1, ...entries.map(([, value]) => value));
    entries.forEach(([label, value]) => {
      const item = element('div', 'data-bar-row');
      const top = element('div', 'data-bar-label');
      top.append(element('span', '', label));
      top.append(element('strong', '', value + ' · ' + (total ? Math.round(value * 100 / total) : 0) + '%'));
      const track = element('div', 'data-bar-track');
      const bar = element('span', 'data-bar-fill');
      bar.style.width = (value * 100 / maximum) + '%';
      track.append(bar);
      item.append(top, track);
      list.append(item);
    });
    section.append(list);
    return section;
  }

  function selectControl(label, values, onChange) {
    const wrap = element('label', 'data-field', label);
    const control = element('select');
    values.forEach(([value, text]) => {
      const option = element('option', '', text);
      option.value = value;
      control.append(option);
    });
    control.addEventListener('change', onChange);
    wrap.append(control);
    return { wrap: wrap, control: control };
  }

  function textControl(label, placeholder, onInput) {
    const wrap = element('label', 'data-field', label);
    const control = element('input');
    control.type = 'search';
    control.placeholder = placeholder;
    control.addEventListener('input', onInput);
    wrap.append(control);
    return { wrap: wrap, control: control };
  }

  function resetButton(onClick) {
    const button = element('button', 'data-reset', 'Limpiar filtros');
    button.type = 'button';
    button.addEventListener('click', onClick);
    return button;
  }

  function table(headers, rows, renderRow, caption) {
    const wrap = element('div', 'data-table-wrap');
    const node = element('table', 'data-table');
    if (caption) node.append(element('caption', 'data-table-caption', caption));
    const thead = element('thead');
    const head = element('tr');
    headers.forEach(label => {
      const column = element('th', '', label);
      column.scope = 'col';
      head.append(column);
    });
    thead.append(head);
    const body = element('tbody');
    rows.forEach(row => body.append(renderRow(row)));
    node.append(thead, body);
    wrap.append(node);
    return wrap;
  }

  function cell(row, value, className) { row.append(element('td', className || '', value || '—')); }

  function pagination(parent, page, totalPages, onPage) {
    const nav = element('div', 'data-pagination');
    const previous = element('button', '', 'Anterior');
    previous.type = 'button';
    previous.disabled = page === 1;
    previous.addEventListener('click', () => onPage(page - 1, 'previous'));
    const next = element('button', '', 'Siguiente');
    next.type = 'button';
    next.disabled = page === totalPages;
    next.addEventListener('click', () => onPage(page + 1, 'next'));
    nav.append(previous, element('span', '', 'Página ' + page + ' de ' + totalPages), next);
    parent.append(nav);
  }

  async function mountDashboard(root) {
    try {
      const [requirements, changes] = await Promise.all([load('requirements'), load('changes')]);
      if (!root.isConnected) return;
      clear(root);
      const controls = element('div', 'data-controls');
      const filter = selectControl('Familia de requisitos', [['', 'Todas las familias'], ['RFL', 'RFL · funcionales'], ['RNF', 'RNF · no funcionales'], ['RPY', 'RPY · proyecto']], render);
      controls.append(filter.wrap);
      const filterSummary = element('p', 'data-results');
      filterSummary.setAttribute('role', 'status');
      const metrics = element('div', 'data-metrics');
      const charts = element('div', 'data-chart-grid');
      root.append(controls, filterSummary, metrics, charts);

      function render() {
        const subset = filter.control.value ? requirements.filter(row => family(row) === filter.control.value) : requirements;
        filterSummary.textContent = filter.control.value ? subset.length + ' requisitos de la familia ' + filter.control.value + '. Las cifras de historias y cambios conservan sus totales independientes.' : requirements.length + ' requisitos vigentes. Todas las familias.';
        clear(metrics);
        metrics.append(
          metric('Requisitos vigentes', subset.length, filter.control.value ? 'Familia ' + filter.control.value + ' · Registro Maestro' : 'Línea base · Registro Maestro'),
          metric('Historias de usuario', 40, 'Product Backlog · total independiente'),
          metric('Puntos de historia', 354, 'Product Backlog · esfuerzo relativo'),
          metric('Eventos de cambio', changes.length, 'Historial de Cambios · total independiente')
        );
        clear(charts);
        charts.append(
          chart('Familia de requisitos', countBy(subset.map(row => ({ family: family(row) })), 'family'), subset.length, 'Cantidad de requisitos vigentes por familia.'),
          chart('Prioridad MoSCoW', countBy(subset, 'prioridad'), subset.length, 'N/A indica requisitos sin prioridad individual.'),
          chart('Entrega asignada', countBy(subset, 'release'), subset.length, 'Transversal identifica requisitos sin entrega individual.'),
          chart('Estabilidad', countBy(subset, 'estabilidad'), subset.length, 'Estabilidad declarada en el Registro Maestro.'),
          chart('Estado documental', countBy(subset, 'estado'), subset.length, 'Validado describe la revisión académica del proyecto.'),
          chart('Tipos de cambio', countBy(changes, 'tipo_cambio'), changes.length, 'Eventos históricos; este gráfico no cambia con el filtro de familia.')
        );
      }
      render();
      const backlog = element('section', 'data-backlog');
      backlog.append(element('h2', '', 'Historias y esfuerzo por entrega'));
      backlog.append(element('p', '', 'Esta distribución procede de Historias de Usuario y Product Backlog. Su unidad es la historia de usuario; no se calcula con las filas del Registro Maestro.'));
      backlog.append(table(['Entrega', 'Historias', 'Story Points'], [
        ['Release 1 · MUST', '22', '189'],
        ['Release 2 · SHOULD', '14', '126'],
        ['Release 3 · COULD', '4', '39'],
        ['Total', '40', '354']
      ], values => { const row = element('tr'); values.forEach(value => cell(row, value)); return row; }, 'Historias y puntos de historia por entrega'));
      sourceNote(backlog, 'Fuente: versión documental 1.1.', new URL('user-stories-product-backlog.docx', base), 'Descargar Product Backlog');
      root.append(backlog);
      sourceNote(root, 'Requisitos: versión 1.0, 12/10/2026.', files.requirements, 'Descargar Registro Maestro');
      sourceNote(root, 'Cambios: fechas registradas en cada evento.', files.changes, 'Descargar Historial de Cambios');
    } catch (error) { errorMessage(root, error); }
  }

  async function mountRequirements(root) {
    try {
      const rows = await load('requirements');
      if (!root.isConnected) return;
      clear(root);
      const controls = element('div', 'data-controls');
      const search = textControl('Buscar por ID, nombre o texto', 'Ej. RFL-C001 o citas', update);
      controls.append(search.wrap);
      const filters = [
        ['Familia', 'family', [...new Set(rows.map(family))].sort()],
        ['Prioridad', 'prioridad', unique(rows, 'prioridad')],
        ['Entrega', 'release', unique(rows, 'release')],
        ['Estado', 'estado', unique(rows, 'estado')],
        ['Estabilidad', 'estabilidad', unique(rows, 'estabilidad')]
      ].map(([label, key, values]) => {
        const item = selectControl(label, [['', 'Todas'], ...values.map(value => [value, value])], update);
        controls.append(item.wrap);
        return [key, item.control];
      });
      const reset = resetButton(() => { search.control.value = ''; filters.forEach(([, control]) => { control.value = ''; }); update(); search.control.focus(); });
      controls.append(reset);
      const summary = element('p', 'data-results');
      summary.setAttribute('role', 'status');
      const results = element('div');
      root.append(controls, summary, results);
      let page = 1;

      function update() { page = 1; render(); }
      function render() {
        const term = normalize(search.control.value.trim());
        const subset = rows.filter(row => {
          if (term && !normalize([row.id, row.nombre, row.descripcion, row.clasificacion, row.fuente, row.trazabilidad].join(' ')).includes(term)) return false;
          return filters.every(([key, control]) => !control.value || (key === 'family' ? family(row) : row[key]) === control.value);
        });
        const pageSize = 12;
        const totalPages = Math.max(1, Math.ceil(subset.length / pageSize));
        page = Math.min(page, totalPages);
        summary.textContent = subset.length + ' de ' + rows.length + ' requisitos vigentes';
        clear(results);
        if (!subset.length) { results.append(element('p', 'data-empty', 'No hay requisitos que coincidan con los filtros.')); return; }
        results.append(table(['ID y nombre', 'Clasificación', 'Prioridad / entrega', 'Estado / estabilidad', 'Descripción y trazabilidad'], subset.slice((page - 1) * pageSize, page * pageSize), row => {
          const tr = element('tr');
          const identity = element('th');
          identity.scope = 'row';
          identity.append(element('strong', '', row.id), document.createElement('br'), document.createTextNode(row.nombre));
          tr.append(identity);
          cell(tr, row.clasificacion);
          cell(tr, row.prioridad + ' · ' + row.release);
          cell(tr, row.estado + ' · ' + row.estabilidad);
          const detail = element('td');
          detail.append(element('p', '', row.descripcion), element('small', '', 'Trazabilidad: ' + (row.trazabilidad || 'Sin dato')));
          tr.append(detail);
          return tr;
        }, 'Requisitos que coinciden con los filtros'));
        pagination(results, page, totalPages, (next, direction) => {
          page = next;
          render();
          const buttons = results.querySelectorAll('.data-pagination button');
          buttons[direction === 'next' ? 1 : 0].focus();
          results.scrollIntoView({ block: 'start' });
        });
      }
      render();
      sourceNote(root, 'Fuente: Registro Maestro, versión 1.0; 12/10/2026. Cada resultado es un requisito vigente.', files.requirements, 'Descargar CSV completo');
    } catch (error) { errorMessage(root, error); }
  }

  async function mountChanges(root) {
    try {
      const rows = await load('changes');
      if (!root.isConnected) return;
      clear(root);
      const controls = element('div', 'data-controls');
      const search = textControl('Buscar ID de requisito, cambio o motivo', 'Ej. RFL-C007 o CHG-001', render);
      const type = selectControl('Tipo de cambio', [['', 'Todos'], ...unique(rows, 'tipo_cambio').map(value => [value, value])], render);
      const reset = resetButton(() => { search.control.value = ''; type.control.value = ''; render(); search.control.focus(); });
      controls.append(search.wrap, type.wrap, reset);
      const summary = element('p', 'data-results');
      summary.setAttribute('role', 'status');
      const results = element('div');
      root.append(controls, summary, results);

      function render() {
        const term = normalize(search.control.value.trim());
        const subset = rows.filter(row => (!type.control.value || row.tipo_cambio === type.control.value) && (!term || normalize([row.id_cambio, row.requisito_origen, row.requisito_destino, row.descripcion_motivo].join(' ')).includes(term)));
        summary.textContent = subset.length + ' de ' + rows.length + ' eventos de cambio';
        clear(results);
        if (!subset.length) { results.append(element('p', 'data-empty', 'No hay eventos que coincidan con los filtros.')); return; }
        results.append(table(['Cambio / fecha', 'Tipo', 'Origen → destino', 'Motivo', 'Versiones'], subset, row => {
          const tr = element('tr');
          cell(tr, row.id_cambio + ' · ' + formatDate(row.fecha));
          cell(tr, row.tipo_cambio);
          cell(tr, (row.requisito_origen || '—') + ' → ' + (row.requisito_destino || '—'));
          cell(tr, row.descripcion_motivo);
          cell(tr, row.version_origen + ' → ' + row.version_destino);
          return tr;
        }, 'Eventos de cambio que coinciden con los filtros'));
      }
      render();
      sourceNote(root, 'Fuente: Historial de Cambios. La fecha y las versiones se muestran en cada evento.', files.changes, 'Descargar CSV completo');
    } catch (error) { errorMessage(root, error); }
  }

  window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {
    hook.doneEach(function () {
      const dashboard = document.getElementById('hvu-dashboard');
      const requirements = document.getElementById('hvu-requirements');
      const changes = document.getElementById('hvu-changes');
      if (dashboard) mountDashboard(dashboard);
      if (requirements) mountRequirements(requirements);
      if (changes) mountChanges(changes);
    });
  });
}());
