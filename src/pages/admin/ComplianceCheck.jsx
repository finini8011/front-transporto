import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  useSaveListVerificationMutation,
  useLazyGetListVerificationPdfQuery,
} from "../../api/services/listVerification/listVerificationApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import InputRHF from "../../components/commons/input/text/InputRHF";
import Select from "../../components/commons/input/select/Select";
import { lvc } from "../../constants/listaVerificacion";
import ButtonPrimary from "../../components/commons/button/ButtonPrimary";
import { setReport } from "../../api/features/reportPESV/report";



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
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    resetField,
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
    if (
      watch("cantidad_vehiculos") !== "" &&
      watch("cantidad_conductores") !== ""
    ) {
      watch("cantidad_vehiculos") > watch("cantidad_conductores")
        ? setValorMayor(watch("cantidad_vehiculos"))
        : setValorMayor(watch("cantidad_conductores"));
    } else {
      setValorMayor(0);
    }
    resetOptions();
  }, [
    watch("cantidad_vehiculos"),
    watch("cantidad_conductores"),
    watch("misionalidad"),
  ]);

  useEffect(() => {
    if (
      watch("vehiculos_propios").length > 0 &&
      watch("vehiculos_arrendados").length > 0 &&
      watch("vehiculos_intermediacion").length > 0 &&
      watch("vehiculos_contratistas").length > 0 &&
      watch("vehiculos_leasing").length > 0 &&
      watch("vehiculos_renting").length > 0 &&
      watch("vehiculos_colaboradores").length > 0
    ) {
      const totalVehiculos =
        parseInt(watch("vehiculos_propios")) +
        parseInt(watch("vehiculos_arrendados")) +
        parseInt(watch("vehiculos_intermediacion")) +
        parseInt(watch("vehiculos_contratistas")) +
        parseInt(watch("vehiculos_leasing")) +
        parseInt(watch("vehiculos_renting")) +
        parseInt(watch("vehiculos_colaboradores"));
      setValue("cantidad_vehiculos", totalVehiculos);
    } else {
      setValue("cantidad_vehiculos", "");
    }
  }, [
    watch("vehiculos_propios"),
    watch("vehiculos_arrendados"),
    watch("vehiculos_intermediacion"),
    watch("vehiculos_contratistas"),
    watch("vehiculos_leasing"),
    watch("vehiculos_renting"),
    watch("vehiculos_colaboradores"),
  ]);

  useEffect(() => {
    if (
      watch("conductores_directos").length > 0 &&
      watch("conductores_trabajadores").length > 0 &&
      watch("conductores_contratistas").length > 0 &&
      watch("conductores_tercerizados").length > 0 &&
      watch("otros_conductores").length > 0
    ) {
      const total =
        parseInt(watch("conductores_directos")) +
        parseInt(watch("conductores_trabajadores")) +
        parseInt(watch("conductores_contratistas")) +
        parseInt(watch("conductores_tercerizados")) +
        parseInt(watch("otros_conductores"));
      setValue("cantidad_conductores", total);
    } else {
      setValue("cantidad_conductores", "");
    }
  }, [
    watch("conductores_directos"),
    watch("conductores_trabajadores"),
    watch("conductores_contratistas"),
    watch("conductores_tercerizados"),
    watch("otros_conductores"),
  ]);

  const onSubmit = async (dataForm) => {
    // return console.log(dataForm);
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
      vehiculos_propios,
      vehiculos_arrendados,
      vehiculos_intermediacion,
      vehiculos_contratistas,
      vehiculos_leasing,
      vehiculos_renting,
      vehiculos_colaboradores,
      conductores_directos,
      conductores_trabajadores,
      conductores_contratistas,
      conductores_tercerizados,
      otros_conductores,
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
        vehiculos_propios: parseInt(vehiculos_propios),
        vehiculos_arrendados: parseInt(vehiculos_arrendados),
        vehiculos_intermediacion: parseInt(vehiculos_intermediacion),
        vehiculos_contratistas: parseInt(vehiculos_contratistas),
        vehiculos_leasing: parseInt(vehiculos_leasing),
        vehiculos_renting: parseInt(vehiculos_renting),
        vehiculos_colaboradores: parseInt(vehiculos_colaboradores),
        conductores_directos: parseInt(conductores_directos),
        conductores_trabajadores: parseInt(conductores_trabajadores),
        conductores_contratistas: parseInt(conductores_contratistas),
        conductores_tercerizados: parseInt(conductores_tercerizados),
        otros_conductores: parseInt(otros_conductores),
      }).unwrap();
      toast.success("Se ha registrado correctamente!");
      try {
        await getListVerificationPdf();
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

  const onReport = async (dataForm) => {
    const pasos = []; //informacion donde se ingresaran los pasos
    lvc.map((data) => {
      data.body.map((content) => {
        const numberFormat = content.number.replace(/\./g, "_");
        pasos.push({
          numero: content.number,
          respuesta: dataForm[`respuesta_${numberFormat}`],
          observaciones: dataForm[`observaciones_${numberFormat}`],
        });
      });
    });

    dispatch(
      setReport({
        pasos,
        dataForm: {
          empresa: watch("empresa"),
          nit: watch("NIT"),
          verificacion: watch("verificacion_realizada"),
          fecha: watch("fecha"),
        },
      })
    );
    // navigate("/report", "_blank");
    window.open("/report", "_blank", "noreferrer");
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
        // resetField(`respuesta_${content.number.replace(/\./g, "_")}`)
        setValue(`observaciones_${content.number.replace(/\./g, "_")}`, "");
      });
    });
  };

  return (
    <section className=" text-gray-800 flex flex-col gap-4 relative">
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
            <InputRHF
              type="text"
              label="Empresa"
              placeholder="Empresa"
              {...register("empresa")}
            />
            <InputRHF
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
            <InputRHF
              type="text"
              label="Objeto Social de la Organización"
              placeholder="Objeto Social de la Organización"
              {...register("objeto_social")}
            />
            <InputRHF
              type="text"
              label="Representante de la organización"
              placeholder=" Representante de la organización"
              {...register("representante_legal")}
            />
            <InputRHF
              type="text"
              label="Verificación realizada por"
              placeholder="Verificación realizada por"
              {...register("verificacion_realizada")}
            />
            <InputRHF
              type="text"
              label="Funcionarios"
              placeholder="Funcionarios"
              {...register("funcionarios")}
            />
            <InputRHF
              type="text"
              label="Fecha de Verificación"
              placeholder="Fecha de Verificación"
              readOnly
              {...register("fecha")}
            />
          </div>
        </div>
      </div>
      <div className="shadow-md rounded-md bg-white">
        <div className="text-white bg-red-700 p-3 rounded-t-md text-base font-semibold uppercase">
          Conductores contratados o administrados por la organización
          (independiente del nombre del cargo, aquellos que conducen para
          cumplir sus funciones)
        </div>
        <div className="px-2">
          <div className="py-2 grid grid-cols-3 gap-2">
            <InputRHF
              type="number"
              label="Cantidad de vehículos propios"
              placeholder="Cantidad de vehículos propios"
              {...register("vehiculos_propios")}
            />
            <InputRHF
              type="number"
              label="Cantidad de vehículos arrendados"
              placeholder="Cantidad de vehículos propios"
              {...register("vehiculos_arrendados")}
            />
            <InputRHF
              type="number"
              label="Cantidad de vehículos en intermediación o administración"
              placeholder="Cantidad de vehículos en intermediación o administración"
              {...register("vehiculos_intermediacion")}
            />
            <InputRHF
              type="number"
              label="Cantidad de vehículos de contratistas"
              placeholder="Cantidad de vehículos de contratistas"
              {...register("vehiculos_contratistas")}
            />
            <InputRHF
              type="number"
              label="Cantidad de vehículos leasing"
              placeholder="Cantidad de vehículos leasing"
              {...register("vehiculos_leasing")}
            />
            <InputRHF
              type="number"
              label="Cantidad de vehículos renting"
              placeholder="Cantidad de vehículos renting"
              {...register("vehiculos_renting")}
            />
            <InputRHF
              type="number"
              label="Cantidad de vehículos colaboradores"
              placeholder="Cantidad de vehículos colaboradores"
              {...register("vehiculos_colaboradores")}
            />
            <InputRHF
              type="number"
              label="Total de vehículos de la flota automotor o no automotor"
              placeholder="Total de vehículos de la flota automotor o no automotor"
              readOnly
              {...register("cantidad_vehiculos")}
            />
          </div>
        </div>
      </div>
      <div className="shadow-md rounded-md bg-white">
        <div className="text-white bg-red-700 p-3 rounded-t-md text-base font-semibold uppercase">
          Flota de vehículos automotores (autos, camiones, motos, montacargas,
          maquinaria, etc) o no automotores (bicicleta, patineta, triciclo o
          similares)
        </div>
        <div className="px-2">
          <div className="py-2 grid grid-cols-3 gap-2 items-end">
            <InputRHF
              type="number"
              label="Cantidad de trabajadores directos contratados como conductores"
              placeholder="Cantidad de trabajadores directos contratados como conductores"
              {...register("conductores_directos")}
            />
            <InputRHF
              type="number"
              label="Cantidad de trabajadores (administrativos, directivos o de apoyo), que conducen para desarrollar sus funciones"
              placeholder="Cantidad de trabajadores (administrativos, directivos o de apoyo), que conducen para desarrollar sus funciones"
              {...register("conductores_trabajadores")}
            />
            <InputRHF
              type="number"
              label="Cantidad de contratistas y/o afiliados que conducen para desarrollar sus funciones"
              placeholder="Cantidad de contratistas y/o afiliados que conducen para desarrollar sus funciones"
              {...register("conductores_contratistas")}
            />
            <InputRHF
              type="number"
              label="Personal vinculado mediante tercerización, subcontratación, outsourcing o intermediación laboral, que conduce para desarrollar sus funciones"
              placeholder="Personal vinculado mediante tercerización, subcontratación, outsourcing o intermediación laboral, que conduce para desarrollar sus funciones"
              {...register("conductores_tercerizados")}
            />
            <InputRHF
              type="number"
              label="Otros colaboradores que conducen para desarrollar sus funciones"
              placeholder="Otros colaboradores que conducen para desarrollar sus funciones"
              {...register("otros_conductores")}
            />
            <InputRHF
              type="number"
              label="Total de conductores contratados o administrados por la organización"
              placeholder="Total de conductores contratados o administrados por la organización"
              readOnly
              {...register("cantidad_conductores")}
            />
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
                        }
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
      <div className="fixed bottom-5  right-10  ">
        <div className="flex justify-end gap-2 ">
          <ButtonPrimary text="Reporte" onClick={handleSubmit(onReport)} />
          <ButtonPrimary
            text="Registro"
            onClick={handleSubmit(onSubmit)}
            loading={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default ListaVerificacionCumplimiento;
