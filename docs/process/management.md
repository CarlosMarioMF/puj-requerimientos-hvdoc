# Gestión de requisitos, versiones y cambios

**Fuente principal:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a>, sección «Gestión de requisitos, versiones y cambios». **Datos:** <a href="assets/documents/requirements-register.csv" download>Registro Maestro</a> e <a href="assets/documents/requirements-change-log.csv" download>Historial de Cambios</a>.

## Dos niveles de control

El proyecto gestiona, por una parte, cada requisito e historia; por otra, las versiones de los documentos y la línea base. El <a href="assets/documents/requirements-register.csv" download>Registro Maestro</a> conserva el **estado vigente** de 83 requisitos. El <a href="assets/documents/requirements-change-log.csv" download>Historial de Cambios</a> conserva **15 decisiones de cambio**. Son fuentes complementarias, no dos listas independientes de requisitos actuales.

El [explorador de requisitos](/data/requirements) muestra el estado vigente. El [explorador de cambios](/data/changes) permite buscar las decisiones históricas por identificador y tipo de cambio; el [panel de resultados](/data/dashboard) compara las distribuciones sin mezclar sus unidades.

## Atributos de gestión

Cada fila vigente contiene 13 atributos: ID, nombre, descripción, clasificación, versión, fecha, fuente, responsable, estabilidad, prioridad, estado, release y trazabilidad. La estabilidad distingue *Fijo*, *Establecido* y *Volátil*. Para RFL, la prioridad puede ser MUST, SHOULD o COULD; los RNF y RPY pueden figurar como N/A por no haber recibido esa clasificación MoSCoW individual.

La cadena de lectura es **fuente → requisito → historia(s) de usuario → criterios de aceptación → release → cambio registrado**, en la medida en que cada vínculo exista. No se debe inferir una correspondencia uno a uno entre RFL y HU.

## Ciclo de cambio

El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> propone: **solicitud → análisis de impacto → valoración y decisión → actualización de artefactos afectados → nueva versión o línea base**. Cuando un requisito se consolida, separa, reclasifica o retira, el evento queda en el historial para preservar su explicación y las relaciones entre IDs.

La línea base LB-1.0 es del **12 de octubre de 2026**. La versión 0.4 del documento final, del **19 de octubre**, añadió la descripción formal de gestión y enlazó los CSV, manteniendo 83 requisitos y 40 historias vigentes.

