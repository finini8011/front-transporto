import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import MultiSelectForm from "../../components/commons/Forms/MultiSelectForm";

const Step3 = () => {

  const titleForm =
    "DOCUMENTO: Designación de funciones y responsabilidades del líder del PESV - Competencia del lider PESV. Firmado por nivel directivo-gerencia";

  const step = "1.1";
  const nameStep =
    "¿Se le tiene designada una persona con poder de decisión en los temas relacionados con la gestión de las seguridad vial para que lidere el diseño e implementación del PESV y lo articule con el SG-SST?";
  const handleFormSubmit = (values, id) => {
    console.log(`Valores del formulario: ${id}`, values);
  };
  
  return (
    <div>
      <FormFlex
        titleForm={titleForm}
        step={step}
        nameStep={nameStep}
        cols={5}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <MultiSelectForm
        titleForm={"titulo"}
        step={1.2}
        nameStep={"name"}
        cols={6}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={"titulo2"}
        step={1.3}
        nameStep={"namess"}
        cols={6}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Step3;
