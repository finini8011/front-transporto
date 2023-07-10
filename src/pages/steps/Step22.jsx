import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";

const Step22 = () => {
  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "22.5" ? "22da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "22.1" ||  id == "22.2"|| id == "22.3" || id == "22.4") {
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
      if (id === "22.1" || id == "22.2" || id == "22.3" || id == "22.5") {
        await saveStep(obj).unwrap();
      } else if (id == "22.4") {
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
        titleForm={"Documento: Plan de auditoria - Informe de auditorias al PESV"}
        step={"22.1"}
        stage={"3"}
        mainTitle={
          "FASE 3: SEGUIMIENTO - PASO 22. AUDITORÍA ANUAL"
        }
        nameStep={
          "¿La organización realizó al menos una auditoría anual interna para evaluar el cumplimiento y las evidencias de la planificación Implementación, seguimiento y mejora del PESV, de acuerdo con lo establecido en el capítulo 1 del presente anexo? NOTA: La organización puede optar por manejar auditorías integradas y aplicar"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documento: Procedimiento para la realización de las auditorías internas al PESV de la organización"}
        step={"22.2"}
        stage={"3"}
        nameStep={
          "¿La organización documento y aplico un procedimiento para la realización de las auditorías internas al PESV de la organización y contempla lo mencionado en el Paso 22?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documento: Competencia de auditor"}
        step={"22.3"}
        stage={"3"}
        nameStep={
          "La organización definió la competencia de los auditores internos para el PESV siguiendo los requisitos del paso 10 competencia y plan anual de formación."
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documento : Plan de auditoria"}
        step={"22.4"}
        stage={"3"}
        nameStep={
          "El o los auditores internos son personas diferentes al líder del diseño de implementación del PESV y las auditorías fueron planificadas con la participación del Comité de Seguridad Vial"
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
        step={"22.5"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
    </div>
  );
};

export default Step22;
