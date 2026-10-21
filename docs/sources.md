# Fuentes y método

Esta página permite consultar los artefactos que sostienen la documentación y explica cómo se interpretan sus cifras. El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a> organiza el relato del proyecto; los anexos contienen la formulación detallada; los CSV permiten explorar la línea base y su evolución.

## Jerarquía documental

| Nivel | Documento | Función documental |
| --- | --- | --- |
| Principal | <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual · DOCX</a> | Define la estructura, la narración del proceso y sus resultados. |
| Especificación | <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos · DOCX</a> | Contiene la línea base formal y sus atributos. |
| Planificación | <a href="assets/documents/user-stories-product-backlog.docx" download>Historias de Usuario y Product Backlog · DOCX</a> | Contiene historias, aceptación, estimaciones, releases y trazabilidad. |
| Datos estructurados | <a href="assets/documents/requirements-register.csv" download>Registro Maestro de Requisitos · CSV</a> y <a href="assets/documents/requirements-change-log.csv" download>Historial de Cambios · CSV</a> | Representan el estado vigente y la evolución, respectivamente. |
| Contexto | <a href="assets/documents/system-context.pdf" target="_blank" rel="noopener noreferrer">Documento de Contexto del Sistema · PDF</a> | Amplía el análisis de actores, procesos y frontera. |
| Obtención | <a href="assets/documents/project-lead-interview.pdf" target="_blank" rel="noopener noreferrer">Entrevista al Líder del Proyecto · PDF</a> y <a href="assets/documents/patient-questionnaire.pdf" target="_blank" rel="noopener noreferrer">Cuestionario de Pacientes · PDF</a> | Instrumentos aplicados durante la obtención. |
| Escenarios | <a href="assets/documents/scenarios-storyboards.docx" download>Escenarios y Storyboards · DOCX</a> | Descripción narrativa de recorridos de usuario. |
| Evidencia | Contexto, entrevista, encuesta, respuestas, storyboards y diagramas | Apoyan la explicación de obtención, frontera y modelos. |
| Guía metodológica | Presentaciones y lecturas del profesor | Organizan conceptos y fases; no son origen de las cifras del caso. |

Las páginas sintetizan los documentos académicos y conservan sus referencias. Las cifras y decisiones principales se relacionan con su fuente y, cuando corresponde, con el identificador del requisito o historia.

Los archivos **PDF** pueden abrirse en el navegador; los **DOCX y CSV** se ofrecen para descarga. Las respuestas individuales del cuestionario no se publican: se presentan solo agregados.

Las copias CSV alimentan el [panel de resultados](/data/dashboard), el [explorador de requisitos](/data/requirements) y el [explorador de cambios](/data/changes). Los valores de historias y Story Points se toman del anexo de planificación, no del recuento de filas del registro.

## Corte documental y método de lectura

| Fuente | Corte utilizado | Unidad que permite contar |
| --- | --- | --- |
| <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a> | Versión 0.4, 19 de octubre de 2026 | Relato, decisiones y síntesis; no es una tabla de filas. |
| <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos</a> | Versión documental 1.1; línea base LB-1.0 | Requisitos vigentes y sus atributos. |
| <a href="assets/documents/user-stories-product-backlog.docx" download>Historias de Usuario y Product Backlog</a> | Versión documental 1.1 | Historias vigentes y esfuerzo relativo en Story Points. |
| <a href="assets/documents/requirements-register.csv" download>Registro Maestro de Requisitos</a> | Versión 1.0; registros fechados el 12 de octubre de 2026 | Una fila por requisito vigente. |
| <a href="assets/documents/requirements-change-log.csv" download>Historial de Cambios</a> | Fecha y versiones consignadas en cada evento | Una fila por decisión de cambio. |

Para seguir una afirmación, se consulta primero la sección del <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> que la explica y luego el anexo o la fila con su identificador. La [obtención](/process/elicitation), la [especificación](/process/specification), la [priorización](/process/prioritization), la [validación](/process/validation), la [negociación](/process/negotiation) y la [gestión](/process/management) muestran cómo se llegó a la línea base. El sitio es una síntesis de ese ejercicio académico; los archivos enlazados conservan el detalle.

## Límites de interpretación

- **83 requisitos** proceden de la línea base y del <a href="assets/documents/requirements-register.csv" download>Registro Maestro</a>: 53 RFL, 22 RNF y 8 RPY.
- **40 historias y 354 Story Points** proceden del <a href="assets/documents/user-stories-product-backlog.docx" download>Product Backlog</a>; son unidades de planificación diferentes de los requisitos. Los puntos expresan esfuerzo relativo.
- **15 cambios** son eventos del <a href="assets/documents/requirements-change-log.csv" download>Historial de Cambios</a>; un evento puede afectar a varios IDs.
- El cuestionario reúne **siete respuestas**. Sus agregados sirven como evidencia de apoyo, sin extrapolación estadística.
- El PDF de entrevista disponible conserva **el instrumento de preguntas**, pero no respuestas diligenciadas. Las decisiones atribuidas a esa instancia se toman del <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>.
- El estado **«Validado»** corresponde al ejercicio académico/documental descrito en el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>. No certifica un sistema implementado.
- Los storyboards ilustran escenarios. El **prototipo interactivo V1.1** citado en el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> es otro artefacto, disponible mediante su [enlace en Figma](https://www.figma.com/proto/EAv77ruHYGGXqaAHlOWNRB/HVU-%E2%80%93-Prototipo-V1.1-%C2%B7-Interactivo?node-id=10-6&starting-point-node-id=10%3A6&show-proto-sidebar=1&t=soaD3yNC3UdjwaTV-1).

## Figuras incluidas y prototipo enlazado

| Figura o recurso | Procedencia | Qué explica |
| --- | --- | --- |
| <a href="assets/images/context-diagram.png" target="_blank" rel="noopener noreferrer">Diagrama de contexto</a> | Documento de Contexto del Sistema | Actores, sistemas vecinos y frontera inicial. |
| <a href="assets/images/patient-storyboard.png" target="_blank" rel="noopener noreferrer">Storyboard de paciente</a> | Escenarios y Storyboards | Reserva y confirmación de cita. |
| <a href="assets/images/clinician-storyboard.jpeg" target="_blank" rel="noopener noreferrer">Storyboard profesional</a> | Escenarios y Storyboards | Consulta de agenda y preparación semanal. |
| <a href="assets/files/use-case-diagram.pdf" target="_blank" rel="noopener noreferrer">Casos de uso generales</a> | Diagrama General de Casos de Uso | Interacciones de alto nivel. |
| <a href="assets/files/referral-activity-diagram.pdf" target="_blank" rel="noopener noreferrer">Actividades de remisión</a> | Diagrama de Actividades de Remisión | Responsabilidades, decisiones y estados de un flujo crítico. |
| Prototipo interactivo | [HVU – Prototipo V1.1 · Interactivo](https://www.figma.com/proto/EAv77ruHYGGXqaAHlOWNRB/HVU-%E2%80%93-Prototipo-V1.1-%C2%B7-Interactivo?node-id=10-6&starting-point-node-id=10%3A6&show-proto-sidebar=1&t=soaD3yNC3UdjwaTV-1) | Navegación y pantallas de recorridos priorizados, según el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>. |

Las cinco figuras se presentan como copias; el prototipo se abre mediante un enlace externo. Los archivos académicos originales y los anexos Word no fueron modificados.
