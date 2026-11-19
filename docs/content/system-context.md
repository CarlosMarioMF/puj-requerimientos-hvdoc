# 1. Sistema y contexto

**Fuente principal:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a>, sección «Visión general del proyecto». **Apoyo:** <a href="assets/documents/system-context.pdf" target="_blank" rel="noopener noreferrer">Documento de Contexto del Sistema</a>.

## Propósito y objetivos

El proyecto busca definir y planificar una aplicación web que apoye la gestión de actividades médicas y académicas del Hospital Virtual Universitario.

<div class="site-principle-grid" aria-label="Objetivos centrales del sistema">
  <article class="site-principle-card"><span>01</span><h3>Atención virtual segura</h3><p>Coordinar citas, teleconsultas, información clínica y remisiones.</p></article>
  <article class="site-principle-card"><span>02</span><h3>Trazabilidad</h3><p>Conservar el seguimiento de actividades médicas, académicas y administrativas.</p></article>
  <article class="site-principle-card"><span>03</span><h3>Interoperabilidad</h3><p>Conectarse con los servicios institucionales que complementan al Hospital Virtual.</p></article>
</div>

## Actores y capacidades

<div class="site-actor-grid">
  <article class="site-actor-card"><span class="site-card-kicker">Atención</span><h3>Paciente</h3><p>Solicita atención, consulta sus citas y documentos autorizados, y participa en teleconsultas.</p></article>
  <article class="site-actor-card"><span class="site-card-kicker">Atención clínica</span><h3>Profesional de la salud</h3><p>Gestiona agenda y atención, consulta información según sus permisos y tramita remisiones.</p></article>
  <article class="site-actor-card"><span class="site-card-kicker">Formación</span><h3>Estudiante</h3><p>Participa en actividades académicas autorizadas y supervisadas.</p></article>
  <article class="site-actor-card"><span class="site-card-kicker">Operación</span><h3>Personal administrativo</h3><p>Coordina procesos operativos, facturación, reportes y configuración según su rol.</p></article>
</div>

También intervienen supervisores y coordinadores académicos, responsables clínicos y financieros, la Universidad y varios sistemas externos. No todos son usuarios directos de las mismas funciones.

## Frontera del sistema

El sistema **coordina** los procesos del Hospital Virtual; no sustituye herramientas especializadas. El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> fija, entre otros, estos límites:

<div class="site-boundary-grid">
  <section class="site-boundary-card site-boundary-in"><span class="site-card-kicker">Responsabilidad del producto</span><h3>Dentro del sistema</h3><ul>
    <li>Usuarios, permisos, citas, agendas, teleconsultas y remisiones.</li>
    <li>Registro y consulta controlada de información y documentos clínicos.</li>
    <li>Prácticas, supervisión, evaluación y recursos educativos.</li>
    <li>Coordinación de pagos, reportes, integraciones, correo y notificaciones.</li>
  </ul></section>
  <section class="site-boundary-card site-boundary-out"><span class="site-card-kicker">Servicios especializados</span><h3>Fuera o delegados</h3><ul>
    <li>El EHR/ECE institucional conserva la historia clínica electrónica especializada.</li>
    <li>Un servicio externo proporciona audio y video de la teleconsulta.</li>
    <li>El sistema hospitalario emite la factura; la pasarela procesa tarjetas y PSE.</li>
    <li>La aplicación no almacena datos completos de tarjetas; SMS y push están fuera del alcance inicial.</li>
  </ul></section>
</div>

Las integraciones previstas incluyen EHR/ECE, videoconferencia, correo, facturación, pasarela de pagos, sistema contable y Google Calendar para exportar citas sin información clínica.

<figure class="site-figure">
  <a href="assets/images/context-diagram.png" target="_blank" rel="noopener noreferrer"><img src="assets/images/context-diagram.png" alt="Diagrama de contexto con actores, sistemas externos y zonas grises alrededor del sistema de apoyo"></a>
  <figcaption>Diagrama de Contexto del Sistema. <a href="assets/images/context-diagram.png" target="_blank" rel="noopener noreferrer">Abrir imagen en tamaño completo</a>. El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> precisa la frontera y las integraciones.</figcaption>
</figure>

## Restricciones documentadas

- Aplicación de controles por rol y mínimo privilegio, auditoría y autenticación multifactor para profesionales y personal administrativo.
- Protección de los datos personales y clínicos durante transmisión y almacenamiento.
- Dependencia de las interfaces y disponibilidad de los sistemas externos.
- Referencia presupuestal de **400 millones COP para el levantamiento inicial y el prototipo MVP**; el documento no la presenta como presupuesto total de implementación. Horizonte máximo de **24 meses** para la ejecución, contado desde el inicio de la definición final de los requisitos.
- Consideración de normativa colombiana sobre telesalud, datos personales y ética médica, según el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>.

La vigencia jurídica de esas normas no es objeto de esta documentación. El propósito de esta página es explicar las restricciones registradas durante el proyecto académico.
