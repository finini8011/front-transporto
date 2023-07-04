import { useEffect } from "react";
import { useGetDataStepQuery } from "../../../api/services/steps/stepsApiSlice";
import Form from "./Form";
import {
  faDownload,
  faEye,
  faSquarePlus,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EditFormFlex from "./EditFormFlex";


const FormFlex = ({ titleForm, step, nameStep, cols, onSubmit, mainTitle, stage }) => {

  const [inputValues, setInputValues] = useState({});
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const { data, isLoading, isError } = useGetDataStepQuery(step);

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
      end: 7,
    },
    {
      type: "hr",
      start: 1,
      end: 8,
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
      end: 8,
      required: true,
    },
    {
      label: "ESTADO ACTUAL",
      nameApi: "estado",
      type: "span",
      start: 1,
      end: 2,
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


  useEffect(() => {
    if (!isLoading) {
    }
  }, [isLoading])


  console.log(data, "data")

  return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4 w-full">
        {mainTitle && stage ? (<section className="text-[#0090FF] text-2xl font-medium tracking-tight	mb-3 flex">
          <img
            src={`/img/fase${stage}_general.svg`}
            width={25}
            alt="icon"
            className="mr-2"
          />

          <span>
            <FontAwesomeIcon
              size="xs"
              icon={faGreaterThan}
              style={{ color: "#008ffe" }}
            />
          </span>

          <span className="ml-2">
            {mainTitle}
          </span>
        </section>) : ''}

        <div className="rounded-t-2xl flex text-base">
          <div className="bg-[#EEF2F6] p-4 text-[#0090FF] rounded-t-2xl font-medium w-full">
            <FontAwesomeIcon
              size="xs"
              icon={faGreaterThan}
              className="mr-2"
              style={{ color: "#008ffe" }}
            />
            {step} {nameStep}
          </div>
        </div>
        {data && <EditFormFlex id={step} />}
        {data? (
          <Form
            title={titleForm}
            inputs={inputs}
            cols={cols}
            buttons={buttons}
            onSubmit={onSubmit}
            id={step}
            document={true}
          />
        ) : (
          <EditFormFlex id={step} />
        )}
      </section>
    </>
  );
};

export default FormFlex;
