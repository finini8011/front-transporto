import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";

const Step7 = () => {
  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del líder PESV. Firmado por nivel directivo-gerencia";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "7.4" ? "7da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "7.1" ||  id == "7.2"|| id == "7.3.1" || id == "7.3.2" || id == "7.4") {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    }else {
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
      if (id === "7.1" || id == "7.2" || id == "7.3.1" || id == "7.3.2" || id == "7.4") {
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
        titleForm={"Plan de trabajo anual PESV - Objetivos y metas del PESV -Responsables Recursos - Cronograma Indicadores del PESV"}
        step={"7.1"}
        stage={"1"}
        mainTitle={
          "FASE 1: PLANIFICACIÓN DEL PESV - PASO 7. OBJETIVOS Y METAS DEL PESV"
        }
        nameStep={
          "¿Están definidos los objetivos y metas del PESV y están enfocados a la prevención en seguridad vial, son claros, medibles y cuantificables?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Objetivos y metas del PESV"}
        step={"7.2"}
        stage={"1"}
        nameStep={
          "¿Los objetivos y metas del PESV son coherentes con la Política de Seguridad Vial, la evaluación y control de riesgos en seguridad vial, el plan de trabajo anual del PESV y los Programas de gestión de riesgos críticos y factores de desempeño en seguridad vial?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Registro evidencia de comunicación de objetivos metas a trabajadores"}
        step={"7.3.1"}
        stage={"1"}
        nameStep={
          "¿Los objetivos y metas del PESV fueron comunicados a todos los colaboradores de la organización, así como actualizados, revisados y evaluados mínimo una (1) vez al año? (Registro evidencia de comunicación de objetivos metas a trabajadores)"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Evaluación del cumplimiento de objetivos y metas del PESV"}
        step={"7.3.2"}
        stage={"1"}
        nameStep={
          "¿Los objetivos y metas del PESV fueron comunicados a todos los colaboradores de la organización, así como actualizados, revisados y evaluados mínimo una (1) vez al año? (Evaluación del cumplimiento de objetivos y metas del PESV)"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"7.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step7;
