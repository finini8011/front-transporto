import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";

const Step15 = () => {
  const [saveStep] = useSaveStepMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "15.1.4" ? "15da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "15.1.1" || id =="15.1.2" || id =="15.1.3" ) {
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
      if (id == "15.1.1" || id =="15.1.2" || id =="15.1.3" ) {
        await saveStep(obj).unwrap();
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
    <div className="flex flex-col gap-5">
      <Toaster />
      <FormFlex
        titleForm="Documento: Procedimiento para la planificación de desplazamientos laborales de los colaboradores de la organización."
        stage={"1"}
        mainTitle={
          "FASE 2: IMPLEMENTACIÓN - PASO 15. Planificación de desplazamientos laborales"
        }
        step={"15.1.1"}
        nameStep={
          "¿Se tiene documentado el procedimiento que utiliza la organización para la planificación de viajes misionales de los colaboradores de la organización, teniendo en cuenta los riesgos en relación con la seguridad vial, ¿contiene como mínimo los requisitos mencionados en el Paso 15?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
     <FormFlex
        titleForm="Documento: Procedimiento planificación del ingreso y salida de los colaboradores de la organización de sus instalaciones."
        stage={"1"}
        step={"15.1.2"}
        nameStep={
          "¿Se tiene documentado el procedimiento que utiliza la organización para la planificación de viajes misionales de los colaboradores de la organización, teniendo en cuenta los riesgos en relación con la seguridad vial, ¿contiene como mínimo los requisitos mencionados en el Paso 15?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
       <FormFlex
        titleForm="Documento: Monitoreo y registro GPS u OBC - Inventario de rutas."
        stage={"1"}
        step={"15.1.3"}
        nameStep={
          "¿Se tiene documentado el procedimiento que utiliza la organización para la planificación de viajes misionales de los colaboradores de la organización, teniendo en cuenta los riesgos en relación con la seguridad vial, ¿contiene como mínimo los requisitos mencionados en el Paso 15?"
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
        step={"15.1.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step15;
