import React from "react";
import CardSubSteps from "../../components/commons/Cards/CardSubSteps";
import SubStep511 from "./substeps/subSteps5/SubStep511";
import SubStep512 from "./substeps/subSteps5/SubStep512";



const Step5 = () => {

  const subSteps = [
    {
      step: '5.1.1',
      title: 'Lista de colaboradores de la organización',
      component: <SubStep511/>,
    },
    {
      step: '5.1.2',
      title: 'Lista de contratistas',
      component: <SubStep512 />,
    },
    // Agrega más subSteps si es necesario
  ];

  return (
    <div>
      <CardSubSteps subSteps={subSteps} />
    </div>
  );
};

export default Step5;