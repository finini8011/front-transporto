import FormFlex from "../../components/commons/Forms/FormFlex";

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
    <>
      <FormFlex
        titleForm={titleForm}
        step={step}
        nameStep={nameStep}
        cols={5}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Step3;
