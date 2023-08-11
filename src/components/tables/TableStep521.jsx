import React, { useEffect, useState } from "react";

const data = [
  { value1: "test1", value2: "test2", value3: "test3" },
  { value1: "test4", value2: "test5", value3: "test6" },
  { value1: "test7", value2: "test8", value3: "test9" },
];


const TableStep521 = () => {
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
              <td className="border p-2">{data.value1} </td>
              <td className="border p-2">{data.value2}</td>
              <td className="border p-2">{data.value3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStep521;
