import React from "react";
import CardSubSteps from "../../components/commons/Cards/CardSubSteps";
import SubStep511 from "./substeps/subSteps5/SubStep511";
import SubStep512 from "./substeps/subSteps5/SubStep512";
import SubStep513 from "./substeps/subSteps5/SubStep513";
import SubStep514 from "./substeps/subSteps5/SubStep514";
import SubStep515 from "./substeps/subSteps5/SubStep515";
import SubStep521 from "./substeps/subSteps5/SubStep521";
import SubStep52 from "./substeps/subSteps5/SubStep522";



const Step5 = () => {

  const subSteps = [
    {
      step: '5.1.1',
      title: 'Lista de colaboradores de la organización',
      component: <SubStep511 />,
    },
    {
      step: '5.1.2',
      title: 'Lista de contratistas',
      component: <SubStep512 />,
    },
    {
      step: '5.1.3',
      title: 'Lista de rutas frecuentes de desplazamientos laborales',
      component: <SubStep513 />,
    },
    {
      step: '5.1.4',
      title: 'Cantidad de sedes - Servicios que presta la organización',
      component: <SubStep514 />,
    },
    {
      step: '5.1.5',
      title: 'Lista de vehículos automotores o no automotores',
      component: <SubStep515 />,
    },
    {
      step: '5.2.1',
      title: 'Línea base para identificar los problemas de seguridad vial.',
      component: <SubStep521 />,
    },
    {
      step: '5.2.2',
      title: 'Diagnóstico de Seguridad vial - Encuestas de actores viales -Evaluación inicial del PESV - Actualizado cada año',
      component: <SubStep52 />,
    },
    // Agrega más subSteps si es necesario
  ];

  return (
    <div>
      <h1 className="text-[#0090FF] text-2xl font-medium tracking-tight	mb-3 flex">
        FASE 1: PLANIFICACIÓN - PASO 5. DIAGNÓSTICO
      </h1>
      <p className="text-xs pb-3">
        Use el siguiente formulario para crear el acta de asignación de líderes del PESV. Si lo requiere emplee el archivo de descarga como guía para la elaboración.
      </p>
      <CardSubSteps title={"SUB ELEMENTOS PASO 5: DIAGNÓSTICO"} subSteps={subSteps} />
    </div>
  );
};

export default Step5;