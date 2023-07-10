import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step2 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "2.4" ? "2da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "2.1" || id =="2.3") {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "2.2") {
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
      if (id === "2.1" || id == "2.3" || id == "2.4") {
        await saveStep(obj).unwrap();
      } else if (id == "2.2") {
        await saveStepQuestion(obj).unwrap();
      }
      toast.success("Se ha registrado correctamente!");
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

  return (
    <div>
      <Toaster />
      <FormFlex
        stage={"1"}
        mainTitle={"FASE 1: PLANIFICACIÓN - PASO 2. COMITÉ DE SEGURIDAD VIAL"}
        titleForm={"Documento: Designación miembros del Comité PESV funciones, responsabilidades, competencia y formación requeridos Firmado nivel directivo - gerencia"}
        step={"2.1"}
        nameStep={
          "¿El nivel directivo designo los miembros del Comité de Seguridad Vial (CSV), este comité está conformado por al menos tres (3)personas con poder de decisión (incluyendo al líder del PESV y se recomienda número impar de participantes)?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormSelect
        titleForm={""}
        step={"2.2"}
        nameStep={
          "¿En caso de que el Comité de Seguridad Vial (CSV) está integrado con el COPASST, cumple los requisitos definidos en la normatividad vigente en materia de Seguridad y Salud en el Trabajo?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"¿El Comité de Seguridad Vial (CSV) cumple con las responsabilidades y funciones del paso 2?"}
        step={"2.3"}
        nameStep={
          "Documento: Acta de reunión CVS - Plan de trabajo - Seguimiento trimestral del PESV - Indicadores"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"2.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Step2;
