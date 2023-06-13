import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useSaveListVerificationMutation, useLazyGetListVerificationPdfQuery } from "../../api/services/listVerification/listVerificationApiSlice";
import { useNavigate } from "react-router-dom";

import Input from "../../components/commons/input/text/Input";
import Select from "../../components/commons/input/select/Select";
import { lvc } from "../../constants/listaVerificacion";
import ButtonPrimary from "../../components/commons/button/ButtonPrimary";

const arrResponses = ["Cumple", "Cumple Parcialmente", "No cumple"];
const arrNoAplica = ["No Aplica"];
const arrMisionalidad = ["Empresa de Transporte", "Empresa no Transportadora"];
const showAllOptions = "showAllOptions";
const showOneOption = "showOption";

const ListaVerificacionCumplimiento = () => {
  const [valorMayor, setValorMayor] = useState(0);
  const [saveListVerification, { isLoading, error }] =
    useSaveListVerificationMutation();
    const [getListVerificationPdf, { isLoading: isGetPdfLoading }] =
    useLazyGetListVerificationPdfQuery();
  const navigate = useNavigate();

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

  useEffect(
    () => {
      if (
        watch("cantidad_vehiculos").length > 0 &&
        watch("cantidad_conductores").length > 0
      ) {
        parseInt(watch("cantidad_vehiculos")) >
        parseInt(watch("cantidad_conductores"))
          ? setValorMayor(watch("cantidad_vehiculos"))
          : setValorMayor(watch("cantidad_conductores"));
      } else {
        setValorMayor(0);
      }
      resetOptions();
    },
    [watch("cantidad_vehiculos"), watch("cantidad_conductores")],
    watch("misionalidad")
  );

  const onSubmit = async (dataForm) => {
    const pasos = []; //informacion donde se ingresaran los pasos
    let validateRegister = false; //informacion para verificar si todos los registros han sido completados
    const {
      NIT,
      cantidad_conductores,
      cantidad_vehiculos,
      empresa,
      funcionarios,
      objeto_social,
      representante_legal,
      verificacion_realizada,
      misionalidad,
    } = dataForm;

    if (
      NIT === "" ||
      cantidad_conductores === "" ||
      cantidad_vehiculos === "" ||
      empresa === "" ||
      funcionarios === "" ||
      objeto_social === "" ||
      representante_legal === "" ||
      verificacion_realizada === ""
    )
      return toast.error("Llenar todos los campos del formulario");

    lvc.map((data) => {
      data.body.map((content) => {
        const numberFormat = content.number.replace(/\./g, "_");
        if (dataForm[`respuesta_${numberFormat}`] === "")
          validateRegister = true;
        pasos.push({
          numero: content.number,
          respuesta: dataForm[`respuesta_${numberFormat}`],
          observaciones: dataForm[`observaciones_${numberFormat}`],
        });
      });
    });

    if (validateRegister)
      return toast.error("Todos los campo respuesta deben ser completados");

    try {
      await saveListVerification({
        empresa,
        NIT,
        misionalidad,
        objeto_social,
        representante_legal,
        cantidad_vehiculos: parseInt(cantidad_vehiculos),
        cantidad_conductores: parseInt(cantidad_conductores),
        verificacion_realizada,
        funcionarios,
        pasos,
      }).unwrap();
      toast.success("Se ha registrado correctamente!");
      try {
        await getListVerificationPdf()
      } catch (error) {
        toast.success("Hubo un problema al descargar el PDF");
      }
      // setTimeout(() => {
        navigate("/home");
      // }, 2500);
    } catch (e) {
      // if (e.data.message === "User credentials not found or not authorized")
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

  const conditionResponse = (level, misionalidad, value) => {
    if (level === "Todos los niveles") {
      return showAllOptions;
    } else {
      if (misionalidad === "Empresa de Transporte") {
        if (value >= 2 && value <= 19) return showOneOption;
        else if (value >= 20 && value <= 50 && level === "Estándar - Avanzado")
          return showAllOptions;
        else if (
          value > 50 &&
          (level === "Avanzado" || level === "Estándar - Avanzado")
        )
          return showAllOptions;
        else return showOneOption;
      } else {
        if (value >= 2 && value <= 49) return showOneOption;
        else if (value >= 50 && value <= 100 && level === "Estándar - Avanzado")
          return showAllOptions;
        else if (
          value > 100 &&
          (level === "Avanzado" || level === "Estándar - Avanzado")
        )
          return showAllOptions;
        else return showOneOption;
      }
    }
  };

  const resetOptions = () => {
    lvc.map((data) => {
      data.body.map((content) => {
        setValue(`respuesta_${content.number.replace(/\./g, "_")}`, "");
        setValue(`observaciones_${content.number.replace(/\./g, "_")}`, "");
      });
    });
  };

  return (
    <section className=" text-gray-800 flex flex-col gap-4">
      <Toaster />
      <div className="shadow-md rounded-md bg-white">
        <div className="text-white bg-red-700 p-3 rounded-t-md text-base font-semibold">
          LISTA DE VERIFICACION DE CUMPLIMIENTO DE LOS REQUISITOS DEL PLAN
          ESTRATEGICO DE SEGURIDAD VIAL
        </div>
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
              {...register("NIT")}
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
              {...register("objeto_social")}
            />
            <Input
              type="text"
              label="Representante de la organización"
              placeholder=" Representante de la organización"
              {...register("representante_legal")}
            />
            <Input
              type="number"
              label="Cantidad de Vehículos"
              placeholder="Cantidad de Vehículos"
              {...register("cantidad_vehiculos")}
            />
            <Input
              type="number"
              label="Cantidad de Conductores"
              placeholder="Cantidad de Conductores"
              {...register("cantidad_conductores")}
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
              {...register("verificacion_realizada")}
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
      <table className="border text-left text-sm shadow-md bg-white">
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
                    {
                      <Select
                        data={
                          conditionResponse(
                            content.level,
                            watch("misionalidad"),
                            valorMayor
                          ) === showAllOptions
                            ? arrResponses
                            : arrNoAplica
                        } //
                        selection
                        {...register(
                          `respuesta_${content.number.replace(/\./g, "_")}`
                        )}
                      />
                    }
                  </td>
                  <td className="border p-2 ">
                    <textarea
                      className="border resize-none p-1 border-black"
                      cols="45"
                      rows="5"
                      hidden={
                        conditionResponse(
                          content.level,
                          watch("misionalidad"),
                          valorMayor
                        ) === showAllOptions
                          ? false
                          : true
                      }
                      {...register(
                        `observaciones_${content.number.replace(/\./g, "_")}`
                      )}
                    />
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end ">
        <ButtonPrimary
          text="Registro"
          onClick={handleSubmit(onSubmit)}
          loading={isLoading}
        />
      </div>
    </section>
  );
};

export default ListaVerificacionCumplimiento;
