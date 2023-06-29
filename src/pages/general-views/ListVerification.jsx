import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { lvc } from "../../constants/listaVerificacion";
import { selectCurrentUser } from "../../api/features/auth/authSlice";
import { useGetStatePESVQuery } from "../../api/services/states/statesApiSlice";
import {
  useGetCIIUQuery,
  useGetDepartmentsQuery,
} from "../../api/services/company/companyApiSlice";




const ListVerification = () => {

  const { compania } = useSelector(selectCurrentUser);
  const { data: dataState } = useGetStatePESVQuery();
  const { data: dataCity } = useGetCIIUQuery();
  const { data: dataDepart } = useGetDepartmentsQuery();
  const [city, setCity] = useState();
  let arrayPesv = [];


  console.log(city)




  if (dataState) {
    const { 1: fase1, 2: fase2, 3: fase3, 4: fase4 } = dataState;
    const arrayDateStateFase1 = Object.values(fase1);
    const arrayDateStateFase2 = Object.values(fase2);
    const arrayDateStateFase3 = Object.values(fase3);
    const arrayDateStateFase4 = Object.values(fase4);
    arrayPesv = arrayDateStateFase1.concat(arrayDateStateFase2, arrayDateStateFase3, arrayDateStateFase4)
  }



  console.log(arrayPesv, "cambio")

  return (
    <div>
      <div className="text-white bg-fourth p-3 rounded-t-md text-base font-semibold">
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
            <p className="flex flex-col mb-2 mr-2"> Razon social <span className="bg-gray-100 p-2">{compania.razon_social}</span></p>
            <p className="flex flex-col mb-2 mr-2"> NIT <span className="bg-gray-100 p-2">{compania.nit}</span></p>
            <p className="flex flex-col mb-2 mr-2"> Representante de la organizacion<span className="bg-gray-100 p-2">{compania.representante_legal}</span></p>
            <p className="flex flex-col mb-2 mr-2"> Actividad principal <span className="bg-gray-100 p-2">{compania.main_activity_ciiu}</span></p>
            <p className="flex flex-col mb-2 mr-2"> Actividad Secundaria <span className="bg-gray-100 p-2">{compania.secondary_activity_ciiu}</span></p>
          </div>
        </div>
        <div className="text-white bg-fourth p-3 rounded-t-md text-base font-semibold uppercase">
          Datos de Contacto
        </div>
        <div className="py-2 grid grid-cols-3 gap-2">
          <p className="flex flex-col mb-2 mr-2"> Dirreccion <span className="bg-gray-100 p-2">{compania.direccion}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Telefono #1<span className="bg-gray-100 p-2">{compania.telefono1}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Telefono #2<span className="bg-gray-100 p-2">{compania.telefono2}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Correo electronico <span className="bg-gray-100 p-2">{compania.email}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Departamento <span className="bg-gray-100 p-2">{compania.departments_id}</span></p>
          <p className="flex flex-col mb-2 mr-2"> Cuidad <span className="bg-gray-100 p-2">{compania.cities_id}</span></p>
        </div>
      </div>
      <div className="shadow-md rounded-md bg-white">
        <div className="text-white bg-fourth p-3 rounded-t-md text-base font-semibold uppercase">
          Misionalidad
        </div>
        <div className="px-2">
          <div className="py-2 grid grid-cols-3 gap-2">
            <p className="flex flex-col mb-2 mr-2"> Misionalidad <span className="bg-gray-100 p-2">{compania.misionalidad}</span></p>
          </div>
        </div>
      </div>
      <div className="shadow-md rounded-md bg-white">
        <div className="text-white bg-fourth p-3 rounded-t-md text-base font-semibold uppercase">
          Vehículos automotores (autos, camiones, montacargas, maquinaria,
          etc) o no automotores (bicicletas, patinetas, triciclos o
          similares)
        </div>
        <div className="px-2">
          <div className="py-2 grid grid-cols-3 gap-2">
            <p className="flex flex-col mb-2 mr-2"> Telefono #1<span className="bg-gray-100 p-2">{compania.telefono1}</span></p>
            <p className="flex flex-col mb-2 mr-2"> Telefono #2<span className="bg-gray-100 p-2">{compania.telefono2}</span></p>
            <p className="flex flex-col mb-2 mr-2"> Correo electronico <span className="bg-gray-100 p-2">{compania.email}</span></p>
            <p className="flex flex-col mb-2 mr-2"> Departamento <span className="bg-gray-100 p-2">{compania.departments}</span></p>
            <p className="flex flex-col mb-2 mr-2"> Cuidad <span className="bg-gray-100 p-2">{compania.cities_id}</span></p>
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