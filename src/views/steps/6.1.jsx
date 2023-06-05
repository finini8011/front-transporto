import React, { useEffect, useState, useRef } from "react";
import axiosClient from "../../axios-client";
import { useForm } from "react-hook-form";
import { useStateContext } from "../../contexts/ContextProvider";
import { DownloadTableExcel } from "react-export-table-to-excel";
/* import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsExporting(Highcharts); */

const Step61 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [cantidadPorEmpresaState, setCantidadPorEmpresaState] = useState([]);
  const [promedioEdadesState, setPromedioEdadesState] = useState([]);
  const [empresaFinalState, setEmpresaFinalState] = useState([]);

  const { steps } = useStateContext();
  let siete = 0,
    sieteNo = 0,
    ocho = 0,
    ochoNo = 0,
    nueve = 0,
    nueveNo = 0,
    diez = 0,
    diezNo = 0;
    console.log(steps)

  const onSubmit = (payload) => {
    
    if (selectedFile) {
      const form = new FormData();
      //form.append("my_field", "my value");
      form.append("my_file", selectedFile);

      axiosClient
        .post(`/steps/31/load_file`, form, {
          // StepsController::class, 'loadFile'
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          console.log(data);
          //location.href = "inicio";
        });
    }
  };
  if (steps[1]) {
    let temp = steps[1].filter((steps) => steps?.steps_id == 30);
    /* let temporal = steps[1].filter((steps) => steps?.steps_id == 31);
    let temporal2 = JSON.parse(temporal[0].payload); 
    console.log(temporal2) */
    let temp2 = JSON.parse(temp[0].payload);

    temp2.map((row) => {
      row.accidentes == "SI" ? siete++ : sieteNo++;
      row.politica == "SI" ? ocho++ : ochoNo++;
      row.lecciones == "SI" ? nueve++ : nueveNo++;
      row.actuar == "SI" ? diez++ : diezNo++;
    });
  }
  useEffect(() => {
    if (steps[1]) {
      let temp25 = steps[1].filter((steps) => steps?.steps_id == 25);
      let datos = JSON.parse(temp25[0].payload).colaboradores;

      let empresas = [];
      for (let index = 0; index < datos.length; index++) {
        empresas.push(datos[index][9]);
      }

      empresas.sort();
      var empresaAct;
      var empresafinal = [];
      for (let i = 0; i < empresas.length; i++) {
        if (empresaAct !== empresas[i]) {
          empresaAct = empresas[i];
          empresafinal.push(empresaAct);
        }
      }
      //console.log(empresafinal)

      let promedioEdades = [],
        cantidadPorEmpresa = [];
      let edadesPorEmpresa = datos.map((currentValue, index) => {
        return [currentValue[9], currentValue[7]];
      });
      empresafinal.forEach((element1) => {
        let edadPromedio = 0,
          cantidad = 0;
        edadesPorEmpresa.forEach((element2) => {
          if (element1 == element2[0]) {
            edadPromedio += Number(element2[1]);
            cantidad++;
          }
        });
        edadPromedio = Math.round(edadPromedio / cantidad);
        promedioEdades.push(edadPromedio);
        cantidadPorEmpresa.push(cantidad);
      });
      setEmpresaFinalState(empresafinal);
      setPromedioEdadesState(promedioEdades);
      setCantidadPorEmpresaState(cantidadPorEmpresa);
    }
  }, [steps]);

  let total = [];
  total.push({ name: "Nombres de Empresas", data: cantidadPorEmpresaState });

  const getOptions = (type) => ({
    chart: {
      type,
      width: 500,
      height: 300,
    },
    title: {
      text: "Distribución personal encuestado por Contrato",
    },
    xAxis: [
      {
        categories: empresaFinalState,
      },
    ],
    yAxis: {
      title: {
        text: "Valores",
      },
    },
    tooltip: {
      formatter: function () {
        return "<b>Cantidad de Colaboradores: " + this.point.y + "</b>";
      },
    },
    series: total,
    credits: {
      enabled: false,
    },
  });

  let total2 = [];
  total2.push({ name: "Nombres de Empresas", data: promedioEdadesState });
  const getOptions2 = (type) => ({
    chart: {
      type,
      width: 500,
      height: 300,
    },
    title: {
      text: "Edad promedio por Contrato",
    },
    xAxis: [
      {
        categories: empresaFinalState,
      },
    ],
    yAxis: {
      title: {
        text: "Años",
      },
    },
    tooltip: {
      formatter: function () {
        return "<b>Edad promedio: " + this.point.y + "</b>";
      },
    },
    series: total2,
    credits: {
      enabled: false,
    },
  });

  const tableRef = useRef(null);

  const descargaArchivo = () => {
    let archivo = 'Guia Acta Asignacion Lider del PESV.docx';
    axiosClient.get(`/download_file/${archivo}`, {
      responseType: 'blob',
    })
    .then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href= url
      link.setAttribute('download',archivo)
      document.body.appendChild(link)
      link.click();
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
  }

  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">PLANIFICACIÓN - Paso #6.1</h1>
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
              <a
                href="/public/templates/6.1_informe_diagnostico_encuestas_movilidad.docx"
                className="btn btn-app bg-secondary"
                style={{ height: 100 }}
              >
                <i className="fa fa-book" /> Descargar plantilla
                <br />
                Guía Informe Diagnóstico
                <br /> Encuesta de Movilidad
              </a>
              <a
                href="/public/templates/Tablas_de_datos.xlsx"
                className="btn btn-app bg-secondary"
                style={{ height: 100 }}
              >
                <i className="fa fa-book" /> Descargar Tabla
                <br />
                Antecedentes en materia
                <br /> de Seguridad Vial
              </a>
              <DownloadTableExcel
                filename="Antecedentes en seguridad vial"
                sheet="Antecedentes"
                currentTableRef={tableRef.current}
              >
                <button
                  className="btn btn-app bg-secondary"
                  style={{ height: 100 }}
                >
                  {" "}
                  Exportar Excel Tabla 1{" "}
                </button>
              </DownloadTableExcel>
            </div>
            <br />
            <br />
            <div className="col-md-12">
              <div className="card">
                <div className="card-header"></div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <table className="table" ref={tableRef}>
                    <thead>
                      <tr>
                        <th style={{ width: 400 }}>PREGUNTA</th>
                        <th style={{ width: 30 }}>SI</th>
                        <th style={{ width: 40 }}>NO</th>
                        <th>OBSERVACIÓN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          7. HA TENIDO ACCIDENTES O INCIDENTES VIALES EN LOS
                          ULTIMOS 2 AÑOS
                        </td>
                        <td className="bg-danger">{siete}</td>
                        <td>{sieteNo}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          8. CONOCE LA POLÍTICA Y OBJETIVOS DE SEGURIDAD VIAL DE
                          LA EMPRESA
                        </td>
                        <td>{ocho}</td>
                        <td className="bg-danger">{ochoNo}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          9. CONOCE LAS LECCIONES APRENDIDAS DE ACCIDENTES
                          OCURRIDOS A OTROS COMPAÑEROS EN LA EMPRESA
                        </td>
                        <td>{nueve}</td>
                        <td className="bg-danger">{nueveNo}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          10. CONOCE CÓMO ACTUAR ANTE CUALQUIER EMERGENCIA QUE
                          SE PRESENTE DURANTE LA PRESTACIÓN DEL SERVICIO
                        </td>
                        <td>{diez}</td>
                        <td className="bg-danger">{diezNo}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Cargar archivo Informe Diagnóstico</label>
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
                <br />
                <button
                  title="Cargar archivo"
                  className="btn btn-info"
                >
                  Cargar archivo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step61;
