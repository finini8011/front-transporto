import React from "react";
import { useSelector } from "react-redux";
import { lvc } from "../../constants/listaVerificacion";
import { selectCurrentUser } from "../../api/features/auth/authSlice";



const ListVerification = () => {

  const user = useSelector(selectCurrentUser);
  console.log("datos", user)


  return (
    <div>
      <div className="text-white bg-blue-500 p-3 rounded-t-md text-base font-semibold">
        LISTA DE VERIFICACION DE CUMPLIMIENTO DE LOS REQUISITOS DEL PLAN
        ESTRATEGICO DE SEGURIDAD VIAL
      </div>
      <div className="shadow-md rounded-md bg-white">
      <div className="px-2">
        <div className="flex">
          <p className="text-center p-3 border-b border-r flex-1">
            METODOLOGIA RESOLUCIÓN N. 40595 DE 2022 DE MINISTERIO DE
            TRANSPORTE
          </p>
          <p className="text-center p-3 border-b flex-1">
            Lista de Chequeo versión 1.0 Fuente: Resolución 40595 de 2022
            Ministerio de Transporte
          </p>
        </div>
        <div className="py-2 grid grid-cols-3 gap-2">
          <p className="flex flex-col mb-2 mr-2"> Empresa <span className="bg-gray-100 p-2">{user.name}</span></p>
          <p className="flex flex-col mb-2 mr-2"> NIT <span className="bg-gray-100 p-2">{user.compania.nit}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Misionalidad <span className="bg-gray-100 p-2">{user.compania.misionalidad}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Objeto Social de la Organización<span className="bg-gray-100 p-2">{user.compania.razon_social}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Representante de la organizacion<span className="bg-gray-100 p-2">{user.compania.representante_legal}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Verificacion realizada por <span className="bg-gray-100 p-2">{user.name}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Funcionarios <span className="bg-gray-100 p-2">{user.name}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Fecha de verificacion <span className="bg-gray-100 p-2">{user.compania.created_at}</span></p>
        </div>
      </div>
        <div className="text-white bg-blue-500 p-3 rounded-t-md text-base font-semibold uppercase">
          Conductores contratados o administrados por la organización
          (independiente del nombre del cargo, aquellos que conducen para
          cumplir sus funciones)
        </div>
        <div className="px-2">
          <div className="py-2 grid grid-cols-3 gap-2">
            <p className="flex flex-col">Cantidad de vehículos propios <span>{user.name}</span></p>
            <p>Cantidad de vehículos arrendados</p>
            <p>Cantidad de vehículos en intermediación o administración</p>
            <p>Cantidad de vehículos de contratistas</p>
            <p>Cantidad de vehículos leasing</p>
            <p>Cantidad de vehículos renting</p>
            <p>Cantidad de vehículos colaboradores</p>
            <p>Total de vehículos de la flota automotor o no automotor</p>
          </div>
        </div>
      </div>
      <div className="shadow-md rounded-md bg-white">
        <div className="text-white bg-blue-500 p-3 rounded-t-md text-base font-semibold uppercase">
          Flota de vehículos automotores (autos, camiones, motos, montacargas,
          maquinaria, etc) o no automotores (bicicleta, patineta, triciclo o
          similares)
        </div>
        <div className="px-2">
          <div className="py-2 grid grid-cols-3 gap-2 items-end">
            <p>Cantidad de trabajadores directos contratados como conductores</p>
            <p>Cantidad de trabajadores (administrativos, directivos o de apoyo), que conducen para desarrollar sus funciones</p>
            <p>Cantidad de contratistas y/o afiliados que conducen para desarrollar sus funciones</p>
            <p>Personal vinculado mediante tercerización, subcontratación, outsourcing o intermediación laboral, que conduce para desarrollar sus funciones</p>
            <p>Otros colaboradores que conducen para desarrollar sus funciones</p>
            <p>Total de conductores contratados o administrados por la organización</p>
          </div>
        </div>
      </div>
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
                  className="bg-blue-500 text-white text-center p-2 font-semibold"
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
                    <p>pruebaaa</p>
                  </td>
                  <td className="border p-2 ">
                    <p>observaciones</p>
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

export default ListVerification;