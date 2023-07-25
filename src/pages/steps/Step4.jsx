import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step4 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "4.4" ? "4da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "4.1" || id == "4.2" || id == "4.3") {
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
      if (id === "4.1" || id == "4.2" || id === "4.3" || id == "4.4") {
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
    <div>
      <Toaster />
    
      <FormFlex
        titleForm={"Liderazgo, compromiso y corresponsabilidad en materia de seguridad vial, Firmado por nivel directivo - gerencia"}
        mainTitle={"FASE 1: PLANIFICACIÓN - PASO 4. LIDERAZGO, COMPROMISO Y CORRESPONSABILIDAD DEL NIVEL DIRECTIVO"}
        stage={"1"}
        step={"4.1"}
        nameStep={
          "¿El nivel directivo demuestra liderazgo, compromiso y corresponsabilidad, ¿se cumplen con los requisitos definidos en el paso 4?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Obligaciones y responsabilidades de empleador gerencia"}
        stage={"1"}
        step={"4.2"}
        nameStep={
          "¿El nivel directivo demuestra liderazgo, compromiso y corresponsabilidad, ¿se cumplen con los requisitos definidos en el paso 4?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Actas de revisión por la alta dirección del PESV"}
        stage={"1"}
        step={"4.3"}
        nameStep={
          "¿El nivel directivo demuestra liderazgo, compromiso y corresponsabilidad, ¿se cumplen con los requisitos definidos en el paso 4?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"4.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step4;
