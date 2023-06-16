import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectCurrentReport } from "../api/features/reportPESV/report";
import InputRHF from "./../components/commons/input/text/InputRHF";
import ButtonPrimary from "../components/commons/button/ButtonPrimary";
import { lvc } from "../constants/listaVerificacion";
import  GraficLine from "../../grafic/GraficLine";
import GraficColumns from "../../grafic/GraficColumns";

const Report = () => {
  const { pasos, dataForm } = useSelector(selectCurrentReport);
  const [stateGraficColumn, setStateGraficColumn] = useState(null);
  const [stateGraficLine, setStateGraficLine] = useState(null);
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const functionPrint = () => {
    print();
  };

  const stepPercent = (numberInit, numberEnd) => {
    const filterData = pasos.slice(numberInit, numberEnd);
    const countCumple = filterData.reduce((accumulator, element) => {
      if (element.respuesta === "Cumple") {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
    const countCumplePart = filterData.reduce((accumulator, element) => {
      if (element.respuesta === "Cumple Parcialmente") {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);

    const total =
      ((countCumple + countCumplePart * 0.25) / (numberEnd - numberInit)) * 100;
    return total.toFixed(0) < 0 ? 0 + "%" : total.toFixed(0) + "%";
  };

  const phasePercent = (numberInit, numberEnd) => {
    const filterData = pasos.slice(numberInit, numberEnd);
    const countCumple = filterData.reduce((accumulator, element) => {
      if (element.respuesta === "Cumple") {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
    const countCumplePart = filterData.reduce((accumulator, element) => {
      if (element.respuesta === "Cumple Parcialmente") {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
    const countNotApply = filterData.reduce((accumulator, element) => {
      if (element.respuesta === "No Aplica") {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
    const total =
      ((countCumple + countCumplePart * 0.25) /
        (numberEnd - numberInit - countNotApply)) *
      100;
    return total.toFixed(0) < 0 ? 0 + "%" : total.toFixed(0) + "%";
  };

  const getResponse = (data) => {
    const dataFilter = pasos.filter((content) => content.numero === data);
    return dataFilter[0].respuesta;
  };

  const getObservation = (data) => {
    const dataFilter = pasos.filter((content) => content.numero === data);
    return dataFilter[0].observaciones;
  };

  useEffect(() => {
    setValue("empresa", dataForm.empresa);
    setValue("NIT", dataForm.nit);
    setValue("fecha", dataForm.fecha);
    setValue("verificacion_realizada", dataForm.verificacion);
  }, []);

  useEffect(() => {
    const arrGrafidColumn = [];
    arrGrafidColumn.push(parseInt(stepPercent(0, 2).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(2, 5).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(5, 7).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(7, 10).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(10, 18).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(18, 20).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(20, 24).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(24, 31).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(31, 32).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(32, 35).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(35, 39).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(39, 41).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(41, 43).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(43, 47).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(47, 50).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(50, 52).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(52, 56).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(56, 61).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(61, 64).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(64, 68).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(68, 72).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(72, 76).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(76, 78).replace(/%/g, "")));
    arrGrafidColumn.push(parseInt(stepPercent(78, 80).replace(/%/g, "")));
    setStateGraficColumn(arrGrafidColumn);
  }, []);

  useEffect(() => {
    const arrGrafidLine = [];
    arrGrafidLine.push(parseInt(phasePercent(0, 31).replace(/%/g, "")));
    arrGrafidLine.push(parseInt(phasePercent(31, 64).replace(/%/g, "")));
    arrGrafidLine.push(parseInt(phasePercent(64, 76).replace(/%/g, "")));
    arrGrafidLine.push(parseInt(phasePercent(76, 80).replace(/%/g, "")));
    setStateGraficLine(arrGrafidLine);
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center relative">
      <div className="fixed top-5 right-5 print-none">
        <ButtonPrimary text="Imprimir" onClick={() => functionPrint()} />
      </div>

      <div className="w-[65rem] flex flex-col gap-4 py-5">
        <div className=" rounded-md bg-white">
          <div className=" bg-red-300 p-3 rounded-t-md text-xs font-semibold uppercase text-center">
            LISTA DE VERIFICACION DE CUMPLIMIENTO DE LOS REQUISITOS DEL PLAN
            ESTRATEGICO DE SEGURIDAD VIAL
          </div>
          <div className="px-2">
            <div className="py-2 grid grid-cols-2 gap-2 items-end">
              <InputRHF
                type="text"
                label="Empresa"
                readOnly
                {...register("empresa")}
              />
              <InputRHF type="text" label="NIT" readOnly {...register("NIT")} />
              <InputRHF
                type="text"
                label="Verificación realidada por"
                readOnly
                {...register("verificacion_realizada")}
              />
              <InputRHF
                type="text"
                label="Fecha"
                readOnly
                {...register("fecha")}
              />
            </div>
          </div>
        </div>
        <table className="border text-left text-xs bg-white">
          <thead className="">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Nivel PESV</th>
              <th className="border p-2">Requisito a Verificar</th>
              <th className="border p-2">
                Documento sugerido para verificar según Res. 40595 de 2022
              </th>
              <th className="border p-2">Respuesta</th>
              <th className="border p-2">
                Observaciones sobre los hallazgos o la no aplicabilidad del
                requisito
              </th>
            </tr>
          </thead>
          <tbody className="font-normal">
            {lvc.map((data, key) => (
              <React.Fragment key={key}>
                <tr>
                  <td
                    className="bg-red-500 text-white text-center p-2 font-semibold"
                    colSpan="6"
                  >
                    {data.title}
                  </td>
                </tr>
                {data.body.map((content, index) => (
                  <tr className="text-start" key={index}>
                    <td className="border p-2">{content.number} </td>
                    <td className="border p-2">{content.level}</td>
                    <td className="border p-2">{content.requirement}</td>
                    <td className="border p-2">{content.document}</td>
                    <td className="border p-2 text-center w-28">
                      {getResponse(content.number)}
                    </td>
                    <td className="border p-2 ">
                      {getObservation(content.number)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="font-bold text-xs text-center">
          RESUMEN RESULTADOS EVALUACIÓN CUMPLIMIENTO DEL PLAN ESTRATEGICO DE
          SEGURIDAD VIAL NIVEL AVANZADO - RES. 40595 DE 2022
        </div>
        <table className="border text-center text-xs bg-white ">
          <thead className="uppercase text-xs bg-blue-400">
            <tr>
              <th className="border p-2">fase pesv</th>
              <th className="border p-2 w-28">pasos</th>
              <th className="border p-2 w-80">
                DESCRIPCIÓN DEL PASO DE IMPLEMENTACIÓN DEL PESV
              </th>
              <th className="border p-2">% PASO</th>
              <th className="border p-2">% FASE</th>
              <th className="border p-2 w-40">% pesv</th>
            </tr>
          </thead>
          <tbody className="font-normal text-center capitalize text-xs">
            <tr className="">
              <td
                className="border p-2 text-xs font-bold uppercase bg-teal-300"
                rowSpan="8"
              >
                FASE 1. PLANIFICACIÓN DEL PESV
              </td>
              <td className="border p-2 ">paso 1</td>
              <td className="border p-2">
                Líder del diseño e implementación del PESV
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(0, 2)}</td>
              <td
                className="border p-2 text-xs  uppercase bg-teal-300"
                rowSpan="8"
              >
                {phasePercent(0, 31)}
              </td>
              <td
                className="border p-2 text-xs font-bold uppercase bg-amber-300"
                rowSpan="24"
              >
                {phasePercent(0, 80)}
              </td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 2</td>
              <td className="border p-2">Comité de seguridad vial </td>
              <td className="border p-2 bg-red-300">{stepPercent(2, 5)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 3</td>
              <td className="border p-2">
                Política de Seguridad Vial de la Organización
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(5, 7)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 4</td>
              <td className="border p-2">
                Liderazgo, compromiso y corresponsabilidad del nivel directivo
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(7, 10)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 5</td>
              <td className="border p-2">Diagnóstico</td>
              <td className="border p-2 bg-red-300">{stepPercent(10, 18)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 6</td>
              <td className="border p-2">
                Caracterización, evaluación y control de riesgos
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(18, 20)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 7</td>
              <td className="border p-2">Objetivos y metas del PESV</td>
              <td className="border p-2 bg-red-300">{stepPercent(20, 24)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 8</td>
              <td className="border p-2">
                Programas de gestión de riesgos criticos y factores de desempeño
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(24, 31)}</td>
            </tr>
            <tr className="">
              <td
                className="border p-2 text-xs font-bold uppercase bg-green-400"
                rowSpan="11"
              >
                FASE 2. IMPLEMENTACIÓN Y EJECUCION DEL PESV
              </td>
              <td className="border p-2">paso 9</td>
              <td className="border p-2">Plan anual de trabajo</td>
              <td className="border p-2 bg-red-300">{stepPercent(31, 32)}</td>
              <td
                className="border p-2 text-xs uppercase bg-green-400"
                rowSpan="11"
              >
                {phasePercent(31, 64)}
              </td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 10</td>
              <td className="border p-2">
                Competencia y plan anual de formación{" "}
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(32, 35)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 11</td>
              <td className="border p-2">
                Responsabilidad y comportamiento seguro
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(35, 39)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 12</td>
              <td className="border p-2">
                Plan de preparación y respuesta ante emergencias viales{" "}
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(39, 41)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 13</td>
              <td className="border p-2">
                Investigación interna de siniestros viales{" "}
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(41, 43)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 14</td>
              <td className="border p-2">
                Vías seguras administradas por la organización{" "}
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(43, 47)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 15</td>
              <td className="border p-2">
                Planificación de desplazamientos laborales.
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(47, 50)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 16</td>
              <td className="border p-2">Inspección de vehículos y equipos</td>
              <td className="border p-2 bg-red-300">{stepPercent(50, 52)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 17</td>
              <td className="border p-2">
                Mantenimiento y control de vehículos seguros y equipos{" "}
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(52, 56)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 18</td>
              <td className="border p-2">
                Gestión del cambio y gestión de contratistas{" "}
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(56, 61)}</td>
            </tr>
            <tr className="">
              <td className="border p-2">paso 19</td>
              <td className="border p-2">Archivo y retención documental</td>
              <td className="border p-2 bg-red-300">{stepPercent(61, 64)}</td>
            </tr>
            <tr className="">
              <td
                className="border p-2 text-xs font-bold uppercase bg-lime-300"
                rowSpan="3"
              >
                FASE 3. SEGUIMIENTO ORGANIZACIÓN
              </td>
              <td className="border p-2">paso 20</td>
              <td className="border p-2">
                Indicadores y reporte de autogestión PESV
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(64, 68)}</td>
              <td
                className="border p-2 text-xs  uppercase bg-lime-300"
                rowSpan="3"
              >
                {phasePercent(64, 76)}
              </td>
            </tr>
            <tr>
              <td className="border p-2">paso 21</td>
              <td className="border p-2">
                Registro y análisis estadístico de siniestros viales
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(68, 72)}</td>
            </tr>
            <tr>
              <td className="border p-2">paso 22</td>
              <td className="border p-2">Auditoría anual </td>
              <td className="border p-2 bg-red-300">{stepPercent(72, 76)}</td>
            </tr>
            <tr className="">
              <td
                className="border p-2 text-xs font-bold uppercase bg-sky-500"
                rowSpan="2"
              >
                FASE 4. MEJORA CONTINUA DEL PESV
              </td>
              <td className="border p-2">paso 23</td>
              <td className="border p-2">
                Mejora continua, acciones preventivas y correctivas{" "}
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(76, 78)}</td>
              <td
                className="border p-2 text-xs uppercase bg-sky-500"
                rowSpan="2"
              >
                {phasePercent(76, 80)}
              </td>
            </tr>
            <tr>
              <td className="border p-2">paso 24</td>
              <td className="border p-2">
                Mecanismos de comunicación y participación
              </td>
              <td className="border p-2 bg-red-300">{stepPercent(78, 80)}</td>
            </tr>
          </tbody>
        </table>

        <div className=" flex items-center justify-center">
          <GraficColumns data={stateGraficColumn} />
        </div>
        <div className=" flex items-center justify-center">
          <GraficLine data={stateGraficLine} />
        </div>
      </div>
    </div>
  );
};

export default Report;
