export default function Step62() {
  const mostrarInfo = (info) => {
    toastr.info(info);
  };
  return (
    <div>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="col-sm-12">
          <h4 className="m-0">
            PLANIFICACIÓN - Paso #6.2 - Matriz de Registro de Riesgos
          </h4>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <div className="row">
              <div className="col-md-12">
                <h6 className="card-title">
                  6.2 ¿Se tiene definido y aplicado un procedimiento de
                  evaluación y control de riesgos en seguridad vial y al menos
                  contiene los requisitos definidos en el paso 6?
                </h6>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-12">
                <table className="table table-bordered table-hover table-sm">
                  <thead>
                    <tr>
                      <th colSpan={2}>
                        <h6>
                          Evaluación basal de riesgos para puesta en marcha del
                          plan de ejecución 2023
                        </h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        <h6>
                          RI(ia): Cantidad de riesgos identificados al inicio
                          del año
                        </h6>
                      </th>
                      <td>
                        <h6>5</h6>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <h6>
                          RVA(ia): Cantidad de riesgos con valoración alta al
                          inicio del año
                        </h6>
                      </th>
                      <td>
                        <h6>2</h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 col-sm-12">
                <button
                  type="button"
                  className="btn btn-app bg-secondary"
                  data-toggle="modal"
                  data-target="#modal-lg"
                >
                  Nuevo registro
                </button>
                <a href="/steps/9" className="btn btn-app bg-secondary">
                  Ir a 6.3
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
                      <th colSpan={4}>Registro de Riesgos</th>
                      <th colSpan={5} rowSpan={2}>
                        Actores Viales de la empresa
                      </th>
                      <th colSpan={4}>Análisis cualitativo de riesgos</th>
                    </tr>
                    <tr>
                      <th>ID</th>
                      <th width={300}>Causa</th>
                      <th width={200}>Evento</th>
                      <th width={200}>Impacto</th>
                      <th width={20} className="text-center">
                        <button
                          className="btn btn-info btn-sm"
                          onClick={(e) => mostrarInfo("Nivel de probabilidad")}
                        >
                          <i className="fa fa-info" />
                        </button>
                      </th>
                      <th width={20} className="text-center">
                        <button
                          className="btn btn-info btn-sm"
                          onClick={(e) => mostrarInfo("Nivel de impacto")}
                        >
                          <i className="fa fa-info" />
                        </button>
                      </th>
                      <th width={20} className="text-center">
                        <button
                          className="btn btn-info btn-sm"
                          onClick={(e) => mostrarInfo("Valoración del riesgo")}
                        >
                          <i className="fa fa-info" />
                        </button>
                      </th>
                      <th width={20} className="text-center">
                        <button
                          className="btn btn-info btn-sm"
                          onClick={(e) => mostrarInfo("Nivel de Riesgo")}
                        >
                          <i className="fa fa-info" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        Retrasos y/o mala planificación de tiempos de ruta.
                      </td>
                      <td>Exceso de velocidad</td>
                      <td>Accidentes viales graves</td>
                      <td colSpan={5}>
                        <div className="form-group">
                          <select
                            className="select2bs4"
                            multiple="multiple"
                            data-placeholder="Seleccione actor vial"
                            style={{
                              width: "100%",
                            }}
                          >
                            <option selected>Conductor</option>
                            <option>Biciusuario</option>
                            <option selected>Motorizado</option>
                            <option>Peatón</option>
                            <option>Pasajero</option>
                          </select>
                        </div>
                      </td>
                      <td>2</td>
                      <td>3</td>
                      <td>6</td>
                      <td className="bg-red">Alto</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>No aplicación manejo preventivo.</td>
                      <td>Choques con otros actores viales</td>
                      <td>Accidentes con terceros</td>
                      <td colSpan={5}>
                        <div className="form-group">
                          <select
                            className="select2bs4"
                            multiple="multiple"
                            data-placeholder="Seleccione actor vial"
                            style={{
                              width: "100%",
                            }}
                          >
                            <option selected>Conductor</option>
                            <option selected>Biciusuario</option>
                            <option selected>Motorizado</option>
                            <option>Peatón</option>
                            <option>Pasajero</option>
                          </select>
                        </div>
                      </td>
                      <td>2</td>
                      <td>2</td>
                      <td>4</td>
                      <td className="bg-warning">Medio</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Incumplimiento normas de seguridad.</td>
                      <td>No uso del cinturón de seguridad</td>
                      <td>Lesiones en accidentes viales</td>
                      <td colSpan={5}>
                        <div className="form-group">
                          <select
                            className="select2bs4"
                            multiple="multiple"
                            data-placeholder="Seleccione actor vial"
                            style={{
                              width: "100%",
                            }}
                          >
                            <option selected>Conductor</option>
                            <option>Biciusuario</option>
                            <option>Motorizado</option>
                            <option>Peatón</option>
                            <option selected>Pasajero</option>
                          </select>
                        </div>
                      </td>
                      <td>1</td>
                      <td>2</td>
                      <td>2</td>
                      <td className="bg-green">Bajo</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Incumplimiento normas de seguridad.</td>
                      <td>Uso del celular en la Conducción</td>
                      <td>Accidentes viales</td>
                      <td colSpan={5}>
                        <div className="form-group">
                          <select
                            className="select2bs4"
                            multiple="multiple"
                            data-placeholder="Seleccione actor vial"
                            style={{
                              width: "100%",
                            }}
                          >
                            <option selected>Conductor</option>
                            <option>Biciusuario</option>
                            <option selected>Motorizado</option>
                            <option>Peatón</option>
                            <option>Pasajero</option>
                          </select>
                        </div>
                      </td>
                      <td>2</td>
                      <td>3</td>
                      <td>6</td>
                      <td className="bg-red">Alto</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Incumplimiento normas de seguridad.</td>
                      <td>
                        Conducción bajo la influencia de sustancias psicoactivas
                      </td>
                      <td>Accidentes viales</td>
                      <td colSpan={5}>
                        <div className="form-group">
                          <select
                            className="select2bs4"
                            multiple="multiple"
                            data-placeholder="Seleccione actor vial"
                            style={{
                              width: "100%",
                            }}
                          >
                            <option selected>Conductor</option>
                            <option selected>Biciusuario</option>
                            <option selected>Motorizado</option>
                            <option>Peatón</option>
                            <option>Pasajero</option>
                          </select>
                        </div>
                      </td>
                      <td>1</td>
                      <td>2</td>
                      <td>2</td>
                      <td className="bg-green">Bajo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white"></div>
        </div>
        <div className="modal fade" id="modal-lg">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Nuevo registro</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <label htmlFor="creador">Causa</label>
                    <input
                      type="text"
                      className="form-control"
                      id="creador"
                      placeholder="Ingrese causa"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="destinatario">Evento</label>
                    <input
                      type="text"
                      className="form-control"
                      id="destinatario"
                      placeholder="Ingrese evento"
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="creador">Impacto</label>
                    <input
                      type="text"
                      className="form-control"
                      id="creador"
                      placeholder="Ingrese impacto"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="actores">Actores Viales</label>
                      <select
                        className="select2bs4"
                        multiple="multiple"
                        id="actores"
                        data-placeholder="Seleccione actor vial"
                        style={{
                          width: "100%",
                        }}
                      >
                        <option>Conductor</option>
                        <option>Biciusuario</option>
                        <option>Motorizado</option>
                        <option>Peatón</option>
                        <option>Pasajero</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="destinatario">Nivel de Impacto</label>
                    <input
                      type="number"
                      className="form-control"
                      id="destinatario"
                      placeholder="Ingrese nivel de impacto"
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="creador">Nivel de Probabilidad</label>
                    <input
                      type="number"
                      className="form-control"
                      id="creador"
                      placeholder="Ingrese nivel de probabilidad"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
      </div>
    </div>
  );
}
