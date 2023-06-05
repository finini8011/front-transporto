export default function ListaVerificacion() {
  return (
    <>
      <div className="content-header">
        <div className="card card-primary">
          <div className="card-header">
            <div className="row">
              <div className="col-md-12">
                <label className="card-title">
                  LISTA DE VERIFICACION DE CUMPLIMIENTO DE LOS REQUISITOS DEL
                  PLAN ESTRATEGICO DE SEGURIDAD VIAL
                </label>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <p className="h6 text-center">
                  METODOLOGIA RESOLUCION N. 40595 DE 2022 DE MINISTERIO DE
                  TRANSPORTE
                </p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <table className="table table-bordered table-hover table-sm">
                  <tbody>
                    <tr>
                      <td>
                        <b>Empresa:</b> COINVERTUR S.A.S <b>NIT:</b>{" "}
                        900.910.910-7
                      </td>
                      <td rowSpan={4} width={200}>
                        Lista de Chequeo versión 1.0 Fuente: Resolución 40595 de
                        2022 Ministerio de Transporte
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Objeto Social de la Organización:</b> Servicio
                        Transporte Especial
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Representante de la organización:</b> Siervo de Jesús
                        Galindo
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Fecha de Verificación:</b> 21 de Abril de 2023{" "}
                        <b>Verificación realizada por:</b> Seguro Express Ltda.{" "}
                        <b>Funcionarios:</b> Lorena Patiño Rincón - Valeria
                        Angel Jejen
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-white">
          <div className="col-md-12 col-sm-12">
            <table className="table table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nivel PESV</th>
                  <th>Requisito a Verificar</th>
                  <th>
                    Documento sugerido para verificar según Res. 40595 de 2022
                  </th>
                  <th>Respuesta</th>
                  <th>
                    Observaciones sobre los hallazgos o la no aplicabilidad del
                    requisito
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 1. Líder del diseño e implementación del PESV
                  </td>
                </tr>
                <tr>
                  <td>1.1</td>
                  <td>Todos los niveles</td>
                  <td>
                    ¿Se tiene designada una persona con poder de decisión en los
                    temas relacionados con la gestión de la seguridad vial para
                    que lidere el diseño e implementación del PESV y lo articule
                    con el SG-SST?
                  </td>
                  <td>
                    Documento: Designación de funciones y responsabilidades del
                    líder del PESV - Competencia del líder del PESV. Firmado por
                    nivel directivo - gerencia
                  </td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1.2</td>
                  <td>Todos los niveles</td>
                  <td>
                    El líder del diseño e implementación del PESV es el
                    responsable de diligenciar el reporte de autogestión anual y
                    los resultados de la medición de los indicadores del plan
                    estratégico de seguridad vial
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 2. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El Comité de Seguridad Vial (CSV) cumple con las responsabilidades y funciones del paso 2?
                  </td>
                  <td>Documento: Acta de Reunión CSV - Plan de Trabajo - Seguimiento trimestral del PESV - Indicadores</td>
                  <td>NO CUMPLE</td>
                  <td>Curso de 50 horas para los miembros del COPASST (PESV)</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 3. Líder del diseño e implementación del PESV
                  </td>
                </tr>
                <tr>
                  <td>1.1</td>
                  <td>Todos los niveles</td>
                  <td>
                    ¿Se tiene designada una persona con poder de decisión en los
                    temas relacionados con la gestión de la seguridad vial para
                    que lidere el diseño e implementación del PESV y lo articule
                    con el SG-SST?
                  </td>
                  <td>
                    Documento: Designación de funciones y responsabilidades del
                    líder del PESV - Competencia del líder del PESV. Firmado por
                    nivel directivo - gerencia
                  </td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1.2</td>
                  <td>Todos los niveles</td>
                  <td>
                    El líder del diseño e implementación del PESV es el
                    responsable de diligenciar el reporte de autogestión anual y
                    los resultados de la medición de los indicadores del plan
                    estratégico de seguridad vial
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 4. Líder del diseño e implementación del PESV
                  </td>
                </tr>
                <tr>
                  <td>1.1</td>
                  <td>Todos los niveles</td>
                  <td>
                    ¿Se tiene designada una persona con poder de decisión en los
                    temas relacionados con la gestión de la seguridad vial para
                    que lidere el diseño e implementación del PESV y lo articule
                    con el SG-SST?
                  </td>
                  <td>
                    Documento: Designación de funciones y responsabilidades del
                    líder del PESV - Competencia del líder del PESV. Firmado por
                    nivel directivo - gerencia
                  </td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 5. Líder del diseño e implementación del PESV
                  </td>
                </tr>
                <tr>
                  <td>1.1</td>
                  <td>Todos los niveles</td>
                  <td>
                    ¿Se tiene designada una persona con poder de decisión en los
                    temas relacionados con la gestión de la seguridad vial para
                    que lidere el diseño e implementación del PESV y lo articule
                    con el SG-SST?
                  </td>
                  <td>
                    Documento: Designación de funciones y responsabilidades del
                    líder del PESV - Competencia del líder del PESV. Firmado por
                    nivel directivo - gerencia
                  </td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1.2</td>
                  <td>Todos los niveles</td>
                  <td>
                    El líder del diseño e implementación del PESV es el
                    responsable de diligenciar el reporte de autogestión anual y
                    los resultados de la medición de los indicadores del plan
                    estratégico de seguridad vial
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 6. Líder del diseño e implementación del PESV
                  </td>
                </tr>
                <tr>
                  <td>1.1</td>
                  <td>Todos los niveles</td>
                  <td>
                    ¿Se tiene designada una persona con poder de decisión en los
                    temas relacionados con la gestión de la seguridad vial para
                    que lidere el diseño e implementación del PESV y lo articule
                    con el SG-SST?
                  </td>
                  <td>
                    Documento: Designación de funciones y responsabilidades del
                    líder del PESV - Competencia del líder del PESV. Firmado por
                    nivel directivo - gerencia
                  </td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>1.2</td>
                  <td>Todos los niveles</td>
                  <td>
                    El líder del diseño e implementación del PESV es el
                    responsable de diligenciar el reporte de autogestión anual y
                    los resultados de la medición de los indicadores del plan
                    estratégico de seguridad vial
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 7. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El Comité de Seguridad Vial (CSV) cumple con las responsabilidades y funciones del paso 2?
                  </td>
                  <td>Documento: Acta de Reunión CSV - Plan de Trabajo - Seguimiento trimestral del PESV - Indicadores</td>
                  <td>NO CUMPLE</td>
                  <td>Curso de 50 horas para los miembros del COPASST (PESV)</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 8. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El Comité de Seguridad Vial (CSV) cumple con las responsabilidades y funciones del paso 2?
                  </td>
                  <td>Documento: Acta de Reunión CSV - Plan de Trabajo - Seguimiento trimestral del PESV - Indicadores</td>
                  <td>NO CUMPLE</td>
                  <td>Curso de 50 horas para los miembros del COPASST (PESV)</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 9. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 10. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El Comité de Seguridad Vial (CSV) cumple con las responsabilidades y funciones del paso 2?
                  </td>
                  <td>Documento: Acta de Reunión CSV - Plan de Trabajo - Seguimiento trimestral del PESV - Indicadores</td>
                  <td>NO CUMPLE</td>
                  <td>Curso de 50 horas para los miembros del COPASST (PESV)</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 11. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El Comité de Seguridad Vial (CSV) cumple con las responsabilidades y funciones del paso 2?
                  </td>
                  <td>Documento: Acta de Reunión CSV - Plan de Trabajo - Seguimiento trimestral del PESV - Indicadores</td>
                  <td>NO CUMPLE</td>
                  <td>Curso de 50 horas para los miembros del COPASST (PESV)</td>
                </tr>
                <tr>
                  <td>2.4</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El Comité de Seguridad Vial (CSV) cumple con las responsabilidades y funciones del paso 2?
                  </td>
                  <td>Documento: Acta de Reunión CSV - Plan de Trabajo - Seguimiento trimestral del PESV - Indicadores</td>
                  <td>NO CUMPLE</td>
                  <td>Curso de 50 horas para los miembros del COPASST (PESV)</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 12. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 13. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 14. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 15. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 16. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 17. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 18. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.4</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.5</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 19. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 20. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 21. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 22. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.4</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿En caso que el Comité de Seguridad Vial (CSV) está
                    integrado con el COPASST, cumple los requisitos definidos en
                    la normativa vigente en materia de Seguridad y Salud en el
                    Trabajo?
                  </td>
                  <td></td>
                  <td>CUMPLE</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 23. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-center bg-info">
                    PASO 24. Comité de Seguridad vial
                  </td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>Estándar - Avanzado</td>
                  <td>
                    ¿El nivel directivo designó los miembros del Comité de
                    Seguridad Vial (CSV), este comité está conformado por al
                    menos tres (3) personas con poder de decisión (incluyendo al
                    líder del PESV y se recomienda número impar de
                    participantes)?
                  </td>
                  <td>
                    Documento: Designación miembros del comité PESV, funciones,
                    responsabilidades, competencia y formación requeridos.
                    Firmado nivel directivo - gerencia
                  </td>
                  <td>CUMPLE PARCIALMENTE</td>
                  <td>Formación de los integrantes queda pendiente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
