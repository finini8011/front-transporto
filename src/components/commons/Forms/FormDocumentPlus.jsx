import { useEffect, useState } from "react";

import Form from "./Form";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import FormUploadedFiles from "../Forms/FormUploadedFiles";
import { dataTable } from "../../../constants/formUploaded";
import { useLazyGetDataStepQuery } from "../../../api/services/steps/stepsApiSlice";

const FormDocumentPlus = ({ titleForm, step, nameStep, cols, onSubmit, isSaving , setIsSaving }) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const mainStep = step.split(".");
  const [isLoading, setIsLoading] = useState(true);
  const [lastPayload, setLastPayload] = useState();
  const [rows, setRows] = useState();
  const [getDataStep] =
    useLazyGetDataStepQuery(`${mainStep[0]}da`);


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
    },
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



  const deleteDocs = (selectedItems) => {
  }

  useEffect(() => {
    let dataGetPayload = [];
    setTimeout(async () => {
      const getData = async () => {
        const { data, isLoading: loading } = await getDataStep(`${mainStep[0]}da`);
        if (!!data) {
          const { payload: payloadData } = data;
          if (!!payloadData) {
            dataGetPayload = JSON.parse(data.payload);
          }
        }
        setIsLoading(loading);
      };
      await getData();
      if (!isLoading) {
        if (!!dataGetPayload) {
          const newRows = dataGetPayload.map((row, index) => {
            return {
              id: index,
              documento: row.originalName,
              descripcion: row.descripcion,
              crea: row.creadorAdicional,
              destinatario: row.destinatarioAdicional,
              fecha: row.uploadDate
            }
          })
          setRows(newRows);
        }
      }
    }, 3000);
    setIsSaving(false);
  }, [isSaving])

  
  useEffect(() => {
    const getData = async () => {
      const { data, isLoading: loading } = await getDataStep(`${mainStep[0]}da`);
      let payload = [];
      let dataGetPayload = {};
      if (!!data) {
        const { payload: payloadData } = data;
        if (!!payloadData) {
          payload = JSON.parse(data.payload);
          dataGetPayload = payload[payload.length - 1];
        }
      }
      setLastPayload(payload);
      setIsLoading(loading);
    };
    getData();
    if (!isLoading) {
      if (!!lastPayload) {
        const newRows = lastPayload?.map((row, index) => {
          return {
            id: index,
            documento: row.originalName,
            descripcion: row.descripcion,
            crea: row.creadorAdicional,
            destinatario: row.destinatarioAdicional,
            fecha: row.uploadDate
          }
        })
        setRows(newRows);
      }
    }
  }, [isLoading])



  return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="rounded-t-2xl flex text-base">
          <div className="bg-[#EEF2F6] p-4 text-[#0090FF] rounded-t-2xl  font-medium w-full">
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
        <FormUploadedFiles title="ARCHIVOS CARGADOS" columns={columns} rows={rows} onDeleteSelected={deleteDocs} />
      </section>
    </>
  );
};

export default FormDocumentPlus;
