import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../api/features/auth/authSlice";
import { useGetStateStepsQuery, useGetStatePESVQuery } from "../../api/services/steps/stepsApiSlice";


const TablePesv = () => {

  const user = useSelector(selectCurrentUser);
  const { data } = useGetStateStepsQuery(user.compania?.nivel);
  const { data: dataState } = useGetStatePESVQuery();


  let resultCumple = 0;
  let parcialmente = 0;
  let resultNoAplica = 0;
  let resultCumple1 = 0;
  let parcialmente1 = 0;
  let resultNoAplica1 = 0;
  let resultCumple2 = 0;
  let parcialmente2 = 0;
  let resultNoAplica2 = 0;
  let resultCumple3 = 0;
  let parcialmente3 = 0;
  let resultNoAplica3 = 0;
  let resultCumple4= 0;
  let parcialmente4 = 0;
  let resultNoAplica4 = 0;
  let arrayPesv = [];
  let arrayDateStateFase1 = [];
  let arrayDateStateFase2 = [];
  let arrayDateStateFase3 = [];
  let arrayDateStateFase4 = [];



  if (dataState) {
    const { 1: fase1, 2: fase2, 3: fase3, 4: fase4 } = dataState;
    arrayDateStateFase1 = Object.values(fase1);
    arrayDateStateFase2 = Object.values(fase2);
    arrayDateStateFase3 = Object.values(fase3);
    arrayDateStateFase4 = Object.values(fase4);
    arrayPesv = arrayDateStateFase1.concat(
      arrayDateStateFase2,
      arrayDateStateFase3,
      arrayDateStateFase4
    );
    if (arrayPesv) {
      arrayPesv.map((registro) => {
        if (registro === "Cumple") {
          resultCumple = resultCumple + 1;
        }
        if (registro === "Cumple parcialmente") {
          parcialmente = parcialmente + 1;
        }
        if (registro === "No aplica") {
          resultNoAplica = resultNoAplica + 1;
        }
      });
    }
    if (arrayDateStateFase1) {
      arrayDateStateFase1.map((registro) => {
        if (registro === "Cumple") {
          resultCumple1 = resultCumple1 + 1;
        }
        if (registro === "Cumple parcialmente") {
          parcialmente1 = parcialmente1 + 1;
        }
        if (registro === "No aplica") {
          resultNoAplica1 = resultNoAplica1 + 1;
        }
      });
    }
    if (arrayDateStateFase2) {
      arrayDateStateFase2.map((registro) => {
        if (registro === "Cumple") {
          resultCumple2 = resultCumple2 + 1;
        }
        if (registro === "Cumple parcialmente") {
          parcialmente2 = parcialmente2 + 1;
        }
        if (registro === "No aplica") {
          resultNoAplica2 = resultNoAplica2 + 1;
        }
      });
    }
    if (arrayDateStateFase3) {
      arrayDateStateFase3.map((registro) => {
        if (registro === "Cumple") {
          resultCumple3 = resultCumple3 + 1;
        }
        if (registro === "Cumple parcialmente") {
          parcialmente3 = parcialmente3 + 1;
        }
        if (registro === "No aplica") {
          resultNoAplica3 = resultNoAplica3 + 1;
        }
      });
    }
    if (arrayDateStateFase4) {
      arrayDateStateFase4.map((registro) => {
        if (registro === "Cumple") {
          resultCumple4 = resultCumple4 + 1;
        }
        if (registro === "Cumple parcialmente") {
          parcialmente4 = parcialmente4 + 1;
        }
        if (registro === "No aplica") {
          resultNoAplica4 = resultNoAplica4 + 1;
        }
      });
    }
  }
 

  let resultParcialmente = parcialmente * 0.25;
  let resultParcialmente1 = parcialmente1 * 0.25;
  let resultParcialmente2 = parcialmente2 * 0.25;
  let resultParcialmente3 = parcialmente3 * 0.25;
  let resultParcialmente4 = parcialmente4 * 0.25;

  let resultPesv = ((resultCumple + resultParcialmente) /
    (arrayPesv.length - resultNoAplica)) * 100;

  let resultFase1 = ((resultCumple1 +resultParcialmente1) /
    (arrayDateStateFase1.length - resultNoAplica1)) * 100;

  let resultFase2 = ((resultCumple2 + resultParcialmente2) /
    (arrayDateStateFase2.length - resultNoAplica2)) * 100;

  let resultFase3 = ((resultCumple3 + resultParcialmente3) /
    (arrayDateStateFase3.length - resultNoAplica3)) * 100;

  let resultFase4 = ((resultCumple4 + resultParcialmente4) /
    (arrayDateStateFase4.length - resultNoAplica4)) * 100;








  return (
      <table className="border text-center shadow-md w-full mb-12 text-xs bg-white ">
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
            <td className="border p-2 bg-red-300">nada</td>
            <td
              className="border p-2 text-xs  uppercase bg-teal-300"
              rowSpan="8"
            >
              {Math.floor(resultFase1) ? Math.floor(resultFase1) : 0} %
            </td>
            <td
              className="border p-2 text-xs font-bold uppercase bg-amber-300"
              rowSpan="24"
            >
              {Math.floor(resultPesv) ? Math.floor(resultPesv) : 0} %
            </td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 2</td>
            <td className="border p-2">Comité de seguridad vial </td>
            <td className="border p-2 bg-red-300">nada</td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 3</td>
            <td className="border p-2">
              Política de Seguridad Vial de la Organización
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 4</td>
            <td className="border p-2">
              Liderazgo, compromiso y corresponsabilidad del nivel directivo
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 5</td>
            <td className="border p-2">Diagnóstico</td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 6</td>
            <td className="border p-2">
              Caracterización, evaluación y control de riesgos
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 7</td>
            <td className="border p-2">Objetivos y metas del PESV</td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 8</td>
            <td className="border p-2">
              Programas de gestión de riesgos criticos y factores de desempeño
            </td>
            <td className="border p-2 bg-red-300"></td>
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
            <td className="border p-2 bg-red-300"></td>
            <td
              className="border p-2 text-xs uppercase bg-green-400"
              rowSpan="11"
            >
              {Math.floor(resultFase2) ? Math.floor(resultFase2) : 0} %
            </td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 10</td>
            <td className="border p-2">
              Competencia y plan anual de formación{" "}
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 11</td>
            <td className="border p-2">
              Responsabilidad y comportamiento seguro
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 12</td>
            <td className="border p-2">
              Plan de preparación y respuesta ante emergencias viales{" "}
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 13</td>
            <td className="border p-2">
              Investigación interna de siniestros viales{" "}
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 14</td>
            <td className="border p-2">
              Vías seguras administradas por la organización{" "}
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 15</td>
            <td className="border p-2">
              Planificación de desplazamientos laborales.
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 16</td>
            <td className="border p-2">Inspección de vehículos y equipos</td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 17</td>
            <td className="border p-2">
              Mantenimiento y control de vehículos seguros y equipos{" "}
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 18</td>
            <td className="border p-2">
              Gestión del cambio y gestión de contratistas{" "}
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr className="">
            <td className="border p-2">paso 19</td>
            <td className="border p-2">Archivo y retención documental</td>
            <td className="border p-2 bg-red-300"></td>
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
            <td className="border p-2 bg-red-300"></td>
            <td
              className="border p-2 text-xs  uppercase bg-lime-300"
              rowSpan="3"
            >
              {Math.floor(resultFase3) ? Math.floor(resultFase3) : 0} %
            </td>
          </tr>
          <tr>
            <td className="border p-2">paso 21</td>
            <td className="border p-2">
              Registro y análisis estadístico de siniestros viales
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
          <tr>
            <td className="border p-2">paso 22</td>
            <td className="border p-2">Auditoría anual </td>
            <td className="border p-2 bg-red-300"></td>
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
            <td className="border p-2 bg-red-300"></td>
            <td
              className="border p-2 text-xs uppercase bg-sky-500"
              rowSpan="2"
            >
              {Math.floor(resultFase4) ? Math.floor(resultFase4) : 0} %
            </td>
          </tr>
          <tr>
            <td className="border p-2">paso 24</td>
            <td className="border p-2">
              Mecanismos de comunicación y participación
            </td>
            <td className="border p-2 bg-red-300"></td>
          </tr>
        </tbody>
      </table>
  );
};

export default TablePesv;