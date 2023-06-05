import { useState, useEffect } from "react";
import Select from "react-select";
import axiosClient from "../../axios-client";
import { useForm } from "react-hook-form";
import { useStateContext } from "../../contexts/ContextProvider";

export default function Step52() {
  const { steps, setSteps } = useStateContext();
  const [internalIsLoading, setInternalIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [colaboradores, setColaboradores] = useState([]);
  const [conductorSeleccionado, setConductorSeleccionado] = useState(null);

  function validarEncuesta(id) {
    if (steps[1]) {
      let temp = steps[1].filter((steps) => steps?.steps_id == 30);
      if (temp[0]) {
        let temp2 = JSON.parse(temp[0].payload);
        let bandera = 0;
        temp2.forEach((element) => {
          if (id == element.id) {
            bandera++;
          }
        });
        if (bandera) return false;
      }
    }
    return true;
  }
  const colaboradoresPendientes =
    colaboradores
      .filter((colaborador) => {
        //return !(0 == colaborador[1] || 1 == colaborador[1]);
        return validarEncuesta(colaborador[1]);
      })
      .map((colaborador) => {
        return {
          value: colaborador[1],
          label: colaborador[2],
        };
      }) ?? [];

  useEffect(() => {
    axiosClient
      .get("/collaborators") // StepsController::class, 'getCollaborators'
      .then((res) => {
        setColaboradores(res.data.colaboradores);
      })
      .catch((err) => console.log(err));
  }, [steps]);

  const onSubmit2 = async (payload) => {
    await setColaboradores(
      colaboradores?.map((cond) => {
        if (cond[1] == conductorSeleccionado?.value) {
          payload.id = cond[1];
          setConductorSeleccionado(null);
        }
        return cond;
      })
    );

    let arrayPayload = [];
    for (var i = 0; i < steps[1].length; i++) {
      if (steps[1][i].steps_id == 30) {
        arrayPayload = JSON.parse(steps[1][i].payload);
      }
    }

    arrayPayload.push(payload);
    await axiosClient
      .post(`/steps/30/update`, {
        payload: arrayPayload,
      })
      .then(({ data }) => {
        setSteps(data);
        if (colaboradoresPendientes.length <= 1) {
          location.href = "inicio";
        }
      });
  };

  const CompB = () => {
    return (
      <div>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">PLANIFICACIÓN - Paso #5.2</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/inicio">Inicio</a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">
                      Escoja los colaboradores faltantes de la encuesta para
                      diligenciarla.
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit2)}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group">
                            <label>1. Nombre Conductor</label>
                            <Select
                              placeholder={"Seleccione un conductor"}
                              isClearable={true}
                              options={colaboradoresPendientes}
                              required={true}
                              isDisabled={colaboradoresPendientes === null}
                              isLoading={colaboradoresPendientes === null}
                              value={conductorSeleccionado}
                              onChange={(e) =>
                                setConductorSeleccionado(e ?? null)
                              }
                            />
                            <small>
                              {conductorSeleccionado === null &&
                                "Este campo es requerido"}
                            </small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label htmlFor="municipio">
                              2. Municipio o Región
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Municipio o Región"
                              {...register("municipio", { required: true })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group">
                            <label htmlFor="contrato">3. Contrato</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Contrato"
                              {...register("contrato", { required: true })}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label htmlFor="edad">4. Edad</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Edad"
                              {...register("edad", { required: true })}
                            />
                          </div>
                        </div>
                      </div>
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
                                    <th>Pregunta</th>
                                    <th>Respuesta&nbsp;&nbsp;&nbsp;</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>5. VEHICULO QUE CONDUCE</td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("vehiculo", {
                                          required: true,
                                        })}
                                      >
                                        <option>CAMIONETA</option>
                                        <option>CAMPERO</option>
                                        <option>MICROBUS</option>
                                        <option>VANS</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      6. AÑOS DE EXPERIENCIA EN LA CONDUCCION DE
                                      TRANSPORTE PUBLICO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("experiencia", {
                                          required: true,
                                        })}
                                      >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      7. HA TENIDO ACCIDENTES O INCIDENTES
                                      VIALES EN LOS ULTIMOS 2 AÑOS
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("accidentes", {
                                          required: true,
                                        })}
                                      >
                                        <option>SI</option>
                                        <option>NO</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      8. CONOCE LA POLÍTICA Y OBJETIVOS DE
                                      SEGURIDAD VIAL DE LA EMPRESA
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("politica", {
                                          required: true,
                                        })}
                                      >
                                        <option>SI</option>
                                        <option>NO</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      9. CONOCE LAS LECCIONES APRENDIDAS DE
                                      ACCIDENTES OCURRIDOS A OTROS COMPAÑEROS EN
                                      LA EMPRESA
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("lecciones", {
                                          required: true,
                                        })}
                                      >
                                        <option>SI</option>
                                        <option>NO</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      10. CONOCE CÓMO ACTUAR ANTE CUALQUIER
                                      EMERGENCIA QUE SE PRESENTE DURANTE LA
                                      PRESTACIÓN DEL SERVICIO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("actuar", {
                                          required: true,
                                        })}
                                      >
                                        <option>SI</option>
                                        <option>NO</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      11. USA EL CINTURÓN DE SEGURIDAD CUANDO EL
                                      VEHÍCULO ESTA CON EL MOTOR ENCENDIDO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("cinturon", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      12.EXIGE LE USO DEL CINTURÓN DE SEGURIDAD
                                      A LOS PASAJEROS
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("cinturon_pasajeros", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      13.RESPETA LAS SEÑALES DE CEDA EL PASO Y
                                      SEMÁFOROS
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("semaforos", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      14. REDUCE LA VELOCIDAD EN LA
                                      INTERSECCIÓN, AUN CUANDO TIENE EL DERECHO
                                      DE PASO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("velocidad_interseccion", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      15. EXCEDE LOS LÍMITES DE VELOCIDAD
                                      ESTABLECIDOS POR LA EMPRESA (ALERTAS DE
                                      GPS)
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("limites_velocidad", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      16. CONDUCE CON SUEÑO, FATIGA O CANSANCIO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("fatiga", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      17. USA EL CELULAR U OTROS DISPOSITIVOS
                                      DISTRACTORES MIENTRAS CONDUCE
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("celular", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      18. HACE LA REVISIÓN PRE-OPERACIONAL
                                      DIARIA DEL VEHÍCULO A CONCIENCIA, ANTES DE
                                      INICIAR SU JORNADA DE CONDUCCIÓN
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("revision", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      19. CUMPLE CON EL DÍA DE DESCANSO A LA
                                      SEMANA
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("dia_descanso", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      20. ALGUNA VEZ LOS PASAJEROS LE HAN PEDIDO
                                      QUE INCUMPLA LAS NORMAS DE SEGURIDAD PARA
                                      LLEVARLOS A SU DESTINO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("incumplir_normas", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      21. SE INFORMA CON ANTICIPACIÓN SOBRE LOS
                                      RIESGOS DE LA RUTA POR DONDE VA A
                                      TRANSITAR A SU DESTINO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("riesgos_ruta", {
                                          required: true,
                                        })}
                                      >
                                        <option>Nunca</option>
                                        <option>Casi nunca</option>
                                        <option>Algunas veces</option>
                                        <option>Casi siempre</option>
                                        <option>Siempre</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      22. IDONEIDAD DE LOS CONDUCTORES DE LA
                                      EMPRESA
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("idoneidad", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      23. CONDICIONES DEL TERRENO EN LAS VÍAS
                                      DONDE CIRCULA
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("terreno", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      24. AUSENCIA DE SEÑALIZACIÓN VIAL EN LAS
                                      VÍAS DONDE TRANSITA
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("ausencia", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      25. CONDICIONES GEOMÉTRICAS DE LAS VÍAS
                                      POR DONDE TRANSITA (RADIOS DE GIRO EN
                                      CURVAS, PERALTES, PENDIENTES, ETC.)
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("geometricas", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      26. ESTADO MECÁNICO DEL VEHÍCULO QUE OPERA
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("estado_mecanico", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      27. TIEMPOS JORNADAS DE CONDUCCIÓN Y
                                      DESCANSO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("jornadas", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      28. SEÑALIZACIÓN Y ORDEN DE LA OPERACIÓN
                                      INTERNA EN LAS INSTALACIONES DE LOS
                                      CLIENTES DONDE SE PRESTA EL SERVICIO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("orden_operacion", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>29. PRESENCIA DE ANIMALES EN LA VÍA</td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("animales", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      30. MOTORIZADOS, PEATONES O BICIUSUARIOS
                                      IMPRUDENTES
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("imprudentes", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      31. CONTROLES A LOS EXCESOS DE VELOCIDAD
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("excesos", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      32. CONTROLES A LOS ESTADOS DE ALCOHOLISMO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("alcoholismo", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      33. COMPROMISO DE LOS COMPAÑEROS CON LA
                                      SEGURIDAD DEL SERVICIO
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("seguridad_servicio", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>34. RETROALIMENTACIÓN DE LOS JEFES</td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("retroalimentacion", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      35. PARTICIPACIÓN EN ACTIVIDADES DE
                                      SENSIBILIZACIÓN
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("sensibilizacion", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      36. CONOCIMIENTO Y RESPETO DE LAS NORMAS
                                      DE SEGURIDAD POR PARTE DE LOS PASAJEROS O
                                      USUARIOS DE LA RUTA
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        {...register("normas_seguridad", {
                                          required: true,
                                        })}
                                      >
                                        <option>Muy bajo</option>
                                        <option>Medio bajo</option>
                                        <option>Medio</option>
                                        <option>Medio alto</option>
                                        <option>Alto</option>
                                      </select>
                                    </td>
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
                        Guardar y Continuar
                      </button>
                      &nbsp;&nbsp;
                      <a href="/inicio" className="btn btn-primary btn-sm">
                        Salir
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="loader-container" hidden={internalIsLoading}>
        <div className="spinner"></div>
      </div>
      <CompB />
    </div>
  );
}
