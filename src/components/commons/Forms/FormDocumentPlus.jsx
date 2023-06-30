import Form from "./Form";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import FormUploadedFiles from "../Forms/FormUploadedFiles";
import { dataTable } from "../../../constants/formUploaded";
import { useGetDataStepQuery } from "../../../api/services/steps/stepsApiSlice";

const FormDocumentPlus = ({ titleForm, step, nameStep, cols, onSubmit }) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const mainStep = step.split(".");
  const { data, isLoading, isError, refetch } = useGetDataStepQuery(`${mainStep[0]}da`);
/*   const payload = JSON.parse(data.payload); */
  const columns = [
    { field: 'descripcion', headerName: 'Descripcion', width: 250 },
    { field: 'documento', headerName: 'Documento', width: 230 },
    { field: 'crea', headerName: 'Crea', width: 230 },
    {
      field: 'destinatario',
      headerName: 'Destinatario',
      width: 230,
    },
    {
      field: 'fecha',
      headerName: 'Fecha Creación',
      sortable: true,
      width: 200,
    /*   valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`, */
    },
  ];
 /*  const rows = payload.map((row)=>{
    return{
      id: row.filename,
      descripcion: row.observaciones,
      crea: row.creadorAdicional,
      destinatario: row.destinatarioAdicional,
      fecha: row.uploadDate
    }
  }) */

   const rows = [
    { id: 1, descripcion: "Descripción de archivo", documento: 'doc.pdf', crea: 'Juan Rodriguez', destinatario: "Maria Rojas" , fecha: "12-01-01"},
    { id: 2, descripcion: "DDescripción de archivo", documento: 'doc.pdf', crea: 'Juan Rodriguez', destinatario: "Maria Rojas" , fecha: "12-01-01"},
    { id: 3, descripcion: "DDescripción de archivo", documento: 'doc.pdf', crea: 'Juan Rodriguez', destinatario: "Maria Rojas" , fecha: "12-01-01"},
    { id: 4, descripcion: "dDescripción de archivo", documento: 'doc.pdf', crea: 'Santiago Rodriguez', destinatario: "Mario Rojas" , fecha: "12-01-01"},
    { id: 5, descripcion: "dDescripción de archivo", documento: 'doc.pdf', crea: 'Juan Rodriguez', destinatario: "Camilo Rojas" , fecha: "12-01-01"},
    {id: 6, descripcion: "Dddddescripción de archivo", documento: 'doc.pdf', crea: 'Marcos Rodriguez', destinatario: "Maria Rojas" , fecha: "12-01-01"},
    
  ]; 
  const inputs = [
    {
      label: "CREA",
      labelWeight: "medium",
      name: "crea",
      type: "text",
      placeholder: "Ingrese nombre",
      start: 1,
      end: 3,
      required: true,
    },
    {
      label: "DESTINATARIO",
      labelWeight: "medium",
      name: "destinatario",
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
      type: "span",
      start: 5,
      end: 5,
      value: formattedDate,
    },
    {
      label: "DESCRIPCIÓN",
      labelWeight: "medium",
      name: "observaciones",
      type: "textArea",
      start: 1,
      end: 6,
      required: true,
    },
    {
      type: "hr",
      start: 1,
      end: 6,
    },
    {
      label: "CARGAR ARCHIVO",
      labelWeight: "medium",
      name: "cargaArchivo",
      type: "file",
      placeholder: "Seleccione el archivo",
      start: 1,
      end: 6,
      required: true,
      onchange: (name, value) =>
        console.log(
          `Función personalizada para campo ${name} - Valor: ${value}`
        ),
    },
    {
      type: "hr",
      start: 1,
      end: 6,
    },
  ];
  const buttons = [
    {
      text: "Guardar",
      type: "submit",
      icon: faSquarePlus,
    },
  ];

  const deleteDocs = (selectedItems)=>{
  }

  return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="rounded-t-2xl flex text-base">
          <div className="bg-[#EEF2F6] p-4 text-[#0090FF] rounded-tl-2xl font-medium w-full">
         {nameStep}
          </div>
        </div>
        <Form
          title={titleForm}
          inputs={inputs}
          cols={cols}
          buttons={buttons}
          onSubmit={onSubmit}
          id={step}
        />
        <FormUploadedFiles title="ARCHIVOS CARGADOS" columns={columns} rows={rows} onDeleteSelected={deleteDocs}/>
      </section>
    </>
  );
};

export default FormDocumentPlus;
