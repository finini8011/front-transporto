import React from "react";
import MainAuth from "../../../components/layout/MainAuth";
import { lvc } from "../../constants";

const ListaVerificacionCumplimiento = () => {
  return (
    <MainAuth>
      <section className="bg-white text-gray-800">
        {/* <ul className="flex bold ">
          <li>#</li>
          <li>Nivel PESV</li>
          <li>Requisito a Verificar</li>
          <li>Documento sugerido para verificar según Res. 40595 de 2022</li>
          <li>Respuesta</li>
          <li>
            Observaciones sobre los hallazgos o la no aplicabilidad del
            requisito
          </li>
        </ul> */}
        <table className="border text-left text-sm shadow-md">
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
                    <td className="border p-2">
                      {content.response && (
                        <select className="border" name="" id="">
                          <option value="">Cumple</option>
                          <option value="">Cumple parcialmente</option>
                          <option value="">No cumple</option>
                          <option value="">No aplica</option>
                        </select>
                      )}
                    </td>
                    <td className="border p-2 ">
                      {content.response && (
                        <textarea
                          className="border resize-none p-1 "
                          cols="45"
                          rows="5"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </MainAuth>
  );
};

export default ListaVerificacionCumplimiento;
