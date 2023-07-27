import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step8 = () => {
  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "8.8" ? "8da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "8.1" || id =="8.2" || id =="8.3" || id =="8.4" || id =="8.5" ) {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "8.6" || id =="8.7") {
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
      if (id == "8.1" || id =="8.2" || id =="8.3" || id =="8.4" || id =="8.5") {
        await saveStep(obj).unwrap();
      } else if (id == "8.6" || id =="8.7") {
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
    <div className="flex flex-col gap-5">
      <Toaster />
      <FormFlex
        titleForm="Documento: Procedimiento para controlar la velocidad de los vehículos automotores y procedimiento si hay excesos de velocidad"
        stage={"1"}
        mainTitle={
          "FASE 1: PLANIFICACIÓN - PASO 8. Programas de gestión de riesgos críticos y factores de desempeño"
        }
        step={"8.1"}
        nameStep={
          "¿La organización tiene definidos como mínimo los siguientes programas de gestión de riesgos y factores de desempeño del PESV: Gestión de la Velocidad Segura, Prevención de la Fatiga, Prevención de la Distracción, Cero tolerancia a la conducción bajo los efectos de del alcohol y de sustancias psicoactivas, protección de actores viales vulnerables, y otros programas relacionados con el SGSST, y cumplen con los requisitos definidos en el paso 8? "
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm="Documento: Procedimiento para controlar la jornada de trabajo, horas de conducción y descanso de los conductores y procedimiento si hay excesos de horas de la jornada"
        stage={"1"}
        step={"8.2"}
        nameStep={
          "¿La organización tiene definidos como mínimo los siguientes programas de gestión de riesgos y factores de desempeño del PESV: Gestión de la Velocidad Segura, Prevención de la Fatiga, Prevención de la Distracción, Cero tolerancia a la conducción bajo los efectos de del alcohol y de sustancias psicoactivas, protección de actores viales vulnerables, y otros programas relacionados con el SGSST, y cumplen con los requisitos definidos en el paso 8? "
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm="Documento: Procedimiento para controlar y monitorear la distracción en la conducción y procedimiento si se evidencia distracción"
        stage={"1"}
        step={"8.3"}
        nameStep={
          "¿La organización tiene definidos como mínimo los siguientes programas de gestión de riesgos y factores de desempeño del PESV: Gestión de la Velocidad Segura, Prevención de la Fatiga, Prevención de la Distracción, Cero tolerancia a la conducción bajo los efectos de del alcohol y de sustancias psicoactivas, protección de actores viales vulnerables, y otros programas relacionados con el SGSST, y cumplen con los requisitos definidos en el paso 8? "
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm="Documento: Procedimiento para evitar que se conduzca bajo los efectos del consumo de alcohol y sustancias psicoactivas y procedimiento si hay conducción bajo efectos del alcohol"
        stage={"1"}
        step={"8.4"}
        nameStep={
          "¿La organización tiene definidos como mínimo los siguientes programas de gestión de riesgos y factores de desempeño del PESV: Gestión de la Velocidad Segura, Prevención de la Fatiga, Prevención de la Distracción, Cero tolerancia a la conducción bajo los efectos de del alcohol y de sustancias psicoactivas, protección de actores viales vulnerables, y otros programas relacionados con el SGSST, y cumplen con los requisitos definidos en el paso 8? "
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <FormFlex
        titleForm="Documento: Procedimiento con las directrices de seguridad vial para promover la protección de los actores viales vulnerables (peatones, pasajeros, ciclistas y motociclistas) de la organización en sus desplazamientos laborales y la generación de hábitos seguros y procedimiento en caso de evidenciar incumplimientos de las directrices."
        stage={"1"}
        step={"8.5"}
        nameStep={
          "¿La organización tiene definidos como mínimo los siguientes programas de gestión de riesgos y factores de desempeño del PESV: Gestión de la Velocidad Segura, Prevención de la Fatiga, Prevención de la Distracción, Cero tolerancia a la conducción bajo los efectos de del alcohol y de sustancias psicoactivas, protección de actores viales vulnerables, y otros programas relacionados con el SGSST, y cumplen con los requisitos definidos en el paso 8? "
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
       <FormSelect
        titleForm={""}
        step={"8.6"}
        nameStep={
          "¿Los programas de gestión de riesgos críticos y factores de desempeño del PESV son actualizados como mínimo una (1) vez al año?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
        <FormSelect
        titleForm={""}
        step={"8.7"}
        nameStep={
          "¿Los programas de gestión de riesgos críticos y factores de desempeño del PESV fueron divulgados a todos los colaboradores de la organización, y se les realizo análisis y evaluación de resultados de manera trimestral en el Comité de Seguridad Vial?"
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
        step={"8.8"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step8;
