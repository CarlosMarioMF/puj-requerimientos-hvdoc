# Negociación de requisitos

**Fuente principal:** <a href="assets/documents/agile-project-document.docx" download>Documento Ágil del Hospital Virtual</a>, sección «Negociación». **Apoyo:** <a href="assets/documents/requirements-specification.docx" download>Especificación de Requisitos</a>.

## Ciclo aplicado

El <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a> usa cuatro pasos para convertir desacuerdos en decisiones trazables:

1. **Identificar** una incompatibilidad entre necesidades, requisitos o restricciones.
2. **Analizar** intereses, tipo de conflicto y actores afectados.
3. **Resolver** mediante alternativas y criterios explícitos.
4. **Documentar** acuerdo, razón, requisitos afectados y condiciones para revisarlo.

Las lecturas de Pohl y Rupp, WinWin, negociación basada en intereses y estilos de manejo del conflicto aportaron marcos para razonar la decisión; el ejemplo concreto procede del <a href="assets/documents/agile-project-document.docx" download>Documento Ágil</a>.

## Caso: facilidad de acceso y seguridad clínica

Una posición proponía **MFA para todo acceso**. Otra necesidad era evitar fricción excesiva para el paciente. El análisis separó las posiciones de sus intereses: proteger información sensible y mantener un acceso usable. La decisión documentada aplica controles diferenciados según rol y sensibilidad.

La línea base combina **control por roles, mínimo privilegio y auditoría**. Exige MFA a profesionales de la salud y personal administrativo antes de acceder a información clínica, académica, configuración, facturación o reportes. El registro maestro marca como «Validado y negociado» a **RNF-S001, RNF-S005 y RNF-S006**.

El acuerdo puede revisarse si aparece nueva evidencia sobre riesgo, costo, disponibilidad o valor. Un cambio posterior debe quedar registrado en la línea base y en el historial, según la [gestión de requisitos](/process/management).
