import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step18 = () => {
  const [saveStep] = useSaveStepMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "18.6" ? "18da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "18.1" || id == "18.2" || id == "18.3" || id == "18.4" || id == "18.5" || id == "18.6") {
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
      if (id == "18.1" || id == "18.2" || id == "18.3" || id == "18.4" || id == "18.5" || id == "18.6") {
        await saveStep(obj).unwrap();
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
    <div className="flex flex-col gap-5">
      <Toaster />
      <FormFlex
        titleForm="Documento: Procedimiento para evaluar los impactos que puedan generan cambios externos e internos en la seguridad vial."
        stage={"2"}
        mainTitle={
          "FASE 2: IMPLEMENTACIÓN - PASO 18.  Gestión del cambio y gestión de contratistas"
        }
        step={"18.1"}
        nameStep={
          "¿La organización dispone de un procedimiento para evaluar los impactos que puedan generar los cambios externos e internos en la seguridad vial?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm="Documento: Análisis de impacto de cambios planeados o no planeados en seguridad vial"
        stage={"2"}
        step={"18.2"}
        nameStep={
          "¿La organización realizó el análisis del impacto de los cambios planeados y no planeados y realizó las gestiones de manera previa para prevenir riesgos y consecuencias en seguridad Vial?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm="Documento: Protocolos o manuales para implementar acciones y medidas PESV y gestión de seguridad vial de los contratistas"
        stage={"2"}
        step={"18.3"}
        nameStep={
          "¿La organización verificó que los contratistas que están obligados a diseñar e implementar el plan estratégico de seguridad vial de conformidad con lo dispuesto en el artículo 12 de la ley 1503 del 2011, modificado por el artículo 110 del decreto ley 2106 del 2019 o las normas que lo modifiquen o sustituyan, cumplan con dicha obligación?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm="Documento:  Las disposiciones que en seguridad vial deben cumplir, los contratistas, subcontratistas y terceros."
        stage={"2"}
        step={"18.4"}
        nameStep={
          "¿La organización estableció las disposiciones que en seguridad vial deben cumplir, los contratistas, subcontratistas y terceros, Incluyendo los conductores y propietarios de vehículos permanentes y ocasionales que no están obligados a diseñar e implementar un plan estratégico seguridad Vial, cumplen con las disposiciones mínimas mencionadas en El Paso 18?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm="Documento: Responsabilidad supervisión de obligaciones de contratistas"
        stage={"2"}
        step={"18.5"}
        nameStep={
          "¿La organización definió los responsables de supervisar el cumplimiento de las obligaciones en seguridad vial establecidas a los contratistas que realizan desplazamientos laborales?"
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
        step={"18.6"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step18;
