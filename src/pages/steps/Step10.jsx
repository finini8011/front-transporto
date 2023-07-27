import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step10 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const titleForm =
    "Documento: Plan de Preparación y Respuesta Ante Emergencias Viales Simulacros de emergencia vial";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "10.4" ? "10da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "10.1"  || id == "10.3"  || id == "10.4") {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "10.2") {
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
      if (id === "10.1" || id == "10.3"  || id == "10.4") {
        await saveStep(obj).unwrap();
      } else if (id == "10.2") {
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
        stage={"2"}
        mainTitle={
          "FASE 2: IMPLEMENTACIÓN Y EJECUCIÓN - PASO 10. COMPETENCIA Y PLAN ANUAL DE FORMACION"
        }
        titleForm={"Competencias en seguridad vial"}
        step={"10.1"}
        nameStep={
          "¿La organización definió y documentó la competencia en seguridad vial de los colaboradores de la organización y los siguientes cargos y roles:1. Líder del diseño e implementación del PESV (ver paso 2),2. Miembros del Comité de Seguridad Vial (ver paso 2), 3. Capacitadores en seguridad vial, 4. Planificadores de rutas o personas que realizan la función de coordinar desplazamientos laborales,5. Coordinadores y técnicos de mantenimiento de vehículos, 6. Auditores de seguridad vial, 7. Brigadista Vial Investigadores de siniestros viales, 8. Colaboradores que conducen un vehículo para sus desplazamientos laborales, cumple con lo indicado en el Paso 10 (según corresponda)?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormSelect
        titleForm={""}
        step={"10.2"}
        nameStep={
          "¿La organización definió los lineamientos generales de sensibilización y capacitación para promover en la comunidad de la organización la formación de hábitos, comportamientos y conductas seguras en la vía?"
        }
        cols={4}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        stage={"2"}
        titleForm={"Plan anual de formación en seguridad vial"}
        step={"10.3"}
        nameStep={
          "¿El plan anual de formación incluye los temas de seguridad vial por cada actor vial independientemente del cargo o rol que desempeña, está enfocado en los riesgos identificados en el paso 6 y cumple con los requisitos definidos en el paso 10?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"10.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step10;
