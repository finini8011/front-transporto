import React, { useEffect, useState } from "react";
import { lvc } from "../../constants/listaVerificacion";
import { useGetStatePESVQuery } from "../../api/services/states/statesApiSlice";
import { array } from "prop-types";




const TableCheckList = () => {

  const { data: dataState } = useGetStatePESVQuery();
  let arrayPesv = [];

  
   if(dataState){
    const {1:fase1, 2:fase2, 3:fase3, 4:fase4} = dataState;
    const arrayDateStateFase1 = Object.values(fase1);
    const arrayDateStateFase2 = Object.values(fase2);
    const arrayDateStateFase3 = Object.values(fase3);
    const arrayDateStateFase4 = Object.values(fase4);
    arrayPesv = arrayDateStateFase1.concat(arrayDateStateFase2, arrayDateStateFase3,arrayDateStateFase4)
  }

  return (
    <div className="mt-10">
      <table className="border text-left text-sm shadow-md bg-white mb-16">
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
                  className="bg-fourth text-white text-center p-2 font-semibold"
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
                  <td className="border p-2 text-center w-36">
                  {arrayPesv[index]}
                  </td>
                  <td className="border p-2 ">
                    <p>Observaciones</p>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCheckList;