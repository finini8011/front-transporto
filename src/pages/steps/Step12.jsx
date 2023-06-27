import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step12 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();

  const titleForm =
    "Documento: Plan de Preparación y Respuesta Ante Emergencias Viales Simulacros de emergencia vial";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "12.3" ? "12da" : id;
    const selectedFile = values.cargaArchivo;
    const payload = {};
    if (id == "12.1") {
      payload.creador = values.crea;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "12.2") {
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
      if (id === "12.1" || id == "12.3") {
        await saveStep(obj).unwrap();
      } else if (id == "12.2") {
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
      <h1>Planificacion Paso#12</h1>
      <FormFlex
        titleForm={titleForm}
        step={"12.1"}
        nameStep={
          "¿La organización elaboró un plan de preparación y respuesta ante emergencias viales, incluye como mínimo los requisitos mencionados en el Paso 12?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormSelect
        titleForm={""}
        step={"12.2"}
        nameStep={
          "¿El plan de preparación y respuesta ante emergencias viales tiene en cuenta a todos los colaboradores de la organización, los riesgos de las rutas y los diferentes actores viales, ¿la ubicación de los centros de atención médica y los organismos de socorro en rutas frecuentes?"
        }
        cols={4}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"12.3"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Step12;
