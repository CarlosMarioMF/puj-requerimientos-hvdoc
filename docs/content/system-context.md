# 1. Sistema y contexto

**Fuente principal:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a>, sección «Visión general del proyecto». **Apoyo:** <a href="assets/documents/system-context.pdf" target="_blank" rel="noopener noreferrer">Documento de Contexto del Sistema</a>.

## Propósito y objetivos

El proyecto busca definir y planificar una aplicación web que apoye la gestión de actividades médicas y académicas del Hospital Virtual Universitario. Su objetivo general combina **atención virtual segura**, **trazabilidad de las actividades** e **interoperabilidad** con los servicios institucionales.

Sus objetivos específicos abarcan citas, agendas, teleconsultas y remisiones; consulta y gestión controlada de información clínica; prácticas de estudiantes; facturación, pagos y reportes; y atributos de calidad necesarios para prestar el servicio.

## Actores y capacidades

| Actor | Interacción principal |
| --- | --- |
| Paciente | Solicita atención, consulta citas y documentos autorizados, participa en teleconsultas. |
| Profesional de la salud | Gestiona agenda y atención, consulta información clínica según permisos y tramita remisiones. |
| Estudiante | Participa en actividades académicas autorizadas y supervisadas. |
| Personal administrativo | Coordina procesos operativos, facturación, reportes y configuración según su rol. |

También intervienen supervisores y coordinadores académicos, responsables clínicos y financieros, la Universidad y varios sistemas externos. No todos son usuarios directos de las mismas funciones.

## Frontera del sistema

El sistema **coordina** los procesos del Hospital Virtual; no sustituye herramientas especializadas. El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> fija, entre otros, estos límites:

| Dentro de la línea base | Responsabilidad externa o excluida |
| --- | --- |
| Gestión de usuarios, permisos, citas, agendas, teleconsultas y remisiones. | El EHR/ECE institucional conserva la historia clínica electrónica especializada. |
| Registro y consulta controlada de información y documentos clínicos. | Un servicio externo proporciona audio y video de la teleconsulta. |
| Prácticas, supervisión, evaluación y recursos educativos. | El sistema de facturación hospitalaria emite formalmente la factura electrónica. |
| Coordinación de pagos y estados, reportes e integraciones. | La pasarela procesa tarjetas y PSE; la aplicación no almacena datos completos de tarjetas. |
| Correo y notificaciones dentro de la aplicación. | SMS y notificaciones push quedan fuera de la línea base inicial. |

Las integraciones previstas incluyen EHR/ECE, videoconferencia, correo, facturación, pasarela de pagos, sistema contable y Google Calendar para exportar citas sin información clínica.

<figure class="site-figure">
  <a href="assets/images/context-diagram.png" target="_blank" rel="noopener noreferrer"><img src="assets/images/context-diagram.png" alt="Diagrama de contexto con actores, sistemas externos y zonas grises alrededor del sistema de apoyo"></a>
  <figcaption>Diagrama de Contexto del Sistema. El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> precisa la frontera y las integraciones.</figcaption>
</figure>

## Restricciones documentadas

- Aplicación de controles por rol y mínimo privilegio, auditoría y autenticación multifactor para profesionales y personal administrativo.
- Protección de los datos personales y clínicos durante transmisión y almacenamiento.
- Dependencia de las interfaces y disponibilidad de los sistemas externos.
- Referencia presupuestal de **400 millones COP para el levantamiento inicial y el prototipo MVP**; el documento no la presenta como presupuesto total de implementación. Horizonte máximo de **24 meses** para la ejecución desde la definición final de requisitos.
- Consideración de normativa colombiana sobre telesalud, datos personales y ética médica, según el <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>.

La vigencia jurídica de esas normas no es objeto de esta documentación. El propósito de esta página es explicar las restricciones registradas durante el proyecto académico.
