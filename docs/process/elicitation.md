# Obtención de requisitos

**Fuente principal:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a>, sección «Estrategias de obtención». **Apoyo:** <a href="assets/documents/system-context.pdf" target="_blank" rel="noopener noreferrer">Documento de Contexto del Sistema</a> e instrumentos de obtención enlazados abajo.

## Propósito de la obtención

La obtención identificó necesidades de los actores del Hospital Virtual y restricciones derivadas del entorno institucional del sistema.

El trabajo combinó fuentes y técnicas para observar el problema desde perspectivas distintas. La línea base no salió de una sola entrevista ni de una lista inicial de funcionalidades.

| Técnica o fuente | Aporte al proyecto | Artefacto asociado |
| --- | --- | --- |
| Contexto y análisis de frontera | Identificar actores, procesos, documentos, sistemas externos y exclusiones. | <a href="assets/documents/system-context.pdf" target="_blank" rel="noopener noreferrer">Documento de Contexto</a> y <a href="assets/images/context-diagram.png" target="_blank" rel="noopener noreferrer">Diagrama de Contexto</a>. |
| Lluvia de ideas 365 | Explorar capacidades candidatas antes de consolidarlas. | Descrita en el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>. |
| Entrevista al líder PM/PO | Aclarar objetivos, alcance, restricciones y prioridades. | <a href="assets/documents/project-lead-interview.pdf" target="_blank" rel="noopener noreferrer">Entrevista al Líder del Proyecto</a>; el PDF contiene preguntas, sin respuestas diligenciadas. |
| Cuestionario de pacientes | Escuchar necesidades y preocupaciones en torno a la atención virtual. | <a href="assets/documents/patient-questionnaire.pdf" target="_blank" rel="noopener noreferrer">Cuestionario de Pacientes</a> y siete respuestas anónimas resumidas abajo. |
| Escenarios y storyboards | Seguir tareas concretas del paciente y del profesional; detectar acciones e información necesaria. | <a href="assets/documents/scenarios-storyboards.docx" download>Escenarios y Storyboards</a> de paciente y profesional. |
| Revisión documental | Contrastar hallazgos, consolidar y precisar requisitos. | <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos</a>. |

## Qué mostraron las respuestas de pacientes

Entre **siete respuestas**, seis marcaron consulta de resultados de exámenes y seis consulta de historia clínica como funciones deseadas. Cinco marcaron agendamiento en línea y cinco recordatorios. Las siete indicaron preocupación por la **calidad del diagnóstico sin examen físico**. Estos conteos orientan la discusión, pero el grupo no es una muestra estadísticamente representativa de todos los pacientes.

## Dos recorridos para hacer visibles las necesidades

La paciente del primer storyboard inicia sesión, busca especialidad y horario, confirma la cita y considera añadirla a Google Calendar. El profesional del segundo revisa su agenda, filtra la semana, consulta el detalle clínico permitido y prepara un reporte. Estos escenarios permitieron hablar de flujos y dificultades concretas, no solo de nombres de módulos.

<div class="site-figure-grid">
  <figure class="site-figure"><a href="assets/images/patient-storyboard.png" target="_blank" rel="noopener noreferrer"><img src="assets/images/patient-storyboard.png" alt="Secuencia ilustrada de una paciente que reserva una cita"></a><figcaption>Storyboard de reserva de cita. <a href="assets/images/patient-storyboard.png" target="_blank" rel="noopener noreferrer">Abrir imagen en tamaño completo</a>.</figcaption></figure>
  <figure class="site-figure"><a href="assets/images/clinician-storyboard.jpeg" target="_blank" rel="noopener noreferrer"><img src="assets/images/clinician-storyboard.jpeg" alt="Secuencia ilustrada de un profesional que prepara su agenda"></a><figcaption>Storyboard de agenda profesional. <a href="assets/images/clinician-storyboard.jpeg" target="_blank" rel="noopener noreferrer">Abrir imagen en tamaño completo</a>.</figcaption></figure>
</div>

## Salida hacia la especificación

Los hallazgos se revisaron, agruparon y redactaron como requisitos **funcionales (RFL)**, **no funcionales (RNF)** y **de proyecto (RPY)**. Los requisitos funcionales sirvieron después como punto de partida para formular historias con actor, objetivo y valor. Sigue en [clasificación y especificación](/process/specification).
