import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Inicio() {
  const [inventario, setInventario] = useState();
  const [colorLider, setColorLider] = useState();
  const [colorComite, setColorComite] = useState();
  const [colorPolitica, setColorPolitica] = useState();
  const [colorChequeo, setColorChequeo] = useState();
  const [colorDiagnostico, setColorDiagnostico] = useState();
  
  const [encuestasMovilidad, setEncuestasMovilidad] = useState();
  const { steps } = useStateContext();

  useEffect(() => {
    if (steps[1]) {
      setColorLider("bg-red");
      setColorComite("bg-red");
      setColorPolitica("bg-red");
      setColorChequeo("bg-red");
      let suma = 0;
      steps[1].forEach((element) => {
        if (element.steps_id == 25 || element.steps_id == 26) {
          suma++;
        }
        switch (element.steps_id) {
          case 1:
            setColorLider("bg-green");
            break;
          case 2:
            setColorComite("bg-green");
            break;
          case 3:
            setColorPolitica("bg-green");
            break;
          case 4:
            setColorChequeo("bg-green");
            break;
        }
      });

      setInventario(suma == 2 ? false : true);
      let procentaje = Math.round((steps[1].length * 100) / 32);
      $("#progreso").ionRangeSlider({
        min: 0,
        max: 100,
        from: procentaje,
        type: "single",
        step: 1,
        postfix: "%",
        prettify: false,
        grid: true,
        from_fixed: true,
      });
      let numeroColaboradores = 0,
        numeroEncuestas = 0;
      steps[1].forEach((element) => {
        if (element.steps_id == 25) {
          numeroColaboradores = JSON.parse(element.payload).colaboradores
            .length;
        }
        if (element.steps_id == 30) {
          numeroEncuestas = JSON.parse(element.payload).length;
        }
      });
      setEncuestasMovilidad(
        numeroColaboradores == numeroEncuestas && numeroColaboradores > 0 ? false : true
      );
      setColorDiagnostico(!encuestasMovilidad && !inventario ? "bg-green" : "bg-red")
    }
  }, [steps]);

  if (steps[0]) {
    var colorEmpresa = steps[0] != -1 ? "bg-green" : "bg-red";
  }

  const validarPaso = async (ev) => {
    ev.preventDefault();
    const numero = ev?.target?.attributes[1]?.value;
    const component = ev?.target?.attributes[2]?.value;
    const SIN_EMPRESA = "SE";

    await axiosClient
      .get("/steps/" + numero + "/validate_conditional") // StepsController::class, 'validateConditional
      .then(({ data }) => {
        if (data.result === SIN_EMPRESA) {
          toastr.error("No ha registrado datos de la empresa");
        } else {
          if (data.result) {
            location.href = "/steps/" + component;
          } else {
            toastr.error(
              "Tiene pendiente por hacer el paso " + data.conditional
            );
          }
        }
      });
  };

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-12">
            <div className="col-sm-10">
              <p className="h4">Módulos PESV - Nivel Avanzado</p>
            </div>
            {/* /.col */}
            <div className="col-sm-2">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">Inicio</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row mb-2">
            <div className="col-sm-12">
              <p className="h6 mb-12 text-center">Progreso del PESV</p>
              <input id="progreso" type="text" name="progreso" />
            </div>
          </div>

          {/* Default box */}
          <div className="card card-solid">
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0 lead">
                      <i className="fas fa-lg fa-building" />
                      &nbsp;&nbsp;
                      <b>Registro de la empresa</b>
                    </div>
                    <div className={"card-body pt-0 " + colorEmpresa}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Datos de la empresa.
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        {colorEmpresa == "bg-red" && (
                          <a
                            href="registrarempresa"
                            className="btn btn-sm btn-primary"
                          >
                            <i className="fas fa-user" /> Registrar Empresa
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #1</b>
                    </div>
                    <div className={"card-body pt-0 " + colorLider}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Líder de diseño e implementación PESV
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        {colorLider == "bg-red" && (
                          <a
                            href="#"
                            onClick={(e) => validarPaso(e)}
                            numero="1"
                            component="1"
                            className="btn btn-sm btn-primary"
                          >
                            <i className="fas fa-user" /> Ingresar
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #2</b>
                    </div>
                    <div className={"card-body pt-0 " + colorComite}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Comité de seguridad vial
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        {colorComite == "bg-red" && (
                          <a
                            href="#"
                            onClick={(e) => validarPaso(e)}
                            numero="2"
                            component="2"
                            className="btn btn-sm btn-primary"
                          >
                            <i className="fas fa-user" /> Ingresar
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #3</b>
                    </div>
                    <div className={"card-body pt-0 " + colorPolitica}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Política de Seguridad Vial de la Organización
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        {colorPolitica == "bg-red" && (
                          <a
                            href="#"
                            onClick={(e) => validarPaso(e)}
                            numero="3"
                            component="3"
                            className="btn btn-sm btn-primary"
                          >
                            <i className="fas fa-user" /> Ingresar
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #4</b>
                    </div>
                    <div className={"card-body pt-0 " + colorChequeo}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Liderazgo, compromiso y correspondencia del nivel
                          directivo
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        {colorChequeo == "bg-red" && (
                          <a
                            href="#"
                            onClick={(e) => validarPaso(e)}
                            numero="4"
                            component="4"
                            className="btn btn-sm btn-primary"
                          >
                            <i className="fas fa-user" /> Ingresar
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #5</b>
                    </div>
                    <div className={"card-body pt-0 " + colorDiagnostico}>
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Diagnóstico
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        {inventario && (
                          <a
                            href="#"
                            onClick={(e) => validarPaso(e)}
                            numero="5"
                            component="5"
                            className="btn btn-sm btn-primary"
                          >
                            5.1
                          </a>
                        )}
                        &nbsp;&nbsp;
                        {encuestasMovilidad && (
                          <a
                            href="#"
                            onClick={(e) => validarPaso(e)}
                            numero="5.2"
                            component="6"
                            className="btn btn-sm btn-primary"
                          >
                            5.2
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #6</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Caracterización, evaluación y control de riesgos
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="6.1"
                          component="7"
                          className="btn btn-sm btn-primary"
                        >
                          6.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="6.2"
                          component="8"
                          className="btn btn-sm btn-primary"
                        >
                          6.2
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="6.3"
                          component="9"
                          className="btn btn-sm btn-primary"
                        >
                          6.3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #7</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Objetivos y metas del PESV
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="7.1"
                          component="10"
                          className="btn btn-sm btn-primary"
                        >
                          7.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="7.2"
                          component="11"
                          className="btn btn-sm btn-primary"
                        >
                          7.2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #8</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Programas de gestión de riesgos críticos y factores de
                          desempeño
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="8"
                          component="12"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #9</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Plan anual de trabajo
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="9"
                          component="13"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #10</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Competencia y plan anual de formación
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="10"
                          component="14"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #11</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Responsabilidades y comportamiento seguro
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="11.1"
                          component="15"
                          className="btn btn-sm btn-primary"
                        >
                          11.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="11.2"
                          component="16"
                          className="btn btn-sm btn-primary"
                        >
                          11.2
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="11.3"
                          component="17"
                          className="btn btn-sm btn-primary"
                        >
                          11.3
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="11.4"
                          component="18"
                          className="btn btn-sm btn-primary"
                        >
                          11.4
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #12</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Plan de preparación y respuesta ante emergencias
                          vitales
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="12"
                          component="19"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #13</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Investigación interna de siniestros
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="13"
                          component="20"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #14</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Vías seguras administradas por la organización
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="14"
                          component="21"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #15</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Planificación de desplazamientos laborales
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="15"
                          component="22"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #16</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Inspección de vehículos y equipos
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="16"
                          component="23"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #17</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Mantenimiento y control de vehículos
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="17"
                          component="24"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #18</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Gestión de cambios y gestión de contratistas
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="18.1"
                          component="25"
                          className="btn btn-sm btn-primary"
                        >
                          18.1
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="18.2"
                          component="26"
                          className="btn btn-sm btn-primary"
                        >
                          18.2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #19</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Archivos y retención documental
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="19"
                          component="27"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #20</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Definición de indicadores
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="20"
                          component="28"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #21</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Registro y análisis estadístico de accidentes de
                          tránsito
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="21"
                          component="29"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #22</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Auditoria Anual
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="22"
                          component="30"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #23</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Mejora Continua, acciones preventivas y correctivas
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="23"
                          component="31"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header border-bottom-0">
                      <i className="fa fa-vote-yea" />
                      &nbsp;&nbsp;
                      <b>PASO #24</b>
                    </div>
                    <div className="card-body pt-0 bg-danger">
                      <div className="row">
                        <p className="text-md">
                          <br />
                          Mecanismos de comunicación
                        </p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="text-right">
                        <a
                          href="#"
                          onClick={(e) => validarPaso(e)}
                          numero="24"
                          component="32"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-user" /> Ingresar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer"></div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  );
}
