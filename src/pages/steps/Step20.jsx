import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from "../../api/services/steps/stepsApiSlice";

import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import FormSelect from "../../components/commons/Forms/FormSelect";

const Step20 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "20.4" ? "20da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "20.1.1" || id == "20.1.2" || id == "20.3" || id == "20.4") {
      payload.creador = values.creador;
      payload.destinatario = values.destinatario;
      payload.observaciones = values.observaciones;
      payload.estado = values.cambiarEstado;
    } else if (id == "20.2") {
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
      if (id == "20.1.1" || id == "20.1.2" || id == "20.3" || id == "20.4") {
        await saveStep(obj).unwrap();
      } else if (id == "20.2") {
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
        titleForm={"Documento: Protocolo para el manejo de los indicadores"}
        mainTitle={
          "FASE 3. SEGUIMIENTO  - PASO 20. Archivo y retención documental"
        }
        stage={"3"}
        step={"20.1.1"}
        nameStep={
          "¿La organización realizó el registro la medición y análisis de los indicadores mínimos de gestión del PESV de acuerdo al nivel aplicable según lo establecido en la tabla 10 del capítulo 1 del presente anexo?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documento: Indicadores del PESV Trimestral y acumulado (Línea Base)"}
        stage={"3"}
        step={"20.1.2"}
        nameStep={
          "¿La organización realizó el registro la medición y análisis de los indicadores mínimos de gestión del PESV De acuerdo al nivel aplicable según lo establecido en la tabla 10 del capítulo 1 del presente anexo?"
        }
        cols={7}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormSelect
        step={"20.2"}
        nameStep={
          "¿La organización definió de indicadores adicionales a los mínimos descritos en la tabla 10 del capítulo 1 del presente anexo, cada indicador adicional fue construido de acuerdo a las características mencionadas en el Paso 20?"
        }
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
      <div className="pb-10"></div>
      <FormFlex
        titleForm={"Documento: Reporte de autogestión anual PESV- Realizado por Líder del PESV"}
        stage={"3"}
        step={"20.3"}
        nameStep={
          "¿La organización realizó el reporte de autogestión anual a la entidad verificadora que le corresponda de los resultados de la medición y análisis de los indicadores a los qué hace referencia la tabla 10 del capítulo 1 del presente anexo y la información lista en el Paso 20 con corte a 31 de diciembre de cada año, y teniendo en cuenta que el reporte se debe realizar a más tardar el 31 de enero de cada año?"
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
        step={"20.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default Step20;
