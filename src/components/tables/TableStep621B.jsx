import React, { useEffect } from "react";
import { useForm } from "react-hook-form";


const TableStep621B = ({ data, setValue }) => {
  const { register, watch, setValue: setValor  } = useForm();

  const arrData = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      arrData.push({
        data: data[key],
      });
    }
  }

  useEffect(() => {
    arrData.map((data, key) => {
      data.data.observacion
        ? setValor(`observaciones_${key + 1}`, data.data.observacion)
        : "";
    });
  }, []);

  useEffect(() => {
    setValue("table_2", watch());
  }, [watch()]);

  return (
    <div className="mt-10 ">
      <table className="border text-center text-sm shadow-md bg-white mb-16 w-full">
        <thead className="uppercase">
          <tr>
            <th className="border p-2">Pregunta</th>
            <th className="border p-2">1</th>
            <th className="border p-2">2</th>
            <th className="border p-2">3</th>
            <th className="border p-2">4</th>
            <th className="border p-2">5</th>
            <th className="border p-2">riesgo</th>
            <th className="border p-2">nivel</th>
            <th className="border p-2">Observación</th>
          </tr>
        </thead>
        <tbody className="font-normal">
          {arrData.map((data, key) => (
            <tr className="text-start" key={key}>
              <td className="border p-2 w-96">{data.data.texto} </td>
              <td className="border p-2">
                {data.data.data["1"] ? data.data.data["1"] : 0}
              </td>
              <td className="border p-2">
                {data.data.data["2"] ? data.data.data["2"] : 0}
              </td>
              <td className="border p-2">
                {data.data.data["3"] ? data.data.data["3"] : 0}
              </td>
              <td className="border p-2">
                {data.data.data["4"] ? data.data.data["4"] : 0}
              </td>
              <td className="border p-2">
                {data.data.data["5"] ? data.data.data["5"] : 0}
              </td>
              <td className="border p-2">{data.riesgo}</td>
              <td className="border p-2">{data.nivel}</td>
              <td className="border p-2 w-72">
                <textarea
                  className="border resize-none p-1 border-black"
                  cols="45"
                  rows="5"
                  {...register(`observaciones_${key + 1}`)}
                />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStep621B;
