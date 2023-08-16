import React, { useEffect, useState } from "react";

const data = [
  {
    value1: "HA TENIDO ACCIDENTES O INCIDENTES VIALES EN LOS ULTIMOS 2 AÑOS",
    value2: "1",
    value3: "2",
    value4: "6% ha tenido antecedentes de accidentalidad",
  },
  {
    value1: "CONOCE LA POLÍTICA Y OBJETIVOS",
    value2: "1",
    value3: "2",
    value4: "",
  },
  {
    value1:
      "CONOCE LAS LECCIONES APRENDIDAS DE ACCIDENTES OCURRIDOS A OTROS COMPAÑEROS EN LA EMPRESA",
    value2: "1",
    value3: "2",
    value4: "6% no conoce las lecciones aprendidas en materia de accidentalidad vial",
  },
  {
    value1:
      "CONOCE CÓMO ACTUAR ANTE CUALQUIER EMERGENCIA QUE SE PRESENTE DURANTE LA PRESTACIÓN DEL SERVICIO.",
    value2: "1",
    value3: "2",
    value4: "",
  },
];

const TableStep621A = () => {
  return (
    <div className="mt-10 ">
      <table className="border text-center text-sm shadow-md bg-white mb-16 w-full">
        <thead className="">
          <tr>
            {/* <th className="border p-2">#</th> */}
            <th className="border p-2">Pregunta</th>
            <th className="border p-2">Si</th>
            <th className="border p-2">No</th>
            <th className="border p-2">Observación</th>
          </tr>
        </thead>
        <tbody className="font-normal">
          {data.map((data, key) => (
            <tr className="text-start" key={key}>
              <td className="border p-2">{data.value1} </td>
              <td className="border p-2">{data.value2}</td>
              <td className="border p-2">{data.value3}</td>
              <td className="border p-2">{data.value4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStep621A;
