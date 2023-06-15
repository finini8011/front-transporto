import React from "react";
import Form from "./Form";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const MultiSelectForm = ({ titleForm, step, nameStep, cols, onSubmit }) => {
  const inputs = [
    {
      label: "Cambiar estado",
      labelWeight: "bold",
      name: "cambiarEstado",
      type: "select",
      placeholder: "",
      start: 1,
      end: 3,
    },
    {
      label: "Observaciones sobre el hallazgo o la no aplicación del requisito",
      labelWeight: "bold",
      name: "observaciones",
      type: "textArea",
      start: 3,
      end: 6,
    },
    {
      type: "hr",
    },

    {
      label: "Estado actual",
      type: "span",
      start: 1,
      end: 3,
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
    },
  ];

  return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="text-white bg-primary-600 p-3  text-base py-2 ">
          {step} {nameStep}
        </div>
        <div className="px-2 mt-2">
          <Form
            title={titleForm}
            inputs={inputs}
            cols={cols}
            buttons={buttons}
            onSubmit={onSubmit}
            id={step}
          />
        </div>
      </section>
    </>
  );
};

export default MultiSelectForm;
