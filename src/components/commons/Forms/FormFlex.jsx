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
      labelWeight: "bold",
      name: "crea",
      nameApi: "creador",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
      required: true,
    },
    {
      label: "DESTINATARIO",
      labelWeight: "bold",
      name: "destinatario",
      nameApi: "destinatario",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 3,
      end: 5,
      required: true,
    },
    {
      label: "Fecha",
      labelWeight: "bold",
      name: "fecha",
      nameApi: "uploadDate",
      type: "span",
      start: 5,
      end: 5,
      value: formattedDate,
    },
    {
      label: "Observaciones sobre el hallazgo o la no aplicación del requisito",
      labelWeight: "bold",
      name: "observaciones",
      nameApi: "observaciones",
      type: "textArea",
      start: 1,
      end: 5,
      required: true,
    },
    {
      type: "button",
      text: "Descargar archivo guía acta de asignación lider del PESV",
      icon: faDownload,
    },
    {
      type: "hr",
    },
    {
      label: "Carga archivo",
      labelWeight: "bold",
      name: "cargaArchivo",
      type: "file",
      placeholder: "Seleccione archivo",
      start: 1,
      end: 4,
      onchange: (name, value) =>
        console.log(
          `Función personalizada para campo ${name} - Valor: ${value}`
        ),
      required: true,
    },
    {
      label: "Cambiar estado",
      labelWeight: "bold",
      name: "cambiarEstado",
      type: "select",
      placeholder: "",
      start: 4,
      end: 6,
      required: true,
    },
    {
      label: "Nombre Archivo cargado",
      type: "span",
      placeholder: "",
      nameApi: "originalName",
      start: 1,
      end: 4,
    },
    {
      label: "Estado actual",
      nameApi: "estado",
      type: "span",
      start: 4,
      end: 6,
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
        <div className="text-white bg-primary-600 p-3 rounded-t-md text-base">
          {step} {nameStep}
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
        />
        {/*    )} */}
      </section>
    </>
  );
};

export default FormFlex;
