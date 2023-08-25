import React from "react";
import SubStep511 from "../steps/substeps/subSteps5/SubStep511";
import CardSubSteps from "../../components/commons/Cards/CardSubSteps";

const Informes = () => {

  const subSteps = [
    {
      step: '5.1.1',
      title: 'Lista de colaboradores de la organización',
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