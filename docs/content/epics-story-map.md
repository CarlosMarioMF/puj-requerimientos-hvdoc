# 2. Épicas y recorrido del producto

**Fuente principal:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a>, sección «Épicas». **Detalle:** <a href="assets/documents/user-stories-product-backlog.docx" download>Product Backlog</a> y <a href="assets/files/use-case-diagram.pdf" target="_blank" rel="noopener noreferrer">Diagrama General de Casos de Uso</a>.

## Cinco macroépicas

| Macroépica | Módulos y capacidades principales |
| --- | --- |
| Atención médica virtual y gestión de citas | Citas, agenda, teleconsulta, cambios, comunicación y remisiones. |
| Gestión clínica y documentos | Historia clínica, resultados, evolución de la atención, fórmulas y documentos. |
| Formación y prácticas clínicas | Prácticas, supervisión, consentimiento, participación estudiantil y evaluación. |
| Operación administrativa, financiera y de recursos | Facturación, pagos, reembolsos, conciliación, reportes y recursos médicos. |
| Plataforma, seguridad e interoperabilidad | Acceso, navegación, roles, auditoría, calidad e integración con sistemas externos. |

Las macroépicas agrupan el producto; no representan pasos consecutivos. El <a href="assets/files/use-case-diagram.pdf" target="_blank" rel="noopener noreferrer">diagrama general de casos de uso (PDF)</a> muestra las interacciones de los actores a un nivel más alto que las historias individuales.

## User Story Mapping

El *backbone* del mapa sí recorre el producto de principio a fin. El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> distribuye las **40 historias implementables** sobre ocho actividades y tres releases:

| Actividad del recorrido | Release 1 · MUST | Release 2 · SHOULD | Release 3 · COULD |
| --- | --- | --- | --- |
| Acceder y orientarse | HU-01, HU-08 | — | — |
| Solicitar y organizar la atención | HU-02, HU-07, HU-06 | HU-09, HU-13 | HU-14 |
| Preparar información clínica | HU-10, HU-11, HU-03A, HU-03B | — | — |
| Realizar y seguir la atención | HU-04, HU-03C, HU-15 | HU-12, HU-16 | — |
| Continuidad especializada | HU-05A, HU-05B, HU-05C | — | — |
| Coordinar formación y práctica clínica | HU-19, HU-17, HU-18 | HU-20 a HU-27 | HU-28 |
| Cerrar el ciclo financiero e interoperar | HU-29, HU-30, HU-33A, HU-33B | HU-31, HU-32 | — |
| Analizar y soportar la operación | — | — | HU-34, HU-35 |

**Lectura:** la ubicación en una release expresa alcance de planificación; el orden interno de construcción depende del backlog y sus relaciones. Release 1 reúne 22 HU (189 SP), Release 2 reúne 14 HU (126 SP) y Release 3 reúne 4 HU (39 SP).

La relación de estas historias con la línea base se desarrolla en [características y backlog](/content/features-backlog) y [priorización](/process/prioritization).
