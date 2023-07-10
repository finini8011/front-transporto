import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step11 = () => {
  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);


  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "11.5" ? "11da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "11.1" || id == "11.3"  || id == "11.4" ) {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "11.2") {
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
      if (id === "11.1" || id == "11.3"  || id == "11.4" || id == "11.5") {
        await saveStep(obj).unwrap();
      } else if (id == "11.2") {
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
        titleForm={"Documento: Funciones y responsabilidades seguridad vial por actor vial - Cargos"}
        stage={"2"}
        mainTitle={"FASE 2: IMPLEMENTACIÓN Y EJECUCIÓN - PASO 11. RESPONSABILIDADES Y COMPORTAMIENTO SEGURO"}
        step={"11.1"}
        nameStep={
          "¿La organización asigno, documentó y comunicó en debida forma las funciones y responsabilidades en materia de seguridad vial de todos los actores viales de la organización, ¿contiene como mínimo lo indicado en el Paso 11?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm={"Documento: Procedimientos en los que se establezcan los requisitos de contratación en seguridad vial de los colaboradores"}
        step={"11.2"}
        nameStep={
          "¿¿La organización realizó la evaluación de la competencia en seguridad vial a colaboradores que realizan desplazamientos laborales, al menos una (1) vez al año, contiene como mínimo lo indicado en el Paso 11?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documento: Procedimiento para la evaluación de la competencia de los conductores"}
        step={"11.3"}
        nameStep={
          "¿La organización cuenta con el procedimiento documentado de evaluación de la competencia de los conductores?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm={"Documento: Procedimiento para la evaluación de la competencia de los conductores"}
        step={"11.4"}
        nameStep={
          "¿La organización definió la metodología para lograr comportamientos interdependientes y promoción de la formación de hábitos y conductas seguros en la vía?"
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
        step={"11.5"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step11;
