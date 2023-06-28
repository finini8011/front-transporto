import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";

const Step23 = () => {
  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();

  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "23.1.3" ? "3da" : id;
    const selectedFile = values.cargaArchivo;
    const payload = {};
    if (id == "23.1.1") {
      payload.creador = values.crea;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "23.1.2") {
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
      if (id === "23.1.1" || id == "23.1.3") {
        await saveStep(obj).unwrap();
      } else if (id == "23.1.2") {
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
        stage={"4"}
        mainTitle={
          "FASE 4: MEJORA CONTINUA - PASO 23. MEJORA CONTINUA, ACCIONES PREVENTIVAS Y CORRECTIVAS"
        }
        titleForm={titleForm}
        step={"23.1.1"}
        nameStep={
          "¿Se le tiene designada una persona con poder de decisión en los temas relacionados con la gestión de las seguridad vial para que lidere el diseño e implementación del PESV y lo articule con el SG-SST?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={titleForm}
        step={"23.1.2"}
        nameStep={
          "¿Se le tiene designada una persona con poder de decisión en los temas relacionados con la gestión de las seguridad vial para que lidere el diseño e implementación del PESV y lo articule con el SG-SST?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"23.1.3"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Step23;
