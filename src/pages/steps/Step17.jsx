import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";

const Step17 = () => {
  const [saveStep] = useSaveStepMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "17.4" ? "17da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "17.1" || id =="17.2.1" || id =="17.2.2" || id =="17.3" ) {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else {
      payload.creadorAdicional = values.crea;
      payload.destinatarioAdicional = values.destinatario;
      payload.descripcion = values.observaciones;
    }

    try {
      const obj = {
        numStep: stepUrl,
        payload: payload,
        file: selectedFile,
      };
      if (id == "17.1" || id =="17.2.1" || id =="17.2.2" || id =="17.3" ) {
        await saveStep(obj).unwrap();
      }
      toast.success("Se ha registrado correctamente!");
      setIsSaving(true);
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

  useEffect(() => {
  },[isSaving])

  return (
    <div className="flex flex-col gap-5">
      <Toaster />
      <FormFlex
        titleForm="Documento: Plan de mantenimiento preventivo para vehículos"
        stage={"1"}
        mainTitle={
          "FASE 2: IMPLEMENTACIÓN - PASO 17. Mantenimiento y control de vehículos seguros y equipos"
        }
        step={"17.1"}
        nameStep={
          "La organización diseñó e implementó un plan de mantenimiento preventivo para vehículos automotores y no automotores que se utilizan para los desplazamientos laborales al servicio de la organización, contempla los requisitos mencionados en el Paso 17?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
     <FormFlex
        titleForm="Documento: Inventario de vehículos propios, contratados, terceros y de trabajadores."
        stage={"1"}
        step={"17.2.1"}
        nameStep={
          "¿La organización documentó y mantiene la hoja de vida de cada vehículo automotor y no automotor que se utilizan para los desplazamientos laborales al servicio de la organización, contempla los requisitos mencionados en el Paso 17?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
         <FormFlex
        titleForm="Documento: Hoja de vida por cada vehículo automotor y no automotor Registro del mantenimiento."
        stage={"1"}
        step={"17.2.2"}
        nameStep={
          "¿La organización documentó y mantiene la hoja de vida de cada vehículo automotor y no automotor que se utilizan para los desplazamientos laborales al servicio de la organización, contempla los requisitos mencionados en el Paso 17?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
        <FormFlex
        titleForm="Documento: Registro de mantenimiento de vehículos puesto al servicios de la organización y son de propiedad de colaboradores."
        stage={"1"}
        step={"17.3"}
        nameStep={
          "¿La organización documenta el mantenimiento de vehículos de propiedad de los colaboradores puestos al servicio de la organización para el cumplimiento de sus funciones?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
        <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"17.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step17;
