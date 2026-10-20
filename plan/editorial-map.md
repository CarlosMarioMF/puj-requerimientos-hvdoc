# Fase 0 — Inventario y mapa editorial

**Base de trabajo:** `10.4 Documento_Agil_Hospital_Virtual_v0.4.docx`, fechado el 19 de octubre de 2026. Este mapa organiza el futuro sitio; no transforma ni corrige los artefactos académicos.

## 1. Inventario y función de cada artefacto

| Artefacto compartido                                                                | Función editorial                     | Uso previsto                                                                                                 |
| ----------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `10.4 Documento_Agil_Hospital_Virtual_v0.4.docx`                                    | **Documento rector**                  | Índice, relato, alcance, decisiones y conclusiones. Sus secciones 1–5 deben quedar localizables en el sitio. |
| `4.3 REQUISITOS_FINALES_DEL_SISTEMA.docx`                                           | Anexo de especificación               | Descripción formal y atributos de la línea base de 83 requisitos.                                            |
| `6.2. HISTORIAS_DE_USUARIO_Y_PRODUCT_BACKLOG.docx`                                  | Anexo de planificación                | 40 historias, criterios de aceptación, priorización, estimación de 354 puntos y releases.                    |
| `7.1_REGISTRO_MAESTRO_REQUISITOS_HVU_v1.0.csv`                                      | Estado estructurado actual            | Búsqueda, filtros e indicadores de los 83 requisitos.                                                        |
| `7.2_LOG_HISTORICO_REQUISITOS_HVU.csv`                                              | Evolución estructurada                | Cronología y tipos de los 15 cambios registrados.                                                            |
| `1. DOCUMENTO CONTEXTO DEL SISTEMA.pdf` y `1.1 DIAGRAMA DE CONTEXTO.png`            | Evidencia de frontera                 | Actores, sistemas vecinos, intercambios y zonas grises. El diagrama es la figura visual disponible.          |
| `3.1 Entrevista líder del proyecto.pdf`                                             | Instrumento de obtención              | Preguntas de entrevista. El PDF compartido no contiene respuestas diligenciadas.                             |
| `3.2 Cuestionario Pacientes.pdf` y `3.2 Respuestas Pacientes.xlsx`                  | Instrumento y respuestas de obtención | Mostrar técnica, temas consultados y agregados prudentes de siete respuestas anónimas.                       |
| `3.3 ESCENARIO - STORYBOARD.docx`, `1.2 Storyboard 1.png` y `1.2 Storyboard 2.jpeg` | Escenarios narrativos                 | Recorrido del paciente al reservar cita y del profesional al consultar agenda/preparar atención.             |
| `5.1 DIAGRAMA CASOS DE USO GENERAL.pdf`                                             | Modelo funcional                      | Relación general de actores y casos de uso.                                                                  |
| `5.2 DIAGRAMA DE ACTIVIDADES - Remisión de paciente a especialista.pdf`             | Modelo de proceso                     | Ejemplo profundo de secuencia, decisiones y responsabilidades entre actores.                                 |
| Presentaciones del profesor y lecturas compartidas                                  | Guía metodológica                     | Vocabulario y orden didáctico; no son fuentes de cifras del caso.                                            |

**Referencia citada pero aún no disponible como archivo autónomo:** el documento 10.4 menciona un prototipo rápido. Antes de dedicarle una galería o una demostración propia habrá que identificar el artefacto concreto. Los storyboards disponibles pueden explicar escenarios, pero no deben presentarse como pantallas del prototipo funcional.

## 2. Índice propuesto del sitio

La navegación conservará la correspondencia con el 10.4 y hará visible el proceso de ingeniería:

1. **Inicio / guía de sustentación:** pregunta central, alcance, ruta de lectura y cifras clave con fuente.
2. **Sistema y contexto** — 10.4 §1: propósito, objetivos, producto, frontera, restricciones y diagrama.
3. **Épicas y recorrido del producto** — 10.4 §2: macroépicas, actores, casos de uso y User Story Mapping.
4. **Características y backlog** — 10.4 §3: historias, criterios, funcionalidades, remisión, atributos de calidad y prototipo si se dispone de él.
5. **Evolución y releases** — 10.4 §4: funcionalidades futuras, elementos retirados y decisiones de cambio.
6. **Cómo se construyó el documento** — 10.4 §5.1–5.6: obtención, priorización, validación, negociación, gestión y registro dinámico. Puede dividirse en páginas cortas sin perder la numeración original.
7. **Explorador de requisitos** — vista del CSV 7.1 con vínculo a su explicación metodológica.
8. **Explorador de cambios** — vista del CSV 7.2 y su relación con la línea base.
9. **Panel de indicadores** — estadísticas por clasificación, prioridad, estado, estabilidad y release, con fuente y denominador visibles.
10. **Fuentes y límites** — jerarquía documental, versiones y reglas para leer los números.

## 3. Matriz de correspondencia editorial

| 10.4       | Pregunta para la exposición                       | Página prevista           | Apoyo específico                                        | Vista o interacción propuesta                                       | Nivel                      |
| ---------- | ------------------------------------------------- | ------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------- |
| §1.1–1.3   | ¿Qué se busca construir y para quién?             | Sistema y contexto        | Caso inicial, 4.3                                       | Tarjetas de actores y capacidades; sin inventar perfiles.           | Resumen + detalle          |
| §1.4–1.6   | ¿Qué entra y qué queda fuera?                     | Sistema y contexto        | Contexto, diagrama 1.1, 4.3                             | Diagrama ampliable; lista de límites e integraciones.               | Resumen + figura           |
| §2.1–2.3   | ¿Cómo se divide el producto?                      | Épicas y recorrido        | Casos de uso 5.1, 4.3                                   | Tabla/diagrama de macroépicas, actores y módulos.                   | Resumen + figura           |
| §2.4       | ¿Cómo atraviesa el usuario las entregas?          | Épicas y recorrido        | Backlog 6.2                                             | User Story Mapping con backbone y releases; vínculos a HU.          | Interactivo o tabla amplia |
| §3.1–3.1.2 | ¿Qué historias se planificaron y cómo se aceptan? | Características y backlog | 6.2, 4.3                                                | Resumen de 40 HU; consulta de criterios y trazabilidad.             | Resumen + consulta         |
| §3.2–3.2.1 | ¿Cómo funciona un flujo complejo?                 | Características y backlog | Actividades 5.2, HU-05A/B/C                             | Flujo de remisión explicativo por actor y decisión.                 | Figura + detalle           |
| §3.3       | ¿Qué se prototipó?                                | Características y backlog | Prototipo citado; storyboards como apoyo distinto       | Explicar alcance del prototipo solo cuando esté disponible.         | Pendiente de fuente        |
| §3.4–3.5   | ¿Qué calidad e integraciones se exigieron?        | Características y backlog | RNF de 4.3; CSV 7.1                                     | Tabla de atributos y requisitos verificables; filtros RNF.          | Resumen + consulta         |
| §4.1       | ¿Qué queda para entregas posteriores?             | Evolución y releases      | 6.2; CSV 7.1                                            | Comparación de Release 1/2/3 sin confundir HU y requisitos.         | Gráfico + tabla            |
| §4.2–4.3   | ¿Qué se eliminó o transformó y por qué?           | Evolución y releases      | CSV 7.2; 4.3                                            | Línea de tiempo de cambios; origen/destino.                         | Resumen + consulta         |
| §5.1       | ¿De dónde salieron las necesidades?               | Proceso: obtención        | Entrevista, encuesta, respuestas, contexto, storyboards | Secuencia de técnicas y evidencia; agregados de encuesta.           | Central en exposición      |
| §5.2       | ¿Cómo se decidió qué va primero?                  | Proceso: priorización     | 6.2; CSV 7.1                                            | MoSCoW, refinamiento 35→40 HU, 354 SP y releases.                   | Central + gráfico          |
| §5.3       | ¿Cómo se revisó la calidad de los requisitos?     | Proceso: validación       | 4.3, 6.2, modelos                                       | Criterios de revisión y ejemplos trazables.                         | Central                    |
| §5.4       | ¿Qué conflicto se negoció?                        | Proceso: negociación      | 10.4; RNF-S001/S005/S006                                | Caso acceso/seguridad: posiciones, decisión y requisitos afectados. | Central + ejemplo          |
| §5.5       | ¿Cómo se mantuvo la línea base?                   | Proceso: gestión          | CSV 7.1/7.2; 4.3/6.2                                    | Cadena fuente → requisito → HU → release → cambio.                  | Central + consulta         |
| §5.6       | ¿Qué aporta la documentación dinámica?            | Panel e instrucciones     | CSV 7.1/7.2                                             | Filtros, indicadores y explicación de actualización de datos.       | Demostración final         |
| Anexos     | ¿Dónde se comprueba cada afirmación?              | Fuentes y límites         | Artefactos disponibles                                  | Referencias explícitas; acceso selectivo a datos publicables.       | Consulta                   |

## 4. Recorrido oral propuesto

El relato debe seguir la causalidad del trabajo, aunque el 10.4 presente primero el producto y luego el proceso:

1. **Apertura:** qué sistema se estudió y qué preguntas resolverá la exposición.
2. **Contexto y frontera:** usuarios, integraciones y exclusiones.
3. **Obtención:** técnicas aplicadas y tipo de evidencia aportada por cada una.
4. **Consolidación y documentación:** paso de ideas a 83 requisitos clasificados.
5. **Modelado:** casos de uso y remisión como ejemplo de proceso.
6. **Backlog y priorización:** 40 HU, 354 SP, MoSCoW, refinamiento y releases.
7. **Validación:** qué se comprobó documentalmente y cuáles son sus límites.
8. **Negociación:** ejemplo concreto de seguridad y facilidad de uso.
9. **Gestión:** línea base, atributos, trazabilidad y 15 eventos de cambio.
10. **Cierre interactivo:** responder preguntas de compañeros mediante filtros y gráficos; volver a la conclusión del 10.4.

Duración y selección de pantallas podrán ajustarse cuando se conozca el tiempo asignado para la sustentación. El sitio también debe permitir consultar en cualquier orden, sin obligar a seguir el guion.

## 5. Política de cifras y afirmaciones

| Clase                    | Ejemplo                                                             | Regla de presentación                                                                   |
| ------------------------ | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Dato contado del CSV 7.1 | 83 requisitos: 53 RFL, 22 RNF, 8 RPY                                | Mostrar versión/fecha del registro, denominador y filtros aplicados.                    |
| Dato contado del CSV 7.2 | 15 eventos de cambio                                                | Contar eventos, no requisitos afectados; un evento puede citar varios IDs.              |
| Dato del anexo 6.2       | 40 HU, 354 SP; 22/14/4 HU por release                               | Etiquetar como métricas del backlog, distintas de los recuentos del CSV 7.1.            |
| Resultado de instrumento | Siete respuestas de pacientes                                       | Presentar solo agregados y tamaño de muestra; evitar generalizar a todos los pacientes. |
| Decisión documentada     | MFA para profesionales y administrativos                            | Vincular a 10.4 y a requisitos negociados; no presentarla como resultado estadístico.   |
| Síntesis para exponer    | «La remisión muestra coordinación entre cuatro actores»             | Señalar el modelo que la ilustra y usar lenguaje interpretativo.                        |
| Límite de evidencia      | Entrevista sin respuestas visibles; validación académica/documental | Explicitar el límite junto a la afirmación afectada.                                    |

## 6. Profundidad por pantalla

- **Pantalla principal:** una pregunta, una idea, una visualización o figura y un vínculo a la fuente.
- **Desarrollo:** explicación breve del método, decisión y resultado, con terminología del curso.
- **Consulta:** texto completo y atributos de los requisitos, historias, criterios de aceptación y eventos de cambio cuando su fuente esté disponible y se haya decidido publicarla.
- **Panel:** filtros y gráficos con etiquetas legibles, tablas o listas equivalentes y descripción de cómo se calculan.

Esto evita convertir la sustentación en una reproducción íntegra del documento Word, sin perder acceso al detalle cuando alguien pregunte por un ID o una decisión.

## 7. Pendientes editoriales concretos

1. Definir si se publicará el texto completo de los 83 requisitos y de las 40 HU o solo vistas seleccionadas. El CSV 7.1 ya contiene descripciones completas de requisitos; el CSV 7.2 contiene motivos de cambio.
2. Localizar el artefacto del prototipo rápido citado en §3.3, si se desea mostrarlo.
3. Elegir cuáles figuras se publicarán y con qué calidad/resolución para proyector.
4. Conocer duración y formato de la exposición para priorizar pantallas del recorrido oral.
5. Decidir si los anexos originales estarán enlazados para descarga o si solo se citarán por nombre y sección.

Estos pendientes no cambian la jerarquía de fuentes ni impiden iniciar la preparación técnica de la Fase 1.
