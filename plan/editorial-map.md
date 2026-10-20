# Fase 0 — Inventario y mapa editorial

**Base de trabajo:** Documento Ágil del Hospital Virtual, fechado el 19 de octubre de 2026. Este mapa organiza el sitio; no transforma ni corrige los artefactos académicos.

## 1. Inventario y función de cada artefacto

| Artefacto | Función editorial | Uso previsto |
| --- | --- | --- |
| [Documento Ágil del Hospital Virtual](../docs/assets/documents/agile-project-document.docx) | **Documento rector** | Índice, relato, alcance, decisiones y conclusiones. |
| [Especificación de Requisitos](../docs/assets/documents/requirements-specification.docx) | Especificación formal | Descripción y atributos de la línea base de 83 requisitos. |
| [Historias de Usuario y Product Backlog](../docs/assets/documents/user-stories-product-backlog.docx) | Planificación | 40 historias, criterios de aceptación, priorización, estimación y releases. |
| [Registro Maestro de Requisitos](../docs/assets/documents/requirements-register.csv) | Estado estructurado actual | Búsqueda, filtros e indicadores de los requisitos vigentes. |
| [Historial de Cambios](../docs/assets/documents/requirements-change-log.csv) | Evolución estructurada | Cronología y tipos de los 15 cambios registrados. |
| [Documento de Contexto](../docs/assets/documents/system-context.pdf) y [Diagrama de Contexto](../docs/assets/images/context-diagram.png) | Evidencia de frontera | Actores, sistemas vecinos, intercambios y zonas grises. |
| [Entrevista al Líder del Proyecto](../docs/assets/documents/project-lead-interview.pdf) | Instrumento de obtención | Preguntas de entrevista; el PDF disponible no contiene respuestas diligenciadas. |
| [Cuestionario de Pacientes](../docs/assets/documents/patient-questionnaire.pdf) y respuestas agregadas | Instrumento y respuestas | Técnica, temas consultados y agregados de siete respuestas anónimas. |
| [Escenarios y Storyboards](../docs/assets/documents/scenarios-storyboards.docx) | Escenarios narrativos | Recorridos del paciente y del profesional. |
| [Diagrama General de Casos de Uso](../docs/assets/files/use-case-diagram.pdf) | Modelo funcional | Relaciones generales entre actores y casos de uso. |
| [Diagrama de Actividades de Remisión](../docs/assets/files/referral-activity-diagram.pdf) | Modelo de proceso | Secuencia, decisiones y responsabilidades entre actores. |
| Presentaciones y lecturas del profesor | Guía metodológica | Vocabulario y orden didáctico; no son fuentes de cifras del caso. |

**Prototipo identificado:** [HVU – Prototipo V1.1 · Interactivo](https://www.figma.com/proto/EAv77ruHYGGXqaAHlOWNRB/HVU-%E2%80%93-Prototipo-V1.1-%C2%B7-Interactivo?node-id=10-6&starting-point-node-id=10%3A6&show-proto-sidebar=1&t=soaD3yNC3UdjwaTV-1). El Documento Ágil explica su alcance. Los storyboards son artefactos distintos.

## 2. Índice propuesto del sitio

La navegación conservará la correspondencia con el Documento Ágil y hará visible el proceso de ingeniería:

1. **Inicio:** propósito, alcance, estructura de la documentación y cifras clave con fuente.
2. **Sistema y contexto** — propósito, objetivos, producto, frontera, restricciones y diagrama.
3. **Épicas y recorrido del producto** — macroépicas, actores, casos de uso y User Story Mapping.
4. **Características y backlog** — historias, criterios, funcionalidades, remisión, atributos de calidad y enlace al prototipo.
5. **Evolución y releases** — funcionalidades futuras, elementos retirados y decisiones de cambio.
6. **Proceso de construcción del documento** — obtención, priorización, validación, negociación, gestión y registro dinámico.
7. **Explorador de requisitos** — vista del Registro Maestro con vínculo a su explicación metodológica.
8. **Explorador de cambios** — vista del Historial de Cambios y su relación con la línea base.
9. **Panel de indicadores** — estadísticas por clasificación, prioridad, estado, estabilidad y release, con fuente y denominador visibles.
10. **Fuentes y límites** — jerarquía documental, versiones y reglas para leer los números.

## 3. Correspondencia entre documento, páginas y evidencia

| Sección del Documento Ágil | Tema | Página | Evidencia de apoyo |
| --- | --- | --- | --- |
| §1.1–1.6 | Propósito, actores, alcance y frontera | Sistema y contexto | Contexto y Especificación de Requisitos. |
| §2.1–2.4 | Macroépicas, casos de uso y Story Mapping | Épicas y recorrido | Diagrama General de Casos de Uso y Product Backlog. |
| §3.1–3.1.2 | Backlog y criterios de aceptación | Características y backlog | Especificación de Requisitos y Product Backlog. |
| §3.2–3.2.1 | Funcionalidades y remisión | Características y backlog | Diagrama de Actividades de Remisión y HU-05A/B/C. |
| §3.3 | Prototipo interactivo V1.1 | Características y backlog | Enlace a Figma compartido por el autor. |
| §3.4–3.5 | Calidad e integraciones | Características y backlog | Especificación de Requisitos y Registro Maestro. |
| §4.1–4.3 | Releases y evolución | Evolución y releases | Product Backlog e Historial de Cambios. |
| §5.1 | Obtención | Proceso: obtención | Entrevista, encuesta, respuestas, contexto y storyboards. |
| §5.2 | Priorización | Proceso: priorización | Product Backlog y Registro Maestro. |
| §5.3 | Validación | Proceso: validación | Especificación de Requisitos, Product Backlog, modelos y prototipo. |
| §5.4 | Negociación | Proceso: negociación | RNF-S001, RNF-S005 y RNF-S006. |
| §5.5 | Gestión de requisitos | Proceso: gestión | Registro Maestro, Historial de Cambios y anexos. |
| §5.6 | Vistas y métricas | Panel de datos | Registro Maestro e Historial de Cambios. |
| Anexos | Especificación y trazabilidad | Referencias y fuentes | Artefactos compartidos. |

## 4. Reglas de procedencia e interpretación

| Clase | Ejemplo | Regla documental |
| --- | --- | --- |
| Dato del Registro Maestro | 83 requisitos: 53 RFL, 22 RNF, 8 RPY | Indicar versión, fecha y denominador. |
| Dato del Historial de Cambios | 15 eventos de cambio | Contar eventos, no requisitos afectados. |
| Dato del Product Backlog | 40 HU y 354 SP | Distinguir historias y esfuerzo relativo de requisitos, tiempo y costo. |
| Resultado de instrumento | Siete respuestas de pacientes | Indicar tamaño de muestra y evitar extrapolaciones. |
| Decisión documentada | MFA por perfil | Vincular al Documento Ágil y a los requisitos negociados. |
| Límite de evidencia | Entrevista sin respuestas visibles; validación académica | Precisar el alcance junto a la afirmación correspondiente. |
