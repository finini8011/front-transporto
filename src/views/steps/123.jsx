import { useEffect, useState } from "react";
import Select from "react-select";
import axiosClient from "../../axios-client";
import { useForm } from "react-hook-form";
import { useStateContext } from "../../contexts/ContextProvider";
import { isDate } from "lodash";

export default function Step123({ steps_id }) {
  const { steps, setSteps } = useStateContext();
  const [descripcion, setDescripcion] = useState();
  const [defaultValue, setDefaultValue] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [defaultCrea, setDefaultCrea] = useState([]);
  const [defaultParte2, setDefaultParte2] = useState([]);
  const [archivos, setArchivos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      $("#paso1").DataTable().destroy();
    }, 100);
    refreshArchivos();
  }, []);
  useEffect(() => {
    $("#paso1").DataTable();
  }, [archivos]);

  function refreshArchivos() {
    axiosClient
      .get("/files") // StepsController::class, 'getFiles'
      .then((res) => {
        setArchivos(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (steps[1]) {
      let temp = steps[1].filter((steps) => steps?.steps_id == 42);
      if (temp[0]) {
        let temp2 = JSON.parse(temp[0]?.payload);
        if (temp2.length) {
          setDefaultCrea(temp2[temp2.length - 1]);
        }
      }
      let tempo = steps[1].filter((steps) => steps?.steps_id == 43);
      if (tempo[0]) {
        let tempo2 = JSON.parse(tempo[0]?.payload);

        if (tempo2.length) {
          setDefaultParte2(tempo2[tempo2.length - 1]);
        }
      }
      if (steps[1]) {
        let tempor = steps[1].filter((steps) => steps?.steps_id == 44);
        if (tempor[0]) {
          let tempor2 = JSON.parse(tempor[0]?.payload);
          setArchivos(tempor2);
        }
      }
    }
    let descripcionTemp = "";
    steps[2]?.forEach((element) => {
      if (element.id == steps_id) {
        descripcionTemp = element.descripcion;
        return;
      }
    });
    setDescripcion(descripcionTemp);

    var curr = new Date();
    curr.setUTCHours(curr.getUTCHours() - 5);
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0, 10);
    setDefaultValue(date);
  }, [steps]);

  const registerForm = () => {
    const { register, formState, handleSubmit } = useForm();
    return { register, formState, handleSubmit };
  };

  const forms = {
    head: registerForm(),
    body: registerForm(),
    footer: registerForm(),
  };
  const registerHead = forms.head.register;
  const registerBody = forms.body.register;
  const registerFooter = forms.footer.register;

  const [ciudades, setCiudades] = useState(false);

  const onSubmit = (payload) => {
    if (selectedFile) {
      axiosClient
        .post(
          `/steps/42/load_file`,
          {
            payload: payload,
            file: selectedFile,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(({ data }) => {
          setSteps(data);
          toastr.success("Datos y archivo cargados con éxito");
          //location.href = "inicio";
        });
    } else {
      toastr.error("Le falta cargar el archivo");
    }
  };
  const onSubmit2 = (payload) => {
    //payload.ciudad = selectedCiudad?.value;
    axiosClient
      .post(`/steps/43/update`, {
        // StepsController::class, 'saveStep'
        payload: [payload],
      })
      .then(({ data }) => {
        setSteps(data);
        toastr.success("Datos cargados con éxito");
        //location.href = "inicio";
      });
  };
  const onSubmit3 = (payload) => {
    if (selectedFile2) {
      axiosClient
        .post(
          `/steps/44/load_file`,
          {
            payload: payload,
            file: selectedFile2,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(({ data }) => {
          setSteps(data);
          toastr.success("Datos y archivo cargados con éxito");
          document.getElementById("creadorAdicional").value = "";
          document.getElementById("destinatarioAdicional").value = "";
          document.getElementById("descripcion").value = "";
          setSelectedFile2(null);
          $("#paso1").DataTable().destroy();
          
          //location.href = "inicio";
        });
    } else {
      toastr.error("Le falta cargar el archivo");
    }
  };

  if (ciudades === false) {
    setCiudades(null);
    axiosClient.get("/ciudades/all").then(async ({ data }) => {
      let _ciudades = await data.map((ciudad) => {
        return { value: ciudad.label, label: ciudad.label };
      });
      setCiudades(_ciudades);
    });
  }

  const descargarArchivo = () => {
    if (defaultCrea.originalName) {
      let originalName = defaultCrea.originalName;
      let internalName = defaultCrea.fileName;
      axiosClient
        .get(`/download_file/${internalName}`, {
          responseType: "blob",
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", originalName);
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toastr.error("No se ha cargado el archivo");
    }
  };

  const descargarArchivoAdicional = (originalName, internalName) => {
    axiosClient
      .get(`/download_file/${internalName}`, {
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", originalName);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="col-sm-12">
          <h4 className="m-0">
            PLANIFICACION - Paso #{steps_id} - {descripcion}
          </h4>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <div className="row">
              <div className="col-md-12">
                <h6 className="card-title">
                  1.1 ¿Se tiene designada una persona con poder de decisión en
                  los temas relacionados con la gestión de la seguridad vial
                  para que lidere el diseño e implementación del PESV y lo
                  articule con el SG-SST?
                </h6>
              </div>
            </div>
          </div>
          <form onSubmit={forms.head.handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <p className="h6 text-center">
                    DOCUMENTO: Designación de funciones y responsabilidades del
                    líder del PESV - Competencia del líder PESV. Firmado por
                    nivel directivo - gerencia
                  </p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-sm-6">
                  <label htmlFor="creador">CREA</label>
                  <input
                    type="text"
                    className="form-control"
                    id="creador"
                    placeholder="Ingrese nombre"
                    defaultValue={defaultCrea.creador ?? ""}
                    {...registerHead("creador", { required: true })}
                  />
                </div>
                <div className="col-md-5 col-sm-6">
                  <label htmlFor="destinatario">DESTINATARIO</label>
                  <input
                    type="text"
                    className="form-control"
                    id="destinatario"
                    placeholder="Ingrese nombre"
                    defaultValue={defaultCrea.destinatario ?? ""}
                    {...registerHead("destinatario", { required: true })}
                  />
                </div>
                <div className="col-md-2 col-sm-12">
                  <label htmlFor="fecha">Fecha</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fecha"
                    disabled={true}
                    defaultValue={defaultCrea.uploadDate ?? defaultValue}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8 col-sm-12">
                  <label htmlFor="observaciones1-1">
                    Observaciones sobre el hallazgo o la no aplicación del
                    requisito
                  </label>
                  <textarea
                    id="observaciones1-1"
                    rows={2}
                    className="form-control"
                    defaultValue={defaultCrea.observaciones ?? ""}
                    {...registerHead("observaciones", {
                      required: true,
                    })}
                  />
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="text-center">
                    <a
                      href="templates/5.1.1_inventario_colaboradores.csv"
                      className="btn btn-app bg-secondary"
                      style={{ height: 100 }}
                    >
                      <i className="fa fa-file" /> Descargar archivo
                      <br />
                      Guía Acta de Asignación
                      <br /> Líder del PESV
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  <label>Cargar archivo</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                      <label className="custom-file-label">
                        {selectedFile?.name ?? "Seleccione el archivo"}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <label htmlFor="estado1-1">Cambiar Estado</label>
                  <select
                    className="form-control"
                    id="estado1-1"
                    //value={estado}
                    {...registerHead("cumple", {
                      required: true,
                    })}
                  >
                    <option>...</option>
                    <option>Cumple</option>
                    <option>Cumple parcialmente</option>
                    <option>No cumple</option>
                    <option>No aplica</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  <label htmlFor="archivoCargado">
                    Nombre archivo cargado&nbsp;
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="archivoCargado"
                    alt="Hola"
                    disabled
                    defaultValue={defaultCrea.originalName ?? ""}
                  />
                </div>
                <div className="col-md-4 col-sm-12">
                  <label htmlFor="estado1-11">Estado actual</label>
                  <select
                    className="form-control"
                    id="estado1-11"
                    disabled
                    value={defaultCrea.cumple}
                  >
                    <option>...</option>
                    <option>Cumple</option>
                    <option>Cumple parcialmente</option>
                    <option>No cumple</option>
                    <option>No aplica</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-footer bg-white">
              <button type="submit" className="btn btn-app bg-secondary">
                <i className="fa fa-plus-square" />
                Guardar
              </button>
              <a className="btn btn-app">
                <i className="fa fa-eye" /> Ver documento
              </a>
              <a className="btn btn-app" onClick={descargarArchivo}>
                <i className="fa fa-download" /> Descargar documento
              </a>
            </div>
          </form>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <div className="row">
              <div className="col-md-12">
                <h6 className="card-title">
                  1.2 El líder del diseño e implementación del PESV es el
                  responsable de diligenciar el reporte de autogestión anual y
                  los resultados de la medición de los indicadores del plan
                  estratégico de seguridad vial
                </h6>
              </div>
            </div>
          </div>
          <form onSubmit={forms.body.handleSubmit(onSubmit2)}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <label htmlFor="estado1-2">Cambiar estado</label>
                  <select
                    className="form-control"
                    id="estado1-2"
                    {...registerBody("cumple", {
                      required: true,
                    })}
                  >
                    <option>...</option>
                    <option>Cumple</option>
                    <option>Cumple parcialmente</option>
                    <option>No cumple</option>
                    <option>No aplica</option>
                  </select>
                </div>
                <div className="col-md-8 col-sm-12">
                  <label htmlFor="observaciones1-2">
                    Observaciones sobre el hallazgo o la no aplicación del
                    requisito
                  </label>
                  <textarea
                    id="observaciones1-2"
                    rows={2}
                    className="form-control"
                    defaultValue={defaultParte2.observaciones ?? ""}
                    {...registerBody("observaciones", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <label htmlFor="estado1-21">Estado actual</label>
                  <select
                    className="form-control"
                    id="estado1-21"
                    disabled
                    value={defaultParte2.cumple}
                  >
                    <option>...</option>
                    <option>Cumple</option>
                    <option>Cumple parcialmente</option>
                    <option>No cumple</option>
                    <option>No aplica</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-footer bg-white">
              <button type="submit" className="btn btn-app bg-secondary">
                <i className="fa fa-plus-square" />
                Guardar
              </button>
            </div>
          </form>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <div className="row">
              <div className="col-md-12">
                <h6 className="card-title">DOCUMENTOS ADICIONALES</h6>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <p className="h6 text-center">
                  Aquí podrá subir documentos adicionales aparte de los
                  considerados obligatorios dentro del PESV. Incluya quien crea
                  el documento y a quien va dirigido, así como una breve
                  descripción. La plataforma incluirá de manera automática la
                  fecha en que se carga el documento para el manejo de la
                  trazabilidad
                </p>
                <hr />
              </div>
            </div>
            <form onSubmit={forms.footer.handleSubmit(onSubmit3)}>
              <div className="row">
                <div className="col-md-5 col-sm-6">
                  <label htmlFor="creadorAdicional">CREA</label>
                  <input
                    type="text"
                    className="form-control"
                    id="creadorAdicional"
                    placeholder="Ingrese nombre"
                    {...registerFooter("creadorAdicional", { required: true })}
                  />
                </div>
                <div className="col-md-5 col-sm-6">
                  <label htmlFor="destinatarioAdicional">DESTINATARIO</label>
                  <input
                    type="text"
                    className="form-control"
                    id="destinatarioAdicional"
                    placeholder="Ingrese nombre"
                    {...registerFooter("destinatarioAdicional", {
                      required: true,
                    })}
                  />
                </div>
                <div className="col-md-2 col-sm-12">
                  <label htmlFor="fechaAdicional">Fecha</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fechaAdicional"
                    disabled={true}
                    defaultValue={defaultValue}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-5 col-sm-12">
                  <label>Cargar archivo</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        id="selectedFile2"
                        type="file"
                        className="custom-file-input"
                        onChange={(e) => setSelectedFile2(e.target.files[0])}
                      />
                      <label className="custom-file-label">
                        {selectedFile2?.name ?? "Seleccione el archivo"}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12">
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                    id="descripcion"
                    rows={2}
                    className="form-control"
                    {...registerFooter("descripcion", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-12">
                  <button type="submit" className="btn btn-app bg-secondary">
                    <i className="fa fa-plus-square" />
                    Cargar archivo
                  </button>
                </div>
              </div>
            </form>
            <hr />
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <p className="h5 text-center">ARCHIVOS CARGADOS</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <table id="paso1" className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Acciones</th>
                      <th>Descripción</th>
                      <th>Documento</th>
                      <th>Creador</th>
                      <th>Destinatario</th>
                      <th>Fecha de Creación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {archivos &&
                      archivos.map((array, i) => (
                        <tr key={i}>
                          <td>
                            <button className="btn btn-warning btn-sm">
                              <i className="fa fa-paint-brush" />
                            </button>
                            &nbsp;
                            <button className="btn btn-warning btn-sm">
                              <i className="fa fa-trash" />
                            </button>
                            &nbsp;
                            <button
                              className="btn btn-warning btn-sm"
                              onClick={(e) =>
                                descargarArchivoAdicional(
                                  array.originalName,
                                  array.fileName
                                )
                              }
                            >
                              <i className="fa fa-download" />
                            </button>
                          </td>
                          <td>{array.descripcion}</td>
                          <td>{array.originalName}</td>
                          <td>{array.creadorAdicional}</td>
                          <td>{array.destinatarioAdicional}</td>
                          <td>{array.uploadDate}</td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Acciones</th>
                      <th>Descripción</th>
                      <th>Documento</th>
                      <th>Creador</th>
                      <th>Destinatario</th>
                      <th>Fecha de Creación</th>
                    </tr>
                  </tfoot>
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
