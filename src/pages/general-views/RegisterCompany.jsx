import Form from "../../components/commons/Forms/Form";
import {
  faDownload,
  faEye,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const RegisterCompany = ({cols, onSubmit}) => {

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
      type: "hr",
    }
  ];
  const buttons = [
    {
      text: "Guardar",
      type: "submit",
      icon: faSquarePlus,
    }
  ];

  const nameStep ="titulo";
  const step = "empresa";

  return (
    <section className="bg-white text-gray-800 flex flex-col gap-4">
    <div className="text-white bg-primary-600 p-3 rounded-t-md text-base">
      {step} {nameStep}
    </div>
    <Form title="complemento" inputs={inputs} cols={cols}  buttons={buttons} onSubmit={onSubmit} id={step}/>
  </section>
  );
};

export default RegisterCompany;