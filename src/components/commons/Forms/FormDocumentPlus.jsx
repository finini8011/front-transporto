import Form from "./Form";
import {
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import FormUploadedFiles from "../Forms/FormUploadedFiles";
import { dataTable } from "../../../constants/formUploaded";

const FormDocumentPlus = ({ titleForm, step, nameStep, cols, onSubmit }) => {

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
      label: "Descripcion",
      labelWeight: "bold",
      name: "observaciones",
      type: "textArea",
      start: 1,
      end: 5,
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
      type: "hr",
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
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="text-white bg-primary-600 p-3 rounded-t-md text-base">
          {step} {nameStep}
        </div>
        <Form title={titleForm} inputs={inputs} cols={cols}  buttons={buttons} onSubmit={onSubmit} id={step}/>
        <FormUploadedFiles title="test" data={dataTable} />
      </section>
    </>
  );
};

export default FormDocumentPlus;


