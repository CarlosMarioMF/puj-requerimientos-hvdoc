# Documentación dinámica — Hospital Virtual Universitario

Repositorio para preparar una **sustentación interactiva** del proceso de ingeniería de requisitos del Sistema de Apoyo para la Gestión de Actividades Médicas del Hospital Virtual Universitario.

## Estado del proyecto

**Etapa actual: planeación.** Este README es el acuerdo de trabajo inicial. La implementación se realizará por fases para que cada decisión de contenido y tecnología sea revisable.

## Objetivo y límites

Construir una documentación navegable en español, principalmente con **Markdown y Docsify**, complementada con HTML, CSS y JavaScript cuando la interacción lo requiera. Debe explicar a los compañeros el **proceso seguido en clase** y los **requisitos obtenidos**, con gráficos, indicadores, filtros y recorridos útiles para exponer.

Los artefactos académicos originales **no se modificarán**. El sitio tendrá sus propios archivos y, cuando se necesiten datos, utilizará copias controladas de los CSV. No es un prototipo funcional del hospital ni una base de datos clínica.

## Jerarquía de fuentes

| Papel                   | Fuente                                                              | Uso previsto                                                    |
| ----------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------- |
| Documento rector        | `10.4 Documento_Agil_Hospital_Virtual_v0.4.docx`                    | Orden, relato y conclusiones de la sustentación.                |
| Anexo de especificación | `4.3 REQUISITOS_FINALES_DEL_SISTEMA.docx`                           | Redacción completa, atributos y trazabilidad de los requisitos. |
| Anexo del backlog       | `6.2. HISTORIAS_DE_USUARIO_Y_PRODUCT_BACKLOG.docx`                  | Historias, criterios de aceptación, estimaciones y entregas.    |
| Datos estructurados     | CSV 7.1 y 7.2                                                       | Filtros, tablas, recuentos y evolución de cambios.              |
| Evidencia del proceso   | Contexto, entrevista, encuesta, respuestas, storyboards y diagramas | Ejemplos y soporte de las fases.                                |
| Guía didáctica          | Diapositivas y lecturas del profesor                                | Secuencia y conceptos de ingeniería de requisitos.              |

El texto explicativo del sitio se redactará a partir del **10.4**. Los anexos amplían el detalle; los CSV no sustituyen la interpretación académica del documento final. Cada indicador debe mostrar su fuente y explicar qué cuenta. Por ejemplo, **83 requisitos** no son **40 historias de usuario**, y los **354 puntos de historia** no representan dinero ni tiempo.

## Arquitectura prevista

Docsify cargará páginas Markdown en el navegador sin una compilación del contenido. JavaScript leerá **copias estáticas de CSV** para calcular indicadores y aplicar filtros locales. «Dinámico» significa interacción inmediata en la página; los datos publicados se actualizarán cuando se reemplacen deliberadamente las copias de CSV y se publique una nueva versión. No habrá conexión en vivo con los archivos de OneDrive.

Estructura propuesta, sujeta a ajuste durante la fase 2:

```text
README.md                 Plan, instalación y mantenimiento
package.json              Comandos locales y dependencias de desarrollo
docs/
  index.html              Entrada y configuración de Docsify
  _sidebar.md             Navegación de la exposición
  README.md               Portada del sitio
  contenido/              Secciones 1 a 4 del documento 10.4
  proceso/                Obtención, documentación, priorización,
                          validación, negociación y gestión
  datos/                  Copias publicables de CSV y vistas Markdown
  assets/
    js/                   Carga, filtros e indicadores
    css/                  Estilos y diseño para exposición
    img/                  Diagramas e imágenes seleccionados
  .nojekyll               Publicación desde /docs en GitHub Pages
```

## Fase 0 — Inventario y mapa editorial

1. Tomar el índice y las secciones del documento 10.4 como mapa inicial.
2. Asociar a cada sección su evidencia: anexo, CSV, diagrama o instrumento.
3. Registrar qué afirmaciones son **datos medidos**, cuáles son **decisiones documentadas** y cuáles son **síntesis para la exposición**.
4. Elegir el recorrido oral: contexto → obtención → clasificación/documentación → priorización → validación/negociación → gestión → resultados.
5. Definir el nivel de detalle que debe verse en una pantalla y el que quedará disponible al profundizar.

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
4. Crear `package.json` con un comando `dev` para servir `docs/`. Instalar `docsify-cli` **como dependencia de desarrollo del proyecto** mediante `npm.cmd install`, sin instalación global.
5. Crear la entrada mínima de Docsify, la portada, la barra lateral y `.nojekyll` en `docs/`.
6. Iniciar la vista local con `npm.cmd run dev`; dirección prevista: `http://localhost:3000`.

**Resultado esperado:** sitio local vacío pero navegable, con dependencias declaradas y sin alterar los artefactos fuente.

## Fase 2 — Diseño de información y contenido

1. Redactar la portada con propósito, alcance y ruta sugerida para la sustentación.
2. Mapear las secciones **1–4 del 10.4** a páginas de visión, épicas, características y evolución.
3. Desglosar la **sección 5** en páginas del proceso: obtención, clasificación/documentación, priorización, validación, negociación y gestión de cambios.
4. Integrar figuras pertinentes: diagrama de contexto, storyboards, casos de uso y flujo de remisión. Cada figura tendrá título, fuente y explicación de qué demuestra.
5. Preparar vistas de consulta para los anexos 4.3 y 6.2 sin convertirlos en el relato principal.
6. Señalar límites de la evidencia. El PDF de entrevista compartido contiene preguntas, no respuestas; la validación descrita es académica/documental; las siete respuestas de pacientes no representan a toda la población.

**Resultado esperado:** documentación Markdown completa y trazable al 10.4, con un recorrido entendible sin abrir los anexos.

## Fase 3 — Datos, interactividad y visualización

1. Copiar de forma controlada los CSV 7.1 y 7.2 a `docs/data/`, conservando los originales.
2. Leer el registro maestro en el navegador y ofrecer búsqueda por ID/nombre/texto y filtros por familia, prioridad, entrega, estado y estabilidad.
3. Leer el historial y ofrecer búsqueda por requisito y filtro por tipo de cambio.
4. Crear un panel con indicadores y gráficos de clasificación, prioridad, entregas, estabilidad, estados y tipos de cambio. Añadir referencias cruzadas al contenido explicativo.
5. Mostrar por separado las métricas del backlog tomadas del anexo 6.2: 40 historias, 354 puntos y distribución por entregas. No derivarlas erróneamente del número de filas del registro maestro.
6. Hacer que las vistas sean legibles en proyector y móvil, utilizables con teclado y comprensibles también mediante tablas o etiquetas de texto.
7. Indicar fecha/versión de la fuente y significado de cada indicador. Evitar publicar información personal de respuestas individuales.

**Resultado esperado:** navegación y visualizaciones interactivas vinculadas a las fuentes correctas.

## Fase 4 — Revisión editorial y preparación de la sustentación

1. Recorrer el sitio en el orden de la exposición y pulir transiciones entre páginas.
2. Comprobar que cifras, etiquetas y ejemplos coincidan con 10.4, 4.3, 6.2 y CSV; explicar cualquier diferencia entre requisitos e historias.
3. Revisar que las figuras se lean a distancia y que las vistas con filtros no oculten el contexto metodológico.
4. Preparar una página de «fuentes y método» y un guion breve de navegación para la presentación.

**Resultado esperado:** artefacto listo para mostrar a compañeros y profesor, con límites y fuentes visibles.

## Fase 5 — Despliegue gratuito

La opción inicial es **GitHub Pages** porque el repositorio ya está en GitHub y Docsify puede publicarse directamente desde `main` → `/docs`, sin compilar el sitio. La [guía oficial de Docsify](https://github.com/docsifyjs/docsify/blob/develop/docs/deploy.md) recomienda esa ubicación; se incluirá `.nojekyll` para que GitHub Pages sirva `_sidebar.md`.

Pasos previstos: publicar los archivos del sitio en el repositorio, configurar Pages en **Settings → Pages → Deploy from a branch → main → /docs**, abrir la URL publicada y revisar rutas, imágenes y CSV. La publicación del repositorio o la activación de Pages se hará cuando el contenido esté listo para exposición.

## Decisiones por cerrar antes de implementar contenido

- Estilo visual y grado de formalidad de la presentación.
- Si las copias publicadas incluirán el texto completo de los 83 requisitos y del historial de cambios, o una selección resumida con enlace a anexos.
- Si se integrarán vistas de las 40 historias individuales o solamente métricas y ejemplos representativos.
- Qué figuras del trabajo se publicarán en el sitio final.

Estas decisiones no bloquean el inventario ni la preparación técnica, pero sí afectan la profundidad editorial y el contenido público del sitio.
