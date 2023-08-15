import { useEffect, useState } from "react";
import FormSelect from "../../../../components/commons/Forms/FormSelect";
import FormDocumentPlus from "../../../../components/commons/Forms/FormDocumentPlus";
import { Toaster, toast } from "react-hot-toast";
import {
  useSaveStepMutation,
  useSaveStepQuestionMutation,
} from '../../../../api/services/steps/stepsApiSlice';


const SubStep523 = () => {

  const [saveStep] = useSaveStepMutation();
  const [saveStepQuestion] = useSaveStepQuestionMutation();
  const [isSaving, setIsSaving] = useState(false);


  const handleFormSubmit = async (values, id) => {
    const stepUrl = id == "5.2.4" ? "5da" : id;
    const selectedFile = values.cargaArchivo || values.fileName;
    const payload = {};
    if (id == "5.2.3") {
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
      if (id === "5.2.4") {
        await saveStep(obj).unwrap();
      } else if (id == "5.2.3") {
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
    <div className="p-5">
      <FormSelect
        titleForm=""
        step={"5.2.3"}
        nameStep={
          "¿En caso de que aplique, el diagnóstico del PESV se actualiza al menos una vez al año?"
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
        step={"5.2.4"}
        nameStep={"DOCUMENTOS ADICIONALES"}
        cols={5}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
        setIsSaving={setIsSaving}
      />
    </div>
  );
};

export default SubStep523;
