import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step24 = () => {
  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "24.1.3" ? "24da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "24.1.1" || id == "24.1.2") {
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
      if (id === "24.1.1" || id == "24.1.3") {
        await saveStep(obj).unwrap();
      } else if (id == "24.1.2") {
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
        titleForm={"Documento: mecanismos de comunicación y participación en relación con la seguridad vial."}
        stage={"4"}
        mainTitle={
          "FASE 4: MEJORA CONTINUA - PASO 24. MECANISMOS DE COMUNICACIÓN"
        }
        step={"24.1.1"}
        nameStep={
          "¿La organización definió y puso a disposición los mecanismos de comunicación y participación en relación con la seguridad vial, así como la frecuencia de las comunicaciones que, por lo menos debe ser trimestral y contener la promoción de la seguridad vial, de acuerdo con lo definido en el Paso 24?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Evidencias de comunicación y participación en seguridad vial ( boletines, periódicos, videos, campañas, registro fotográfico, concursos). Reporte de condiciones etc."}
        stage={"4"}
        step={"24.1.2"}
        nameStep={
          "¿La organización definió y puso a disposición los mecanismos de comunicación y participación en relación con la seguridad vial, así como la frecuencia de las comunicaciones que, por lo menos debe ser trimestral y contener la promoción de la seguridad vial, de acuerdo con lo definido en el Paso 24?"
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
        step={"24.1.3"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step24;
