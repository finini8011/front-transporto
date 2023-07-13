import React from "react";
import Calendar from "../../components/calendar/Calendar";
import { ListTags } from "../../constants/ListTags";

const Calendario = () => {

  const elementosSeleccionados = [];
  
  function handleClick(subStep) {
    elementosSeleccionados.push(subStep);
    console.log(elementosSeleccionados);
  }
  return (
    <div>
      <Calendar />
      <div className="">
        {ListTags.map((item, index) => (
          <div key={index}>
            {item.SubStep.map((subStep, subIndex) => (
              <button key={subIndex} onClick={() => handleClick(subStep)}>{subStep}</button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendario 