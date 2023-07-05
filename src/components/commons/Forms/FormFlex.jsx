import { useEffect } from "react";
import { useLazyGetDataStepQuery } from "../../../api/services/steps/stepsApiSlice";
import Form from "./Form";
import FormFlexGeneral from "./FormFlexGeneral";
import {
  faDownload,
  faEye,
  faSquarePlus,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const FormFlex = ({ titleForm, step, nameStep, cols, onSubmit, mainTitle, stage }) => {

  const [inputValues, setInputValues] = useState({});
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [isLoading, setIsLoading] = useState(true);
  const [getDataStep] =
    useLazyGetDataStepQuery(step);



  const [lastPayload, setLastPayload] = useState({});

  const inputs = [
    {
      label: "CREA",
      labelWeight: "medium",
      name: "creador",
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
      name: "fileName",
      nameApi: "fileName",
      type: "file",
      placeholder: "Seleccione archivo",
      start: 1,
      end: 7,
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
      name: "originalName",
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
    },
    {
      label: "ESTADO ACTUAL",
      name: "estado",
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
/*     {
      text: "Ver documento",
      type: "button",
      icon: faEye,
    },
    {
      text: "Descargar documento",
      type: "button",
      icon: faDownload,
    }, */ 
  ];


  useEffect(() => {
    const getData = async () => {
      const { data, isLoading: loading } = await getDataStep(step);
      const payload = data ? JSON.parse(data?.payload) : [];
      const dataGetPayload = payload[payload.length - 1];
      setLastPayload(dataGetPayload);
      setIsLoading(loading);
    };
    getData();
    if (!isLoading) {
      const updatedInputValues = {};
      if (lastPayload) {
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
      }
      setInputValues(updatedInputValues);
    }
  }, [isLoading])



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

        {lastPayload ? (
          <FormFlexGeneral
          title={titleForm}
          inputs={inputs.map((input) => ({
            ...input,
            value: inputValues[input.name],
            onChange: (valor) => {
              console.log(valor, "valor")
              let fileLoad;
              let originalName;
              if (input.name === "fileName") {
                fileLoad = valor.target.files[0];
                originalName = valor.target.files[0].name;
                console.log(originalName, 'name')
                console.log(valor.target.files[0],'target');
                console.log(fileLoad, 'fff')
                setInputValues({
                  ...inputValues,
                  fileName: fileLoad,
                  originalName: originalName
                });
              } else {
                setInputValues({
                  ...inputValues,
                  [input.name]: valor
                });
              }
              console.log(inputValues, "valores")
            }
          }))}
          cols={cols}
          buttons={buttons}
          onSubmit={onSubmit}
          id={step}
        />
        ) : (
          <FormFlexGeneral
            title={titleForm}
            inputs={inputs}
            cols={cols}
            buttons={buttons}
            onSubmit={onSubmit}
            id={step}
            document={true}
          />
        )}
      </section>
    </>
  );
};

export default FormFlex;
