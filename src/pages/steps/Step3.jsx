import { useState } from "react";
import FormFlex from "../../components/commons/Forms/FormFlex";
import {
  faDownload,
  faEye,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const Step3 = () => {

  const inputs = [
    {
      label: "CREA",
      labelWeight: "bold",
      name: "crea",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "DESTINATARIO",
      labelWeight: "bold",
      name: "destinatario",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 3,
      end: 5,
    },
    {
      label: "Fecha",
      labelWeight: "bold",
      name: "fecha",
      type: "text",
      start: 5,
      end: 5,
    },
    {
      label: "Observaciones sobre el hallazgo o la no aplicación del requisito",
      labelWeight: "bold",
      name: "observaciones",
      type: "textArea",
      start: 1,
      end: 5,
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
    },
    {
      label: "Cambiar estado",
      labelWeight: "bold",
      name: "cambiarEstado",
      type: "select",
      placeholder: "",
      start: 4,
      end: 6,
    },
    {
      label: "Nombre Archivo cargado",
      type: "span",
      placeholder: "",
      start: 1,
      end: 4,
      value: "documento.pdf",
    },
    {
      label: "Estado actual",
      type: "span",
      start: 4,
      end: 6,
      value: "SI",
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
      onClick: (name) => console.log("hola "),
    },
  ];

  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia";

  const step = "1.1";
  const nameStep =
    "¿Se le tiene designada una persona con poder de decisión en los temas relacionados con la gestión de las seguridad vial para que lidere el diseño e implementación del PESV y lo articule con el SG-SST?";
  const handleFormSubmit = (values) => {
    console.log("Valores del formulario:", values);
  };

  return (
/*     <FormFlex
      inputs={inputs}
      buttons={buttons}
      titleForm={titleForm}
      step={step}
      nameStep={nameStep}
      cols={5}
      onSubmit={handleFormSubmit}
    /> */
    <div>
      sirve      
    </div>
  );
};

export default Step3;
