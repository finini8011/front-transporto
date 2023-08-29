import React, { useState } from "react";
import SubStep511 from "../steps/substeps/subSteps5/SubStep511";
import CardSubSteps from "../../components/commons/Cards/CardSubSteps";
import FormInformes from "../../components/commons/Forms/FormInformes";

const Informes = () => {

  const [isSaving, setIsSaving] = useState(false);

  const handleFormSubmit = async (values, id) => {
    console.log("tarea")
  };

  const subSteps = [
    {
      step: '1',
      title: 'Informe de identificación de riesgos',
      component:
        <FormInformes
          one
          step={"1"}
          cols={5}
          onSubmit={handleFormSubmit}
          isSaving={isSaving}
          setIsSaving={setIsSaving}
        />, // reemplazar por el componente que corresponda
    },
    {
      step: '2',
      title: 'Análisis de la accidentalidad',
      component:
        <FormInformes
          two
          step={"2"}
          cols={5}
          onSubmit={handleFormSubmit}
          isSaving={isSaving}
          setIsSaving={setIsSaving}
        /> // reemplazar por el componente que corresponda
    },
    {
      step: '3',
      title: 'Informe trimestral de cumplimiento comité',
      component:
        <FormInformes
          four
          step={"3"}
          cols={5}
          onSubmit={handleFormSubmit}
          isSaving={isSaving}
          setIsSaving={setIsSaving}
        />, // reemplazar por el componente que corresponda
    },
    {
      step: '4',
      title: 'Evaluación de contratistas',
      component:
        <FormInformes
          one
          step={"4"}
          cols={5}
          onSubmit={handleFormSubmit}
          isSaving={isSaving}
          setIsSaving={setIsSaving}
        />, // reemplazar por el componente que corresponda
    },
    {
      step: '5',
      title: 'Autoreporte Anual',
      component:
        <FormInformes
          four
          step={"5"}
          cols={5}
          onSubmit={handleFormSubmit}
          isSaving={isSaving}
          setIsSaving={setIsSaving}
        />, // reemplazar por el componente que corresponda
    },
    {
      step: '6',
      title: 'Informe de revisión por la alta gerencia',
      component:
        <FormInformes
          one
          step={"6"}
          cols={5}
          onSubmit={handleFormSubmit}
          isSaving={isSaving}
          setIsSaving={setIsSaving}
        />, // reemplazar por el componente que corresponda
    },
    // Agrega más subSteps si es necesario
  ];


  return (
    <div>
      <CardSubSteps title={"INFORMES"} subSteps={subSteps} />
    </div>
  );
};

export default Informes