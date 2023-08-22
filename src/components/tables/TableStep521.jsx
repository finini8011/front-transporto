import React, { useEffect, useState } from "react";




const TableStep521 = ({data}) => {
  return (
    <div className="mt-10 ">
      <table className="border text-center text-sm shadow-md bg-white mb-16 w-full">
        <thead className="">
          <tr>
            {/* <th className="border p-2">#</th> */}
            <th className="border p-2">Value1</th>
            <th className="border p-2">Value2</th>
            <th className="border p-2">Value3</th>
          </tr>
        </thead>
        <tbody className="font-normal">
          {data.map((data, key) => (
            <tr className="text-start" key={key}>
              <td className="border p-2">{data.valor_1} </td>
              <td className="border p-2">{data.valor_2}</td>
              <td className="border p-2">{data.valor_3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStep521;
