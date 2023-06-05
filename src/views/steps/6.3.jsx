export default function Step63() {
  const mostrarInfo = (info) => {
    toastr.info(info);
  };
  return (
    <div>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="col-sm-12">
          <h4 className="m-0">PLANIFICACIÓN - Paso #6.3 - Plan de Respuesta</h4>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <div className="row">
              <div className="col-md-12">
                <h6 className="card-title">
                  6.3 ¿Se tiene definido y aplicado un procedimiento de
                  evaluación y control de riesgos en seguridad vial y al menos
                  contiene los requisitos definidos en el paso 6?
                </h6>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-12 col-sm-12">
                <a href="/steps/8" className="btn btn-app bg-secondary">
                  Ir a 6.2
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <table
                  id="paso6"
                  className="table table-bordered table-hover table-sm"
                >
                  <thead>
                    <tr>
                      <th>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={(e) => mostrarInfo("Valoración del riesgo")}
                        >
                          <i className="fa fa-info" />
                        </button>
                      </th>
                      <th>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={(e) => mostrarInfo("Nivel de Riesgo")}
                        >
                          <i className="fa fa-info" />
                        </button>
                      </th>
                      <th>ID</th>
                      <th>Causa</th>
                      <th>Evento</th>
                      <th>Impacto</th>
                      <th>Estrategia de Gestión</th>
                      <th>Acción de Respuesta</th>
                      <th>Responsable</th>
                      <th>Evidencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>6</td>
                      <td className="bg-red">Alto</td>
                      <td>1</td>
                      <td>
                        Retrasos y/o mala planificación de tiempos de ruta.
                      </td>
                      <td>Exceso de velocidad</td>
                      <td>Accidentes viales graves</td>
                      <td>Mitigar</td>
                      <td>
                        Implementar el programa de gestión de la velocidad
                      </td>
                      <td>Operativo</td>
                      <td>Ficha del programa y registros</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="bg-warning">Medio</td>
                      <td>2</td>
                      <td>No aplicación manejo preventivo.</td>
                      <td>Choques con otros actores viales</td>
                      <td>Accidentes con terceros</td>
                      <td>Mitigar</td>
                      <td>
                        Plan de entrenamiento y capacitación teorico proactica
                      </td>
                      <td>Operativo</td>
                      <td>Regisro de asistencia e informe fotográfico</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="bg-red">Alto</td>
                      <td>4</td>
                      <td>Incumplimiento normas de seguridad.</td>
                      <td>Uso del celular en la Conducción</td>
                      <td>Accidentes viales</td>
                      <td>Evitar</td>
                      <td>Programa de prevención de la distracción</td>
                      <td>Operativo</td>
                      <td>Ficha del programa y registros</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white"></div>
        </div>
      </div>
    </div>
  );
}
