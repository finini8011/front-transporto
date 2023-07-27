import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step21 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "21.4" ? "21da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "21.1.1" || id == "21.1.2" || id == "21.3" || id == "21.4") {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "21.2") {
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
      if (id == "21.1.1" || id == "21.1.2" || id == "21.3" || id == "21.4") {
        await saveStep(obj).unwrap();
      } else if (id == "21.2") {
        await saveStepQuestion(obj).unwrap();
      }
      toast.success("Se ha registrado correctamente!");
      setIsSaving(true);
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };
  useEffect(() => {
  }, [isSaving])

  return (
    <div>
      <Toaster />

      <FormFlex
        titleForm={"Documento: línea base de siniestralidad y nivel de perdida"}
        mainTitle={
          "FASE 3. SEGUIMIENTO  - PASO 21. Registro y análsis estadistico de siniestros viales"
        }
        stage={"3"}
        step={"21.1.1"}
        nameStep={
          "¿La organización definió su línea base de la siniestralidad vial, en la cual se determina la posición actual de la organización con relación a la seguridad vial de acuerdo con su nivel de pérdida?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documento: Registro, estadística con nivel de perdida de siniestros viales"}
        stage={"3"}
        step={"21.1.2"}
        nameStep={
          "¿La organización definió su línea base de la siniestralidad vial, en la cual se determina la posición actual de la organización con relación a la seguridad vial de acuerdo con su nivel de pérdida?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormSelect
        step={"21.2"}
        nameStep={
          "La organización lleva registro estadístico, tendencia, proyección a nivel estadístico y análisis de siniestros viales, diferenciando los siniestros viales de acuerdo con la gravedad del evento según el nivel de pérdida y separando los análisis estadísticos de los desplazamientos laborales y de los desplazamientos cotidianos no laborales"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documento: Análisis los resultados de la siniestralidad vial"}
        stage={"3"}
        step={"21.3"}
        nameStep={
          "El comité de seguridad Vial analiza los resultados de la siniestralidad vial de acuerdo con lo definido en el Paso 21"
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
        step={"21.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step21;