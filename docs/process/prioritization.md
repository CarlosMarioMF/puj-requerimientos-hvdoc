# Priorización y refinamiento

**Fuentes:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a> y <a href="assets/documents/user-stories-product-backlog.docx" download>Product Backlog</a>. **Guía de clase:** priorización de requisitos y lectura de Wiegers.

## Criterio de decisión

El <a href="assets/documents/user-stories-product-backlog.docx" download>Product Backlog</a> utiliza **MoSCoW**: MUST para lo esencial del primer incremento, SHOULD para evolución funcional y COULD para capacidades complementarias. La prioridad considera valor para actores clínicos, académicos, administrativos y financieros; integridad de los flujos; dependencias; riesgo; y evidencia recogida durante la obtención.

El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> aclara que **prioridad y esfuerzo son dimensiones distintas**. Una historia puede ser importante aunque requiera bastante trabajo. La estimación relativa se expresa en *Story Points* con la serie 3, 5, 8, 13 y 21. No hay conversión automática a horas ni a pesos colombianos.

## Refinamiento del backlog

Las historias inicialmente estimadas en 21 SP se separaron para obtener unidades implementables y verificables:

| Identificación inicial | Historias resultantes | Razón editorial del cambio |
| --- | --- | --- |
| HU-03 | HU-03A, HU-03B, HU-03C | Diferenciar consulta de historia, resultados y registro de evolución. |
| HU-05 | HU-05A, HU-05B, HU-05C | Separar remisión, respuesta del especialista y confirmación del paciente. |
| HU-33 | HU-33A, HU-33B | Separar intercambio contable y gestión de errores/reenvíos. |

El backlog pasó de **35 a 40 historias**, con **354 SP** en total. Los IDs iniciales ayudan a seguir el refinamiento; no se suman a las 40 historias vigentes.

## Resultado por entrega

| Entrega | MoSCoW | Historias | Story Points |
| --- | --- | ---: | ---: |
| Release 1 · MVP operativo integral | MUST | 22 | 189 |
| Release 2 · evolución funcional | SHOULD | 14 | 126 |
| Release 3 · complementarias | COULD | 4 | 39 |

La primera entrega incorpora capacidades de atención, formación, finanzas e interoperabilidad necesarias para completar procesos esenciales. El [Story Mapping](/content/epics-story-map) muestra cómo las 40 HU se sitúan en el recorrido del producto.
