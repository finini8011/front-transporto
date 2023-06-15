import Form from "./Form";
import {
  faDownload,
  faEye,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
const FormFlex = ({titleForm, step, nameStep, cols, onSubmit}) => {
  const inputs = [
    {
      label: "CREA",
      labelWeight: "bold",
      name: "crea",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
      required: true
    },
    {
      label: "DESTINATARIO",
      labelWeight: "bold",
      name: "destinatario",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 3,
      end: 5,
      required: true

    },
    {
      label: "Fecha",
      labelWeight: "bold",
      name: "fecha",
      type: "date",
      start: 5,
      end: 5,
      required: true

    },
    {
      label: "Observaciones sobre el hallazgo o la no aplicación del requisito",
      labelWeight: "bold",
      name: "observaciones",
      type: "textArea",
      start: 1,
      end: 5,
      required: true

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
      required: true

    },
    {
      label: "Cambiar estado",
      labelWeight: "bold",
      name: "cambiarEstado",
      type: "select",
      placeholder: "",
      start: 4,
      end: 6,
      required: true

    },
    {
      label: "Nombre Archivo cargado",
      type: "span",
      placeholder: "",
      start: 1,
      end: 4,
      value: "documento.pdf",
      required: true

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
    },
  ];
    return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="text-white bg-primary-600 p-3 rounded-t-md text-base">
          {step} {nameStep}
        </div>
        <Form title={titleForm} inputs={inputs} cols={cols}  buttons={buttons} onSubmit={onSubmit} id={step}/>
      </section>
    </>
  );
};

export default FormFlex;
