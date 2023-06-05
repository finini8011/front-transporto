import { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import { useForm } from "react-hook-form";
import { useStateContext } from "../../contexts/ContextProvider";

export default function Step51() {
  const [internalIsLoading, setInternalIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [disableColaboradores, setDisableColaboradores] = useState(false);
  const [disableContratistas, setDisableContratistas] = useState(false);
  const { steps } = useStateContext();

  const onSubmit1 = (payload) => {
    if (selectedFile) {
      payload.file = selectedFile;
      axiosClient
        .post(`/steps/25/process_data`, payload, {
          // StepsController::class, 'processData'
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          console.log(data);
        });
    }
    if (selectedFile2) {
      payload.file = selectedFile2;
      axiosClient
        .post(`/steps/26/process_data`, payload, {
          // StepsController::class, 'processData'
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          console.log(data);
        });
    }

    setTimeout(() => {
      location.href = 'inicio';
    }, 800);
  };
  useEffect(() => {
    if (steps[1]) {
      steps[1].forEach((element) => {
        switch (element.steps_id) {
          case 25:
            setDisableColaboradores(true);
            break;
          case 26:
            setDisableContratistas(true);
            break;
        }
      });
    }
  }, [steps]);

  const CompA = () => {
    return (
      <div>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">PLANIFICACIÓN - Paso #5.1</h1>
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
                    <h3 className="card-title">Diagnóstico</h3>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit1)}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <a
                              href="templates/5.1.1_inventario_colaboradores.csv"
                              className="btn btn-app bg-secondary"
                              style={{ height: 100 }}
                            >
                              <i className="fa fa-book" /> Descargar plantilla
                              <br />
                              Guía Inventarios
                              <br /> Colaboradores
                            </a>
                            <a
                              href="templates/5.1.2_inventario_contratistas.csv"
                              className="btn btn-app bg-secondary"
                              style={{ height: 100 }}
                            >
                              <i className="fa fa-book" /> Descargar plantilla
                              <br />
                              Guía Inventarios
                              <br /> Contratistas
                            </a>
                            <a
                              href="#"
                              className="btn btn-app bg-secondary"
                              style={{ height: 100 }}
                            >
                              <i className="fa fa-book" /> Descargar plantilla
                              <br />
                              Guía Inventarios
                              <br /> Rutas
                            </a>
                            <a
                              href="#"
                              className="btn btn-app bg-secondary"
                              style={{ height: 100 }}
                            >
                              <i className="fa fa-book" /> Descargar plantilla
                              <br />
                              Guía Inventarios
                              <br /> Sedes
                            </a>
                            <a
                              href="#"
                              className="btn btn-app bg-secondary"
                              style={{ height: 100 }}
                            >
                              <i className="fa fa-book" /> Descargar plantilla
                              <br />
                              Guía Inventarios
                              <br /> Vehículos
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Cargar archivo Colaboradores</label>
                            <div className="input-group">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  disabled={disableColaboradores}
                                  className="custom-file-input"
                                  onChange={(e) => {
                                    setSelectedFile(e.target.files[0]);
                                  }}
                                />
                                <label className="custom-file-label">
                                  {selectedFile?.name ??
                                    "Seleccione el archivo"}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Cargar archivo Contratistas</label>
                            <div className="input-group">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  disabled={disableContratistas}
                                  onChange={(e) => {
                                    setSelectedFile2(e.target.files[0]);
                                  }}
                                />
                                <label className="custom-file-label">
                                  {selectedFile2?.name ??
                                    "Seleccione el archivo"}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary btn-sm">
                        Continuar
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
  };
  return (
    <div>
      <div className="loader-container" hidden={internalIsLoading}>
        <div className="spinner"></div>
      </div>
      <CompA />
    </div>
  );
}
