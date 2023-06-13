import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../input/text/Input";
import Select from "../input/select/Select";
import TextArea from "../input/TextArea/TextArea";
import ButtonForm from "../button/ButtonForm";
import Button from "../button/Button";

const Form = ({ title, inputs, cols, buttons }) => {
  const formRef = useRef(null);

  const optionsChageState = ["SI", "NO"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
  };
  
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-2">
      <h2 className="text-center text-xs mb-4">{title}</h2>
      <hr />

      <div className={`grid grid-cols-${cols} gap-2`}>
        {inputs.map((input, index) => {
          switch (input.type) {
            case "text":
            case "file":
              return (
                <Input
                  key={index}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  labelWeight={input.labelWeight}
                  id={input.name}
                  start={input.start}
                  end={input.end}
                  disabled={input.disabled}
                  onChange={(value) => {
                    input.onchange && input.onchange(input.name, value);
                  }}
                  /*   {...register(`${input.name}`)}  */
                />
              );
            case "textArea":
              return (
                <TextArea
                  key={index}
                  label={input.label}
                  placeholder={input.placeholder}
                  labelWeight={input.labelWeight}
                  id={input.name}
                  start={input.start}
                  end={input.end}
                  /*      {...register(`${input.name}`)} */
                />
              );

            case "select":
              return (
                <Select
                  type="text"
                  key={index}
                  label={input.label}
                  labelWeight={input.labelWeight}
                  placeholder={input.placeholder}
                  start={input.start}
                  end={input.end}
                  data={optionsChageState} //
                  /*   {...register(`${input.name}`)} */
                />
              );
            case "button":
              return (
                <ButtonForm
                  text="Descargar archivo guía acta de asignación lider del PESV"
                  icon="faFileArrowDown"
                />
              );

            case "hr":
              return (
                <div className="col-start-1 col-end-6">
                  <hr />
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="mt-2 flex gap-4">
        {buttons.map((button, index) => {
          return (
            <Button text={button.text} icon={button.icon} type={button.type} onClick={(value) => {
              button.onClick && button.onClick(value);
            }}/>
          );
        })}
      </div>
    </form>
  );
};

export default Form;
