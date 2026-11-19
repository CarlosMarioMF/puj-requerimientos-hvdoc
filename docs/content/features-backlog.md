# 3. Características y backlog

**Fuente principal:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a>, sección «Características detalladas del sistema». **Detalle:** <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos</a> y <a href="assets/documents/user-stories-product-backlog.docx" download>Product Backlog</a>.

## Product Backlog y criterios de aceptación

Los 53 requisitos funcionales de la línea base se relacionan con **40 historias de usuario implementables**. El <a href="assets/documents/user-stories-product-backlog.docx" download>Product Backlog</a> conserva, para cada historia, actor, objetivo, valor, requisitos de origen, prioridad, estimación, dependencias y criterios de aceptación. Estos últimos concretan qué comportamiento debe observarse y, cuando aplica, incorporan condiciones de calidad y seguridad.

La relación propuesta en el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> es: **requisito funcional → historia de usuario → criterios de aceptación → modelo o prototipo, cuando existe → prueba de aceptación**. La redacción completa está en la <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos</a> y el <a href="assets/documents/user-stories-product-backlog.docx" download>Product Backlog</a>.

## Un ejemplo de flujo completo: remisión a especialista

El médico general crea y envía la remisión (**HU-05A**). El especialista la acepta o rechaza (**HU-05B**). Si hay aceptación, el paciente confirma o rechaza la atención especializada (**HU-05C**). El sistema notifica los cambios y conserva los momentos necesarios para medir tiempos de respuesta. Este flujo corresponde a **RFL-M001–RFL-M004**.

<ol class="site-workflow" aria-label="Pasos del flujo de remisión">
  <li><span>HU-05A · Médico general</span><h3>Crear y enviar</h3><p>Registra el motivo, la prioridad y los soportes clínicos de la solicitud.</p></li>
  <li><span>HU-05B · Especialista</span><h3>Revisar y responder</h3><p>Acepta o rechaza la remisión y deja una observación.</p></li>
  <li><span>HU-05C · Paciente</span><h3>Confirmar la atención</h3><p>Si el especialista acepta, el paciente confirma o rechaza la cita propuesta.</p></li>
</ol>

<p class="site-visual-note">En cada paso, el sistema registra el cambio de estado y notifica a los actores correspondientes.</p>

<p class="site-file-link"><a href="assets/files/referral-activity-diagram.pdf" target="_blank" rel="noopener noreferrer">Abrir el diagrama de actividades de remisión (PDF)</a></p>

El diagrama distingue responsabilidades del médico general, sistema, especialista y paciente. Ayuda a explicar decisiones y estados que una lista de requisitos no muestra con la misma claridad.

## Escenarios de paciente y profesional

Los storyboards utilizados en la obtención muestran dos recorridos: la reserva de una cita por una paciente y la consulta de agenda/preparación semanal de un profesional. Son **escenarios narrativos**, distintos del prototipo interactivo que menciona el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>.

<div class="site-figure-grid">
  <figure class="site-figure"><a href="assets/images/patient-storyboard.png" target="_blank" rel="noopener noreferrer"><img src="assets/images/patient-storyboard.png" alt="Storyboard de una paciente que reserva una cita virtual"></a><figcaption>Paciente: acceso, selección de cita y confirmación. <a href="assets/images/patient-storyboard.png" target="_blank" rel="noopener noreferrer">Abrir imagen en tamaño completo</a>.</figcaption></figure>
  <figure class="site-figure"><a href="assets/images/clinician-storyboard.jpeg" target="_blank" rel="noopener noreferrer"><img src="assets/images/clinician-storyboard.jpeg" alt="Storyboard de un profesional que consulta agenda y prepara la semana"></a><figcaption>Profesional: agenda, información previa y reporte semanal. <a href="assets/images/clinician-storyboard.jpeg" target="_blank" rel="noopener noreferrer">Abrir imagen en tamaño completo</a>.</figcaption></figure>
</div>

## Atributos de calidad

El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> resume umbrales verificables de los requisitos no funcionales de la <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos</a>. Algunos ejemplos:

<div class="site-quality-grid">
  <article class="site-quality-card"><span>Rendimiento</span><strong>≤ 3 s</strong><p>Al menos 95 % de operaciones de citas, con hasta 100 usuarios concurrentes.</p></article>
  <article class="site-quality-card"><span>Disponibilidad</span><strong>99,5 %</strong><p>Mínimo mensual, excluyendo mantenimientos notificados.</p></article>
  <article class="site-quality-card"><span>Recuperación</span><strong>≤ 2 h</strong><p>Tiempo máximo para recuperar una interrupción crítica.</p></article>
  <article class="site-quality-card"><span>Seguridad</span><strong>MFA + roles</strong><p>Mínimo privilegio y auditoría para accesos sensibles.</p></article>
  <article class="site-quality-card"><span>Usabilidad</span><strong>Tareas medibles</strong><p>Para pacientes con poca experiencia tecnológica y profesionales.</p></article>
  <article class="site-quality-card"><span>Integridad</span><strong>Sin duplicados</strong><p>Evitar dobles reservas y controlar el intercambio financiero.</p></article>
</div>

Estos criterios describen **requisitos para el producto**, no resultados de mediciones sobre un sistema construido.

## Prototipo rápido

El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> describe un prototipo interactivo V1.1 en Figma para explorar acceso, citas, agenda, historia clínica, teleconsulta, remisiones y navegación por perfil. No cubre las 40 historias. Su función es apoyar la validación temprana de navegación e interacción; la especificación y los criterios de aceptación permanecen en los anexos.

[Abrir «HVU – Prototipo V1.1 · Interactivo» en Figma](https://www.figma.com/proto/EAv77ruHYGGXqaAHlOWNRB/HVU-%E2%80%93-Prototipo-V1.1-%C2%B7-Interactivo?node-id=10-6&starting-point-node-id=10%3A6&show-proto-sidebar=1&t=soaD3yNC3UdjwaTV-1)

Los storyboards y el prototipo representan artefactos diferentes del proceso.
