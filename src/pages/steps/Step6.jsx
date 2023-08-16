import React from "react";
import CardSubSteps from "../../components/commons/Cards/CardSubSteps";
import SubStep61 from "../steps/substeps/subSteps6/SubStep61";

const Step6 = () => {

  const subSteps = [
    {
      step: '6.1',
      title: 'Informe de encuestas de movilidad',
      component: <SubStep61 />,
    },
    // Agrega más subSteps si es necesario
  ];


  return (
    <div>
      <h1 className="text-[#0090FF] text-2xl font-medium tracking-tight	mb-3 flex">
        FASE 1: PLANIFICACIÓN - PASO 6. CARACTERIZACION , EVALUACIÓN Y CONTROL DE RIESGOS 
      </h1>
      <p className="text-xs pb-3">
        Use el siguiente formulario para crear el acta de asignación de líderes del PESV. Si lo requiere emplee el archivo de descarga como guía para la elaboración.
      </p>
      <CardSubSteps title={"SUB ELEMENTOS PASO 5: DIAGNÓSTICO"} subSteps={subSteps} />
    </div>
  );
};

export default Step6;