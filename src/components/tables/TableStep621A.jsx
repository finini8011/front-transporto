import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const TableStep621A = ({ data, setValue }) => {
  const { register, watch, setValue: setValor } = useForm();

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
    setValue("table_1", watch());
  }, [watch()]);

  return (
    <div className="mt-10 ">
      <table className="border text-center text-sm shadow-md bg-white mb-16 w-full">
        <thead className="">
          <tr>
            <th className="border p-2">Pregunta</th>
            <th className="border p-2">Si</th>
            <th className="border p-2">No</th>
            <th className="border p-2">Observación</th>
          </tr>
        </thead>
        <tbody className="font-normal">
          {arrData.map((data, key) => (
            <tr className="text-start" key={key}>
              <td className="border p-2">{data.data.texto} </td>
              <td className="border p-2">
                {data.data.data.SI ? data.data.data.SI : "0"}
              </td>
              <td className="border p-2">
                {data.data.data.NO ? data.data.data.NO : "0"}
              </td>
              <td className="border p-2">
                <textarea
                  className="border resize-none p-1 border-black"
                  cols="45"
                  rows="5"
                  {...register(`observaciones_${key + 1}`)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStep621A;
