import { useEffect } from "react";
import { useGetDataStepQuery } from "../../../api/services/steps/stepsApiSlice";
import Form from "./Form";
import {
  faDownload,
  faEye,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const FormFlex = ({ titleForm, step, nameStep, cols, onSubmit }) => {
 
  const [inputValues, setInputValues] = useState({});
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const inputs = [
    {
      label: "CREA",
      labelWeight: "medium",
      name: "crea",
      nameApi: "creador",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 4,
      required: true,
    },
    {
      label: "DESTINATARIO",
      labelWeight: "medium",
      name: "destinatario",
      nameApi: "destinatario",
      type: "text",
      placeholder: "Ingrese destinatario",
      start: 4,
      end: 7,
      required: true,
    },
    {
      label: "Fecha",
      labelWeight: "medium",
      name: "fecha",
      nameApi: "uploadDate",
      type: "span",
      start: 7,
      end: 7,
      value: formattedDate,
    },
    {
      label: "CARGAR ARCHIVO",
      labelWeight: "medium",
      name: "cargaArchivo",
      type: "file",
      placeholder: "Seleccione archivo",
      start: 1,
      end: 7,
      onchange: (name, value) =>
        console.log(
          `Función personalizada para campo ${name} - Valor: ${value}`
        ),
      required: true,
    },
    {
      type: "button",
      text: "Descargar Archivo de Guía Acta Asignación Líder del PESV",
      icon: faDownload,
      start: 7,
      end: 8,
    },
    {
      label: "NOMBRE DEL ARCHIVO CARGADO",
      type: "span",
      placeholder: "",
      nameApi: "originalName",
      start: 1,
      end: 6,
    },
    {
      label: "CAMBIAR ESTADO",
      labelWeight: "medium",
      name: "cambiarEstado",
      type: "select",
      placeholder: "",
      start: 1,
      end: 2,
      required: true,
    },
  
    {
      label: "Observaciones sobre el hallazgo o la no aplicación del requisito",
      labelWeight: "medium",
      name: "observaciones",
      nameApi: "observaciones",
      type: "textArea",
      start: 2,
      end: 7,
      required: true,
    },
    {
      label: "ESTADO ACTUAL",
      nameApi: "estado",
      type: "span",
      start: 1,
      end: 2,
    },
    {
      type: "hr",
    },
   
    {
      type: "hr",
    },
  ];
  const buttons = [
    {
      text: "Guardar",
      type: "submit",
      icon: faSquarePlus,
    },
    {
      text: "Ver documento",
      type: "button",
      icon: faEye,
    },
    {
      text: "Descargar documento",
      type: "button",
      icon: faDownload,
    },
  ];

  const { data, isLoading, isError, refetch } = useGetDataStepQuery(step);
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      /*   const payload = JSON.parse(data.payload);
      const lastPayload = payload[payload.length - 1];
      const updatedInputValues = {};
      inputs.forEach((input) => {
        if (lastPayload[input.nameApi]) {
          if (input.nameApi !== "uploadDate") {
            updatedInputValues[input.name] = lastPayload[input.nameApi];
          } else {
            const dateString = lastPayload[input.nameApi];
            const dateParts = dateString.split(" ")[0].split("-");
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            updatedInputValues[input.name] = formattedDate;
          }
        }
      });
      setInputValues(updatedInputValues); */
    }
  }, [data]);

  return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="rounded-t-2xl flex text-base">
          <div className="bg-[#EEF2F6] p-4 text-[#0090FF] rounded-tl-2xl font-medium" > {step} {nameStep}</div>
          <div className="min-w-[110px] bg-[#EEF2F6]/25 flex justify-center rounded-tr-2xl">
            <button className="text-[#FC6363] font-medium">GUARDAR</button>
            </div>
         
        </div>
        {/*   {data ? (
          <Form
            title={titleForm}
            inputs={inputs.map((input) => ({
              ...input,
              value: inputValues[input.name],
            }))}
            cols={cols}
            buttons={buttons}
            onSubmit={onSubmit}
            id={step}
          />
        ) : ( */}
        <Form
          title={titleForm}
          inputs={inputs}
          cols={cols}
          buttons={buttons}
          onSubmit={onSubmit}
          id={step}
          document={true}
        />
        {/*    )} */}
      </section>
    </>
  );
};

export default FormFlex;
