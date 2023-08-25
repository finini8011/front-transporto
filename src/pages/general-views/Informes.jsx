import React from "react";
import SubStep511 from "../steps/substeps/subSteps5/SubStep511";
import CardSubSteps from "../../components/commons/Cards/CardSubSteps";

const Informes = () => {

  const subSteps = [
    {
      step: '1',
      title: 'Informe de identificación de riesgos',
      component: <SubStep511 />, // reemplazar por el componente que corresponda
    },
    {
      step: '2',
      title: 'Análisis de la accidentalidad',
      component: <SubStep511 />, // reemplazar por el componente que corresponda
    },
    {
      step: '3',
      title: 'Informe trimestral de cumplimiento comité',
      component: <SubStep511 />, // reemplazar por el componente que corresponda
    },
    {
      step: '4',
      title: 'Evaluación de contratistas',
      component: <SubStep511 />, // reemplazar por el componente que corresponda
    },
    {
      step: '5',
      title: 'Autoreporte Anual',
      component: <SubStep511 />, // reemplazar por el componente que corresponda
    },
    {
      step: '6',
      title: 'Informe de revisión por la alta gerencia',
      component: <SubStep511 />, // reemplazar por el componente que corresponda
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