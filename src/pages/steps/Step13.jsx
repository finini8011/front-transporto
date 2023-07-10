import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";

const Step13 = () => {
  const [saveStep, saveStepInfo] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);
  const titleForm =
    "Documento: Procedimiento: para reportar, registrar, investigar, analizar y divulgar los siniestros viales para la investigación interna de siniestros viales";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "13.3" ? "13da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "13.1") {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "13.2") {
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
      if (id === "13.1" || id == "13.3") {
        await saveStep(obj).unwrap();
      } else if (id == "13.2") {
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
        stage={"2"}
        mainTitle={
          "FASE 2: IMPLEMENTACIÓN Y EJECUCIÓN - PASO 13. INVESTIGACIÓN INTERNA DE SINIESTROS"
        }
        titleForm={"Documento: Procedimiento: para reportar, registrar, investigar, analizar y divulgar los siniestros viales para la investigación interna de siniestros viales"}
        step={"13.1"}
        nameStep={
          "¿La organización documentó y aplicó una técnica, metodología o procedimiento para reportar, registrar, investigar, analizar y divulgar los siniestros viales en los que se ven involucrados los colaboradores de la organización en los desplazamientos laborales y en el entorno próximo de la organización, incluye como mínimo los requisitos mencionados en el Paso 13"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        stage={"2"}
        titleForm={"Documento: Lecciones aprendidas"}
        step={"13.2"}
        nameStep={
          "¿La organización divulgó las lecciones aprendidas de los siniestros viales?"
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
        step={"13.3"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
    </div>
  );
};

export default Step13;
