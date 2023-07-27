import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";

const Step16 = () => {
  const [saveStep] = useSaveStepMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "16.3" ? "16da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "16.1" || id =="16.2"  ) {
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
      if (id == "16.1" || id =="16.2"  ) {
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
        titleForm="Documento: Procedimientos y mecanismo para el registro de la inspección preoperacional diaria de vehículos automotores y no automotores"
        stage={"1"}
        mainTitle={
          "FASE 2: IMPLEMENTACIÓN - PASO 16. Inspección de vehículos y equipos"
        }
        step={"16.1"}
        nameStep={
          "¿La organización definió un procedimiento y un formato de registro para la inspección preoperacional diaria de vehículos automotores y no automotores que se utilizan para desplazamientos laborales de la organización teniendo en cuenta el nivel de riesgo vial de la operación?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
     <FormFlex
        titleForm="Documento: Lista de chequeo de vehículos -inspección preoperacional"
        stage={"1"}
        step={"16.2"}
        nameStep={
          "¿La inspección preoperacional diaria contiene al menos la disponibilidad de los elementos a inspeccionar , el buen funcionamiento del vehículo , su estado y los niveles aceptables para el funcionamiento y la seguridad del vehículo y de sus ocupantes y demás requisitos mencionados en el Paso 16?"
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
        step={"16.3"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step16;
