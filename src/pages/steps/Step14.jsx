import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step14 = () => {
  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const titleForm =
    "Documento: Protocolo de operación y mantenimiento de las vías públicas y/o privadas";

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "14.4" ? "14da" : id;
    const selectedFile = values.cargaArchivo;
    const payload = {};
    if (id == "14.1.1" || id == "14.1.2" || id == "14.2") {
      payload.creador = values.crea;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "14.3") {
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
      if (id === "14.1.1" || id == "14.1.2" || id == "14.2" || id == "14.4") {
        await saveStep(obj).unwrap();
      } else if (id == "14.3") {
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
        titleForm={titleForm}
        step={"14.1.1"}
        stage={"2"}
        mainTitle={
          "FASE 2: IMPLEMENTACIÓN Y EJECUCIÓN - PASO 14. VÍAS SEGURAS ADMINISTRADAS POR LA ORGANIZACIÓN"
        }
        nameStep={
          "La organización documentó un protocolo de operación y mantenimiento de las vías públicas y/o privadas que tenga a cargo, que administre o que controle directamente la organización, incluye como mínimo los requisitos mencionados en El Paso 14?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>

      <FormFlex
        titleForm={"Documento: Identificación de zonas de conflictos y riesgos en las vias-Inspeccion de infraestructura seguridad vial."}
        step={"14.1.2"}
        nameStep={
          "La organización documentó un protocolo de operación y mantenimiento de las vías públicas y/o privadas que tenga a cargo, que administre o que controle directamente la organización, incluye como mínimo los requisitos mencionados en El Paso 14?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>

      <FormFlex
        titleForm={"Documento: Identificación de zonas de conflictos y riesgos en las vias-Inspeccion de infraestructura seguridad vial."}
        step={"14.2"}
        nameStep={
          "¿La organización documentó los siniestros viales que se presentan por parte de terceros o por parte de colaboradores de la organización que utilizan las vías que administra y controla la organización, contiene como mínimo los requisitos mencionados en el Paso 14?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormSelect
        titleForm={""}
        step={"14.3"}
        nameStep={
          "¿Para el caso de las concesiones viales aplican los requisitos mínimos mencionados en el Paso 14?"
        }
        cols={4}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={
          "Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"
        }
        step={"14.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Step14;
