import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step3 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "3.3" ? "3da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "3.1") {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "3.2") {
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
      if (id === "3.1" || id == "3.3") {
        await saveStep(obj).unwrap();
      } else if (id == "3.2") {
        await saveStepQuestion(obj).unwrap();
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
        titleForm={"Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia"}
        mainTitle={"FASE 1: PLANIFICACIÓN - PASO 3. POLÍTICA DE SEGURIDAD VIAL DE LA ORGANIZACIÓN"}
        stage={"1"}
        step={"3.1"}
        nameStep={
          "¿Se cuenta con Política de Seguridad Vial documentada con alcance sobre los desplazamientos laborales y los trayectos en itinere para todos los colaboradores de la organización?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
      <div className="pb-10"></div>

      <FormSelect
        titleForm={"Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia"}
        step={"3.2"}
        nameStep={
          "¿La Política de Seguridad Vial documentada cumple con los requisitos definidos en el paso 3?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"3.3"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
    </div>
  );
};

export default Step3;
