# Clasificación y especificación

**Fuentes:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a> y <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos</a>. **Guía de clase:** documentación de requisitos.

## De hallazgos a una línea base

La consolidación produjo **83 requisitos vigentes**, con identificador y redacción formal. La clasificación distingue qué comportamiento debe ofrecer el sistema, bajo qué condiciones de calidad y cuáles son las restricciones del proyecto.

| Familia | Cantidad | Qué documenta |
| --- | ---: | --- |
| RFL · funcionales | 53 | Servicios, acciones e intercambios que el sistema debe realizar. |
| RNF · no funcionales | 22 | Seguridad, rendimiento, disponibilidad, usabilidad, integridad e interoperabilidad. |
| RPY · proyecto/negocio | 8 | Restricciones y condiciones de ejecución. |

La suma **53 + 22 + 8 = 83** corresponde al <a href="assets/documents/requirements-register.csv" download>Registro Maestro de Requisitos</a> y a la línea base descrita en el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>. Los requisitos se organizan además por categoría o módulo; por ejemplo, `RFL / Citas` y `RNF / Seguridad y privacidad`.

## Qué conserva cada requisito

La <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos</a> y el <a href="assets/documents/requirements-register.csv" download>Registro Maestro</a> registran trece atributos: **ID, nombre, descripción, clasificación, versión, fecha, fuente, responsable, estabilidad, prioridad, estado, release y trazabilidad**. Esta estructura permite identificar quién sustenta un requisito, en qué estado se encuentra, qué historia lo implementa y cómo se planificó.

La redacción de los RNF incorpora umbrales observables. Por ejemplo, disponibilidad mensual mínima de 99,5 %, recuperación de una interrupción crítica en no más de 2 horas y criterios de rendimiento para operaciones de citas. Son condiciones exigidas, todavía no resultados de pruebas sobre el producto.

## Modelos que complementan el texto

El <a href="assets/files/use-case-diagram.pdf" target="_blank" rel="noopener noreferrer">diagrama general de casos de uso</a> representa actores y grandes capacidades. El <a href="assets/files/referral-activity-diagram.pdf" target="_blank" rel="noopener noreferrer">diagrama de actividades de remisión</a> muestra decisiones, estados y responsabilidades en un flujo concreto. Los modelos ayudan a encontrar omisiones o ambigüedades y a explicar cómo se conectan los requisitos.

## Relación con las historias de usuario

Cada RFL vigente está trazado a una o más historias del <a href="assets/documents/user-stories-product-backlog.docx" download>Product Backlog</a>. La relación no es necesariamente uno a uno: varias obligaciones pueden reunirse en una historia coherente, y un comportamiento demasiado grande puede dividirse en historias independientes. Por eso se cuentan **83 requisitos** y **40 HU** sin que exista contradicción.

El resultado funcional se resume en [características y backlog](/content/features-backlog); los atributos y cambios se describen en [gestión](/process/management).
