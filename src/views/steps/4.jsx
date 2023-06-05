import { useState } from "react";
import Select from "react-select";
import axiosClient from "../../axios-client";
import { useForm } from "react-hook-form";
import { useStateContext } from "../../contexts/ContextProvider";

export default function Step4() {
  const { setSteps } = useStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [ciudades, setCiudades] = useState(null);
  const steps_id = 4;
  const onSubmit = (payload) => {
    axiosClient
      .post(
        `/steps/${steps_id}/update`, // StepsController::class, 'saveStep'
        {
          payload: payload,
        }
      )
      .then(({ data }) => {
        setSteps(data);
        location.href = "inicio";
      });
  };

  if (!ciudades) {
    axiosClient.get("/ciudades/all").then(({ data }) => {
      setCiudades(data);
    });
  }

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
          <div className="col-sm-6">
              <h1 className="m-0">PLANIFICACION - Paso #4</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/inicio">Inicio</a></li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">
                    Liderazgo, compromiso y correspondencia del nivel directivo{" "}
                  </h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div
                            className="card-body table-responsive p-0"
                            style={{ height: 400 }}
                          >
                            <table className="table table-head-fixed">
                              <thead>
                                <tr>
                                  <th>Postulado Resolución</th>
                                  <th>Cumple&nbsp;&nbsp;&nbsp;</th>
                                  <th>Evidencia</th>
                                  <th>Responsable</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    a. La definición de la política y los
                                    objetivos del PESV. que sean compatibles con
                                    la dirección estratégica de la organización,
                                    buscando prevenir siniestros viales, reducir
                                    las muertes y disminuir el riesgo de
                                    lesiones o daños derivados de los siniestros
                                    viales.
                                  </td>
                                  <td style={{ width: "11%" }}>
                                    <select
                                      className="form-control"
                                      {...register("a", { required: true })}
                                    >
                                      <option>NO</option>
                                      <option>SI</option>
                                    </select>
                                  </td>
                                  <td>
                                    Política y objetivos gerenciales
                                    relacionados con la SV.
                                  </td>
                                  <td>HSEQ, Gerencia</td>
                                </tr>
                                <tr>
                                  <td>
                                    b. Promover en la organización la formación
                                    y aplicación de hábitos, comportamientos y
                                    conductas seguras en la vía.
                                  </td>
                                  <td>
                                    <select
                                      className="form-control"
                                      {...register("b", { required: true })}
                                    >
                                      <option>NO</option>
                                      <option>SI</option>
                                    </select>
                                  </td>
                                  <td>
                                    Política y objetivos gerenciales
                                    relacionados con la SV.
                                  </td>
                                  <td>HSEQ, Gerencia</td>
                                </tr>
                                <tr>
                                  <td>
                                    c. El suministro de recursos financieros,
                                    técnicos y humanos requeridos para el
                                    diseño, implementación, verificación y
                                    mejora del PESV.
                                  </td>
                                  <td>
                                    <select
                                      className="form-control"
                                      {...register("c", { required: true })}
                                    >
                                      <option>NO</option>
                                      <option>SI</option>
                                    </select>
                                  </td>
                                  <td>
                                    Política y objetivos gerenciales
                                    relacionados con la SV.
                                  </td>
                                  <td>HSEQ, Gerencia</td>
                                </tr>
                                <tr>
                                  <td>
                                    d. La adquisición o contratación de
                                    vehículos, equipos, repuestos y servicios
                                    que cumplan especificaciones de seguridad,
                                    de acuerdo con la normatividad vigente en la
                                    materia.
                                  </td>
                                  <td>
                                    <select
                                      className="form-control"
                                      {...register("d", { required: true })}
                                    >
                                      <option>NO</option>
                                      <option>SI</option>
                                    </select>
                                  </td>
                                  <td>
                                    Política y objetivos gerenciales
                                    relacionados con la SV.
                                  </td>
                                  <td>HSEQ, Gerencia</td>
                                </tr>
                                <tr>
                                  <td>
                                    e. El seguimiento para que los contratistas,
                                    afiliados, asociados, terceros y la
                                    comunidad de la organización cumplan los
                                    requisitos de seguridad vial que establezca
                                    la organización.
                                  </td>
                                  <td>
                                    <select
                                      className="form-control"
                                      {...register("e", { required: true })}
                                    >
                                      <option>NO</option>
                                      <option>SI</option>
                                    </select>
                                  </td>
                                  <td>
                                    Política y objetivos gerenciales
                                    relacionados con la SV.
                                  </td>
                                  <td>HSEQ, Gerencia</td>
                                </tr>
                                <tr>
                                  <td>
                                    f. El cumplimiento de las acciones y
                                    estrategias definidas en el plan de trabajo
                                    anual del PESV.
                                  </td>
                                  <td>
                                    <select
                                      className="form-control"
                                      {...register("f", { required: true })}
                                    >
                                      <option>NO</option>
                                      <option>SI</option>
                                    </select>
                                  </td>
                                  <td>
                                    Política y objetivos gerenciales
                                    relacionados con la SV.
                                  </td>
                                  <td>HSEQ, Gerencia</td>
                                </tr>
                                <tr>
                                  <td>
                                    g. La atención oportuna de la solicitud de
                                    información por parte de las entidades
                                    verificadoras, la participación en la
                                    reunión de apertura y reunión de cierre y la
                                    gestión de los hallazgos resultantes de las
                                    visitas de verificación que realicen el
                                    Ministerio de Trabajo, la Superintendencia
                                    de Transporte o los Organismos de Tránsito
                                    según corresponda de acuerdo con la función
                                    de verificación de la implementación del
                                    Plan Estratégico de Seguridad Vial de
                                    conformidad con lo establecido en el
                                    artículo 1o de la Ley 2050 de 2020 y las
                                    disposiciones que lo reglamenten.
                                  </td>
                                  <td>
                                    <select
                                      className="form-control"
                                      {...register("g", { required: true })}
                                    >
                                      <option>NO</option>
                                      <option>SI</option>
                                    </select>
                                  </td>
                                  <td>
                                    Política y objetivos gerenciales
                                    relacionados con la SV.
                                  </td>
                                  <td>HSEQ, Gerencia</td>
                                </tr>
                                <tr>
                                  <td>
                                    h. La participación en una (1) reunión del
                                    comité de seguridad vial por lo menos una
                                    (1) vez al año para revisar los resultados
                                    de la planificación, implementación,
                                    seguimiento y mejora del PESV.
                                  </td>
                                  <td>
                                    <select
                                      className="form-control"
                                      {...register("h", { required: true })}
                                    >
                                      <option>NO</option>
                                      <option>SI</option>
                                    </select>
                                  </td>
                                  <td>
                                    Política y objetivos gerenciales
                                    relacionados con la SV.
                                  </td>
                                  <td>HSEQ, Gerencia</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
