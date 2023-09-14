import { useEffect, useState } from "react";
import {
  faDownload,
  faSquarePlus,
  faGreaterThan,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormFlexGeneral from "./FormFlexGeneral";


const FormInformes = ({ titleForm, step, nameStep, cols, onSubmit, mainTitle, stage, isSaving, setIsSaving, one, two, four }) => {

  const [inputValues, setInputValues] = useState({});
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [isLoading, setIsLoading] = useState(true);
  const [lastPayload, setLastPayload] = useState({});

  const inputs = [
    {
      label: "USUARIO",
      type: "span",
      placeholder: "",
      name: "usuario",
      nameApi: "users_name",
      start: 1,
      end: 5,
    },
    {
      label: "Fecha",
      labelWeight: "medium",
      name: "fecha",
      nameApi: "uploadDate",
      type: "span",
      start: 5,
      end: 8,
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
      end: 5,
      required: true,
    },
    {
      label: "NOMBRE DEL ARCHIVO CARGADO",
      type: "span",
      placeholder: "",
      name: "originalName",
      nameApi: "originalName",
      start: 5,
      end: 8,
    },
    {
      type: "hr",
      start: 1,
      end: 8,
    },
    one && {
      type: "button",
      text: "1",
      icon: faSave,
      start: 1,
      end: 4,
    },
    two || four ? {
      type: "button",
      text: "3",
      icon: faDownload,
      start: 1,
      end: 3,
    } : null,
    two || four ? {
      type: "button",
      text: "2",
      icon: faDownload,
      start: 3,
      end: 5,
    } : null,
    four &&
    {
      type: "button",
      text: "3",
      icon: faDownload,
      start: 5,
      end: 7,
    },
    four &&
    {
      type: "button",
      text: "4",
      icon: faDownload,
      start: 7,
      end: 9,
    },
    {
      label: "OBSERVACIONES",
      labelWeight: "medium",
      name: "observaciones",
      nameApi: "observaciones",
      type: "textArea",
      start: 1,
      end: 8,
    },
  ];
  const buttons = [
    {
      text: "Guardar",
      type: "submit",
      icon: faSquarePlus,
    },
  ];




  return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4 w-full pt-3">
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
          </div>
        </div>
        {lastPayload ? (
          <FormFlexGeneral
            title={titleForm}
            inputs={inputs.map((input) => ({
              ...input,
              value: inputValues[input?.name],
              onChange: (valor) => {
                setInputValues({
                  ...inputValues,
                  [input.name]: valor
                });
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

export default FormInformes;
