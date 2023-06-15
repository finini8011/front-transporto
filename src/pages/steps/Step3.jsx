import FormDocumentPlus from "../../components/commons/Forms/FormDocumentPlus";
import FormFlex from "../../components/commons/Forms/FormFlex";
import MultiSelectForm from "../../components/commons/Forms/MultiselectForm";

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
        titleForm={""}
        step={1.2}
        nameStep={"El líder del diseño e implemetación del PESV es el responsable de diligenciar el reporte de autogestión anual y los resultados de la medición de los indicadores del plan estratégico de seguridad vial"}
        cols={4}
        onSubmit={handleFormSubmit}
      />
      <div className="pb-10"></div>
      <FormDocumentPlus
        titleForm={"Aquí podrá subir documentos adicionales aparte de los considerados obligatorios dentro del PESV. Incluya quien crea el documento y a quien va dirigido, así como una breve descripción. La plataforma incluirá de manera automática la fecha en que se carga el documento para el manejo de la trazabilidad"}
        step={1.3}
        nameStep={"DOCUMETOS ADICIONALES"}
        cols={6}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Step3;
