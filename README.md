# Documentación dinámica — Hospital Virtual Universitario

Repositorio para preparar una **sustentación interactiva** del proceso de ingeniería de requisitos del Sistema de Apoyo para la Gestión de Actividades Médicas del Hospital Virtual Universitario.

## Estado del proyecto

**Etapa actual: Fase 3, implementación de datos e interactividad.** Las fases 0, 1 y 2 están completas. El [inventario y mapa editorial](plan/editorial-map.md) desarrolla el índice, la matriz de fuentes y las reglas de interpretación de cifras. El sitio incluye el recorrido Markdown, figuras, enlaces a las fuentes y vistas interactivas sobre los CSV.

## Objetivo y límites

Construir una documentación navegable en español, principalmente con **Markdown y Docsify**, complementada con HTML, CSS y JavaScript cuando la interacción lo requiera. Debe explicar a los compañeros el **proceso seguido en clase** y los **requisitos obtenidos**, con gráficos, indicadores, filtros y recorridos útiles para exponer.

Los artefactos académicos originales **no se modificarán**. El sitio tendrá sus propios archivos y, cuando se necesiten datos, utilizará copias controladas de los CSV. No es un prototipo funcional del hospital ni una base de datos clínica.

## Jerarquía de fuentes

| Papel | Fuente | Uso previsto |
| --- | --- | --- |
| Documento rector | [Documento Ágil del Hospital Virtual](docs/assets/documents/agile-project-document.docx) | Orden, relato y conclusiones del proyecto. |
| Especificación | [Especificación de Requisitos](docs/assets/documents/requirements-specification.docx) | Redacción completa, atributos y trazabilidad de los requisitos. |
| Planificación | [Historias de Usuario y Product Backlog](docs/assets/documents/user-stories-product-backlog.docx) | Historias, criterios de aceptación, estimaciones y entregas. |
| Datos estructurados | [Registro Maestro de Requisitos](docs/assets/documents/requirements-register.csv) e [Historial de Cambios](docs/assets/documents/requirements-change-log.csv) | Filtros, tablas, recuentos y evolución de cambios. |
| Evidencia del proceso | Contexto, entrevista, encuesta, respuestas, storyboards y diagramas | Ejemplos y soporte de las fases. |
| Guía didáctica | Diapositivas y lecturas del profesor | Secuencia y conceptos de ingeniería de requisitos. |

El texto explicativo del sitio se redactará a partir del **Documento Ágil**. La Especificación de Requisitos y el Product Backlog amplían el detalle; los datos estructurados no sustituyen la interpretación académica del documento principal. Cada indicador debe mostrar su fuente y explicar qué cuenta. Por ejemplo, **83 requisitos** no son **40 historias de usuario**, y los **354 puntos de historia** no representan dinero ni tiempo.

## Arquitectura prevista

Docsify cargará páginas Markdown en el navegador sin una compilación del contenido. JavaScript leerá **copias estáticas de CSV** para calcular indicadores y aplicar filtros locales. «Dinámico» significa interacción inmediata en la página; los datos publicados se actualizarán cuando se reemplacen deliberadamente las copias de CSV y se publique una nueva versión. No habrá conexión en vivo con los archivos de OneDrive.

Estructura propuesta, sujeta a ajuste durante la fase 2. Los nombres técnicos de archivos y carpetas estarán en inglés; su contenido seguirá en español:

```text
README.md                 Plan, instalación y mantenimiento
package.json              Comandos locales y dependencia de Docsify CLI
docs/
  index.html              Entrada y configuración de Docsify
  _sidebar.md             Navegación de la exposición
  README.md               Portada del sitio
  content/                Visión, épicas, características y evolución
  process/                Obtención, documentación, priorización,
                          validación, negociación y gestión
  data/                   Copias publicables de CSV y vistas Markdown
  assets/
    js/                   Carga, filtros e indicadores
    css/                  Estilos y diseño para exposición
    images/               Diagramas e imágenes seleccionados
  .nojekyll               Publicación desde /docs en GitHub Pages
```

## Fase 0 — Inventario y mapa editorial

1. Tomar el índice y las secciones del Documento Ágil como mapa inicial.
2. Asociar a cada sección su evidencia: anexo, CSV, diagrama o instrumento.
3. Registrar qué afirmaciones son **datos medidos**, cuáles son **decisiones documentadas** y cuáles son **síntesis para la exposición**.
4. Definir la estructura de navegación: contexto, características, proceso de ingeniería, anexos y fuentes.
5. Diferenciar las síntesis del contenido detallado de los anexos.

**Resultado esperado:** índice del sitio y matriz de correspondencia entre secciones, fuentes y visualizaciones.

## Fase 1 — Preparación técnica del equipo y repositorio

### Estado observado en este equipo

- Windows con PowerShell.
- Node.js `v24.21.0` y Git `2.55.0.windows.5` disponibles.
- npm `11.19.0` disponible mediante **`npm.cmd`**. PowerShell bloquea el lanzador `npm.ps1`; no hace falta cambiar la política de ejecución.
- Repositorio Git existente y prácticamente vacío, en la rama `main`.

### Pasos previstos

1. Abrir PowerShell en la raíz de este repositorio.
2. Comprobar las herramientas con `node --version`, `npm.cmd --version` y `git --version`.
3. Si faltara Node.js en otro equipo, instalar su versión LTS desde [Node.js](https://nodejs.org/) y volver a abrir la terminal. Si faltara Git, instalar [Git para Windows](https://git-scm.com/download/win).
4. Crear `package.json` mediante `npm.cmd init -y`, instalar `docsify-cli` como dependencia local de desarrollo con `npm.cmd install --save-dev docsify-cli` y añadir un comando `dev` que ejecute `docsify serve docs`.
5. Crear la entrada mínima de Docsify, la portada, la barra lateral y `.nojekyll` en `docs/`.
6. Iniciar la vista local con `npm.cmd run dev`; dirección prevista: `http://localhost:3000`.

**Resultado esperado:** sitio local mínimo y navegable con el servidor oficial de Docsify CLI, sin alterar los artefactos fuente. La primera carga requiere conexión a Internet para obtener Docsify desde el CDN.

### Relación con la guía oficial de Docsify

La [guía de inicio](https://docsify.js.org/#/quickstart) ofrece dos vías: instalar `docsify-cli` para generar archivos y servirlos localmente, o crear manualmente `index.html` con los enlaces CDN a Docsify. Aquí se creó `index.html` manualmente y se usa **Docsify CLI para servirlo localmente**. `npm init -y` creó el manifiesto del proyecto; la instalación del CLI fue un paso separado.

### Uso local

```powershell
npm.cmd run dev
```

Abrir `http://localhost:3000`. Detener el servidor con `Ctrl+C`. En una copia nueva del repositorio, ejecutar primero `npm.cmd install` para instalar la dependencia declarada. Si se desea invocar el CLI directamente desde PowerShell, usar `.\node_modules\.bin\docsify.cmd serve docs`; `docsify serve docs` sin ruta requiere instalar el CLI globalmente o añadir `node_modules/.bin` al `PATH`.

La versión 5.0.0 de `docsify-cli` reporta cuatro avisos de seguridad de severidad alta en dependencias de la recarga local (`livereload`/`chokidar`/`braces`). El servidor se usa solo para desarrollo local; GitHub Pages servirá archivos estáticos y no ejecutará ese CLI.

## Fase 2 — Diseño de información y contenido

**Estado: completada.**

1. Redactar la portada con propósito, alcance y estructura temática.
2. Mapear las secciones de producto del Documento Ágil a páginas de visión, épicas, características y evolución.
3. Desglosar la **sección 5** en páginas del proceso: obtención, clasificación/documentación, priorización, validación, negociación y gestión de cambios.
4. Integrar figuras pertinentes: diagrama de contexto, storyboards, casos de uso y flujo de remisión. Cada figura tendrá título, fuente y explicación de qué demuestra.
5. Preparar vistas de consulta para la Especificación de Requisitos y el Product Backlog sin convertirlos en el relato principal.
6. Señalar límites de la evidencia. El PDF de entrevista compartido contiene preguntas, no respuestas; la validación descrita es académica/documental; las siete respuestas de pacientes no representan a toda la población.

**Resultado esperado:** documentación Markdown completa y trazable al Documento Ágil, con un recorrido entendible sin abrir los anexos.

## Fase 3 — Datos, interactividad y visualización

1. Usar las copias publicables del Registro Maestro de Requisitos y del Historial de Cambios en `docs/assets/documents/`, conservando los originales.
2. Leer el registro maestro en el navegador y ofrecer búsqueda por ID/nombre/texto y filtros por familia, prioridad, entrega, estado y estabilidad.
3. Leer el historial y ofrecer búsqueda por requisito y filtro por tipo de cambio.
4. Crear un panel con indicadores y gráficos de clasificación, prioridad, entregas, estabilidad, estados y tipos de cambio. Añadir referencias cruzadas al contenido explicativo.
5. Mostrar por separado las métricas del Product Backlog: 40 historias, 354 puntos y distribución por entregas. No derivarlas del número de filas del Registro Maestro.
6. Hacer que las vistas sean legibles en proyector y móvil, utilizables con teclado y comprensibles también mediante tablas o etiquetas de texto.
7. Indicar fecha/versión de la fuente y significado de cada indicador. Evitar publicar información personal de respuestas individuales.

**Implementación actual:** [panel de resultados](docs/data/dashboard.md), [explorador de requisitos](docs/data/requirements.md) y [explorador de cambios](docs/data/changes.md). Las barras y los filtros se construyen en el navegador a partir de las copias CSV. La distribución de historias y puntos se presenta aparte, con el Product Backlog como fuente.

**Resultado esperado:** navegación y visualizaciones interactivas vinculadas a las fuentes correctas.

## Fase 4 — Revisión editorial y presentación

1. Revisar la continuidad temática y los enlaces entre páginas.
2. Comprobar que cifras, etiquetas y ejemplos coincidan con el Documento Ágil, la Especificación de Requisitos, el Product Backlog y los registros; explicar cualquier diferencia entre requisitos e historias.
3. Revisar que las figuras se lean a distancia y que las vistas con filtros no oculten el contexto metodológico.
4. Consolidar la página de «fuentes y método» y la accesibilidad de la navegación.

**Resultado esperado:** artefacto listo para mostrar a compañeros y profesor, con límites y fuentes visibles.

## Fase 5 — Despliegue gratuito

La opción inicial es **GitHub Pages** porque el repositorio ya está en GitHub y Docsify puede publicarse directamente desde `main` → `/docs`, sin compilar el sitio. La [guía oficial de Docsify](https://github.com/docsifyjs/docsify/blob/develop/docs/deploy.md) recomienda esa ubicación; se incluirá `.nojekyll` para que GitHub Pages sirva `_sidebar.md`.

Pasos previstos: publicar los archivos del sitio en el repositorio, configurar Pages en **Settings → Pages → Deploy from a branch → main → /docs**, abrir la URL publicada y revisar rutas, imágenes y CSV. La publicación del repositorio o la activación de Pages se hará cuando el contenido esté listo para exposición.

