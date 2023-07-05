import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step1 = () => {
  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();

  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia";

  const handleFormSubmit = async (values, id) => {
    console.log(values, 'values submit')

    const stepUrl = id == "1.3" ? "1da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "1.1") {
      payload.creador = values.crea;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "1.2") {
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else {
      payload.creadorAdicional = values.crea;
      payload.destinatarioAdicional = values.destinatario;
      payload.descripcion = values.observaciones;
    }

    try {
      console.log(selectedFile, 'selectedFile')
      const obj = {
        numStep: stepUrl,
        payload: payload,
        file: selectedFile,
      };
      if (id === "1.1" || id == "1.3") {
        await saveStep(obj).unwrap();
      } else if (id == "1.2") {
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
        titleForm={titleForm}
        stage={"1"}
        mainTitle={"FASE 1: PLANIFICACIÓN - PASO 1. LIDER DE DISEÑO E IMPLEMENTACIÓN PESV"}
        step={"1.1"}
        nameStep={
          "¿Se tiene designada una persona con poder decisión en los temas relacionados con la gestión de la seguridad vial para que lidere el diseño e implementación del PESV y lo articule con el SG-SST?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormSelect
        titleForm=""
        step={"1.2"}
        nameStep={
          "El líder del diseño e implementación de PESV es el responsable de diligenciar el reporte de autogestión anual y los resultados de la medición de los indicadores del plan estratégico de seguridad Vial."
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"1.3"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Step1;
