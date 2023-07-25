import React from "react";

const TableUsers = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              DNI
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Nivel de Empresa
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
            <td className="px-6 py-4">99999999</td>
            <td className="px-6 py-4">user@correo.com</td>
            <td className="px-6 py-4">Básico</td>
            <td className="px-6 py-4 flex items-center gap-4">
              <a
                href="#"
                className="font-medium text-blue-600  hover:underline"
              >
                Modificar
              </a>
              <a
                href="#"
                className="font-medium text-blue-600  hover:underline"
              >
                Eliminar
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Usuario
            </th>
            <td className="px-6 py-4">99999999</td>
            <td className="px-6 py-4">user@correo.com</td>
            <td className="px-6 py-4">Básico</td>
            <td className="px-6 py-4 flex items-center gap-4">
              <a
                href="#"
                className="font-medium text-blue-600  hover:underline"
              >
                Modificar
              </a>
              <a
                href="#"
                className="font-medium text-blue-600  hover:underline"
              >
                Eliminar
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Usuario
            </th>
            <td className="px-6 py-4">99999999</td>
            <td className="px-6 py-4">user@correo.com</td>
            <td className="px-6 py-4">Básico</td>
            <td className="px-6 py-4 flex items-center gap-4">
              <a
                href="#"
                className="font-medium text-blue-600  hover:underline"
              >
                Modificar
              </a>
              <a
                href="#"
                className="font-medium text-blue-600  hover:underline"
              >
                Eliminar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
