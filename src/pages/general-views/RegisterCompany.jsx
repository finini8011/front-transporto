import Form from "../../components/commons/Forms/Form";
import {
  faDownload,
  faEye,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const RegisterCompany = ({cols, onSubmit}) => {

  const inputs = [
    {
      label: "NIT",
      labelWeight: "bold",
      name: "crea",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "REPRESENTANTE LEGAL",
      labelWeight: "bold",
      name: "destinatario",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 3,
      end: 5,
    },
    {
      label: "Actividad Principal (CIIU)",
      labelWeight: "bold",
      name: "ActividadPrincipal",
      type: "select",
      placeholder: "",
      start: 4,
      end: 6,
    },
    {
      label: "Actividad Secundaria(CIIU)",
      labelWeight: "bold",
      name: "ActividadPrincipal",
      type: "select",
      placeholder: "",
      start: 4,
      end: 6,
    },
    {
      label: "Nombre y/o razon social",
      labelWeight: "bold",
      name: "nombre",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Vehiculos propios",
      labelWeight: "bold",
      name: "vehiculos propios",
      type: "number",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Veh. contratados o administrados",
      labelWeight: "bold",
      name: "vehiculos contratados",
      type: "number",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Vehiculos propios",
      labelWeight: "bold",
      name: "vehiculos propios",
      type: "number",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Conductores propios",
      labelWeight: "bold",
      name: "Conductores propios",
      type: "number",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Conductores contratados",
      labelWeight: "bold",
      name: "Conductores contratados",
      type: "number",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Direccion",
      labelWeight: "bold",
      name: "Direccion",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Telefono #1",
      labelWeight: "bold",
      name: "Telefono #1",
      type: "number",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Telefono #2",
      labelWeight: "bold",
      name: "Telefono #2",
      type: "number",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
    },
    {
      label: "Departamento",
      labelWeight: "bold",
      name: "Departamento",
      type: "select",
      placeholder: "",
      start: 4,
      end: 6,
    },
    {
      label: "Cuidad",
      labelWeight: "bold",
      name: "Cuidad",
      type: "select",
      placeholder: "",
      start: 4,
      end: 6,
    }
  ];
  const buttons = [
    {
      text: "Registrar",
      type: "submit",
      icon: faSquarePlus,
    }
  ];

  const nameStep ="DIGITE LOS DATOS DE LA EMPRESA";
  const step = "empresa";

  return (
    <div>
      <h1>Nueva Empresa</h1>
    <section className="bg-white text-gray-800 flex flex-col gap-4">
    <div className="text-white bg-primary-600 p-3 rounded-t-md text-base">
      {nameStep}
    </div>
    <Form title="complemento" inputs={inputs} cols={cols}  buttons={buttons} onSubmit={onSubmit} id={step}/>
  </section>
  </div>
  );
};

export default RegisterCompany;