import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step19 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "19.4" ? "19da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "19.1" || id == "19.2") {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "19.3") {
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
      if (id === "19.2" || id == "19.2" || id == "19.4") {
        await saveStep(obj).unwrap();
      } else if (id == "19.3") {
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
        titleForm={"Documento: Procedimiento para mantener disponible, debidamente controlada y actualizada la documentación del PESV y la retención documental de registros y evidencias."}
        mainTitle={
          "FASE 2: IMPLEMENTACIÓN - PASO 19. Archivo y retención documental"
        }
        stage={"2"}
        step={"19.1"}
        nameStep={
          "¿La organización mantiene disponible debidamente controlada y actualizada la documentación del plan estratégico de seguridad Vial?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documentos: Registros y evidencias que soportan la implementación del PESV."}
        stage={"2"}
        step={"19.2"}
        nameStep={
          "¿La organización realizó la retención documental de registros y evidencias que soportan la implementación del PESV asegurando su identificación ,legibilidad accesibilidad y protección contra daños o perdidas, Los cuáles deben almacenarse en al menos por 5 años salvo norma especial en contrario?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormSelect
        stage={"2"}
        step={"19.3"}
        nameStep={
          "¿La organización realiza el almacenamiento de los registros de las inspecciones preoperacionales por un año?"
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
        step={"19.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step19;
