import { faDownload, faEye, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Form from "../Form/Form";
const FormFlex = () => {
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
      label: "Observaciones sobre el hallazgo o la no aplicación del requisito",
      labelWeight: "bold",
      name: "observaciones",
      type: "button",
    },
    {
      type: "hr"
    },
    {
        label: "Carga archivo",
        labelWeight: "bold",
        name: "cargaArchivo",
        type: "file",
        placeholder: "Seleccione archivo",
        start: 1,
        end: 4,
        onchange: (name, value) => console.log(`Función personalizada para campo ${name} - Valor: ${value}`),

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
        labelWeight: "bold",
        name: "archivoCargado",
        type: "text",
        placeholder: "",
        start: 1,
        end: 4,
        disabled:true
      },
      {
        label: "Estado actual",
        labelWeight: "bold",
        name: "estadoActual",
        type: "text",
        placeholder: "",
        start: 4,
        end: 6,
        disabled:true
      }, 
      {
        type: "hr",
      },   
  ];

  const handleDescargarDocumentoClick= ()=>{
  }
  const buttons = [
    {
        text: "Guardar",
        type: "submit",
        icon: faSquarePlus
    },
    {
        text: "Ver documento",
        type: "button",
        icon: faEye
    },
    {
        text: "Descargar documento",
        type: "button", 
        icon: faDownload,
        onClick: handleDescargarDocumentoClick

    }
  ];

  
  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia";

  const step = '1.1';
  const nameStep = '¿Se le tiene designada una persona con poder de decisión en los temas relacionados con la gestión de las seguridad vial para que lidere el diseño e implementación del PESV y lo articule con el SG-SST?';
    return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="text-white bg-primary-600 p-3 rounded-t-md text-base">
          {step} {nameStep}
        </div>
        <Form title={titleForm} inputs={inputs} cols={5}  buttons={buttons}/>
      </section>
    </>
  );
};

export default FormFlex;
