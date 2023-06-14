import React from "react";
import Form from "./Form";
import {
    faSquarePlus,
  } from "@fortawesome/free-solid-svg-icons";


const MultiSelectForm = ({titleForm, step, nameStep, cols, onSubmit}) => {

    const inputs = [
        {
          label: "Observaciones sobre el hallazgo o la no aplicación del requisito",
          labelWeight: "bold",
          name: "observaciones",
          type: "textArea",
          start: 1,
          end: 5,
        },
        {
          type: "hr",
        },
        {
          label: "Cambiar estado",
          labelWeight: "bold",
          name: "cambiarEstado",
          type: "select",
          placeholder: "",
          start: 4,
          end: 6,
        },
        {
          label: "Estado actual",
          type: "span",
          start: 4,
          end: 6,
          value: "SI",
        },
        {
          type: "hr",
        },
      ];

      const buttons = [
        {
          text: "Guardar",
          type: "submit",
          icon: faSquarePlus,
        }
      ];

    return (
        <>
        <section className="bg-white text-gray-800 flex flex-col gap-4">
          <div className="text-white bg-primary-600 p-3  text-base py-2 grid grid-cols-3 gap-2">
            {step} {nameStep}
          </div>
          <div className="px-2 mt-2">
          <Form title={titleForm} inputs={inputs} cols={cols}  buttons={buttons} onSubmit={onSubmit} id={step}/>
          </div>
        </section>
      </>
    );
};

export default MultiSelectForm;


