import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import MainAuth from "../../../components/layout/MainAuth";
import Input from "../../../components/commons/input/text/Input";
import Select from "../../../components/commons/input/select/Select";

import { lvc } from "../../constants";

const arrResponses = ["Cumple", "Cumple Parcialmente", "No cumple"];
const arrMisionalidad = ["Empresa de Transporte", "Empresa no Transportadora"];

const ListaVerificacionCumplimiento = () => {
  const [valorMayor, setValorMayor] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    const date = new Date();
    setValue(
      "fecha",
      new Intl.DateTimeFormat("es", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        // hour: '2-digit',
        // minute: '2-digit',
        // second: '2-digit',
        hour12: false, // setting 24 hour format
      }).format(date)
    ); // less performant
  }, []);

  useEffect(() => {
    if (watch("vehiculos").length > 0 && watch("conductores").length > 0) {
      watch("vehiculos") > watch("conductores")
        ? setValorMayor(watch("vehiculos"))
        : setValorMayor(watch("conductores"));
    }
  }, [watch("vehiculos"), watch("conductores")]);

  return (
    <MainAuth>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="shadow-md rounded-md">
          <div className="text-white bg-red-700 p-3 rounded-t-md text-base font-semibold">
            LISTA DE VERIFICACION DE CUMPLIMIENTO DE LOS REQUISITOS DEL PLAN
            ESTRATEGICO DE SEGURIDAD VIAL
          </div>
          <div className="px-2">
            <div className="flex">
              <p className="text-center p-3 border-b border-r">
                METODOLOGIA RESOLUCIÓN N. 40595 DE 2022 DE MINISTERIO DE
                TRANSPORTE
              </p>
              <p className="text-center p-3 border-b">
                Lista de Chequeo versión 1.0 Fuente: Resolución 40595 de 2022
                Ministerio de Transporte
              </p>
            </div>

            <div className="py-2 grid grid-cols-3 gap-2">
              <Input
                type="text"
                label="Empresa"
                placeholder="Empresa"
                {...register("empresa")}
              />
              <Input
                type="text"
                label="NIT"
                placeholder="NIT"
                {...register("nit")}
              />
              <Select
                type="text"
                label="Misionalidad"
                placeholder="Misionalidad"
                data={arrMisionalidad} //
                {...register("misionalidad")}
              />
              <Input
                type="text"
                label="Objeto Social de la Organización"
                placeholder="Objeto Social de la Organización"
                {...register("oso")}
              />
              <Input
                type="text"
                label="Representante de la organización"
                placeholder=" Representante de la organización"
                {...register("representante")}
              />
              <Input
                type="number"
                label="Cantidad de Vehículos"
                placeholder="Cantidad de Vehículos"
                {...register("vehiculos")}
              />
              <Input
                type="number"
                label="Cantidad de Conductores"
                placeholder="Cantidad de Conductores"
                {...register("conductores")}
              />
              <Input
                type="text"
                label="Fecha de Verificación"
                placeholder="Fecha de Verificación"
                disabled
                {...register("fecha")}
              />
              <Input
                type="text"
                label="Verificación realizada por"
                placeholder="Verificación realizada por"
                {...register("verificacion")}
              />
              <Input
                type="text"
                label="Funcionarios"
                placeholder="Funcionarios"
                {...register("funcionarios")}
              />
            </div>
          </div>
        </div>
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
                    <td className="border p-2 text-center w-36">
                      {content.level === "Todos los niveles" ? (
                        <Select
                          data={arrResponses} //
                          {...register("arr")}
                        />
                      ) : watch("misionalidad") === "Empresa de Transporte" ? (
                        valorMayor >= 2 && valorMayor <= 19 ? (
                          "No aplica"
                        ) : valorMayor >= 20 &&
                          valorMayor <= 50 &&
                          content.level === "Estándar - Avanzado" ? (
                          <Select
                            data={arrResponses} //
                            {...register("arr")}
                          />
                        ) : valorMayor > 50 && content.level === "Avanzado" ? (
                          <Select
                            data={arrResponses} //
                            {...register("arr")}
                          />
                        ) : (
                          "No aplica"
                        )
                      ) : valorMayor >= 2 && valorMayor <= 49 ? (
                        "No aplica"
                      ) : valorMayor >= 50 &&
                        valorMayor <= 100 &&
                        content.level === "Estándar - Avanzado" ? (
                        <Select
                          data={arrResponses} //
                          {...register("arr")}
                        />
                      ) : valorMayor > 1000 && content.level === "Avanzado" ? (
                        <Select
                          data={arrResponses} //
                          {...register("arr")}
                        />
                      ) : (
                        "No aplica"
                      )}
                    </td>
                    <td className="border p-2 ">
                      <textarea
                        className="border resize-none p-1 border-black"
                        cols="45"
                        rows="5"
                      />
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
