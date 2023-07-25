import React from "react";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableUsers = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Usuario
            </th>
            <td className="px-6 py-4">user@correo.com</td>
            <td className="px-6 py-4 flex justify-center gap-4">
              <FontAwesomeIcon
                icon={faPencil}
                className="w-5 h-5 cursor-pointer"
              />

              <FontAwesomeIcon
                icon={faTrash}
                className="w-5 h-5 cursor-pointer"
              />
            </td>
          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Usuario
            </th>
            <td className="px-6 py-4">user@correo.com</td>
            <td className="px-6 py-4 flex justify-center gap-4">
              <FontAwesomeIcon
                icon={faPencil}
                className="w-5 h-5 cursor-pointer"
              />

              <FontAwesomeIcon
                icon={faTrash}
                className="w-5 h-5 cursor-pointer"
              />
            </td>
          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Usuario
            </th>
            <td className="px-6 py-4">user@correo.com</td>
            <td className="px-6 py-4 flex justify-center gap-4">
              <FontAwesomeIcon
                icon={faPencil}
                className="w-5 h-5 cursor-pointer"
              />

              <FontAwesomeIcon
                icon={faTrash}
                className="w-5 h-5 cursor-pointer"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
