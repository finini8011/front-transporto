import React, { useRef } from "react";
import Input from "../input/text/Input";
import InputForm from "../input/text/InputForm";
import Select from "../input/select/Select";
import TextAreaForm from "../input/TextArea/TextAreaForm"
import ButtonIcon from "../button/ButtonIcon";
import Date from "../input/text/Date";
import { useState } from "react";


const FormFlexGeneral = ({ title, inputs, cols, buttons, onSubmit, id, document }) => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const optionsChageState = [
    "Seleccionar",
    "Cumple",
    "Cumple parcialmente",
    "No cumple",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());
    let isValid = true;
    const newErrors = {};
    inputs.forEach((input) => {
      if (input.required && !formData.get(input.name)) {
        isValid = false;
        newErrors[input.name] = `Campo requerido`;
      }

      if (
        input.required &&
        input.name === "cambiarEstado" &&
        formData.get(input.name) === "Seleccionar"
      ) {
        isValid = false;
        newErrors[input.name] = `Campo requerido`;
      }

      if (
        input.required &&
        input.name === "cargaArchivo"  && 
        !formData.get(input.name).name
      ) {
        isValid = false;
        newErrors[input.name] = `Campo requerido`;
      }
    });

    if (isValid) {
      setErrors([]);
      onSubmit(formValues, id);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="py-2 px-4" id={id}>
      <h2 className="text-center text-sm mb-4">
        {document && <strong>DOCUMENTO: </strong>}
        {title}
      </h2>
      <hr />

      {/*   <div className={`grid grid-cols-${cols} gap-2`}> */}
      <div className={`grid grid-cols-${cols} gap-2 mt-2`}>
        {inputs.map((input, index) => {
          switch (input.type) {
            case "text":
              return(
                <InputForm
                  key={index}
                  type={input.type}
                  label={input.label}
                  placeholder={input.placeholder}
                  labelWeight={input.labelWeight}
                  id={input.name}
                  start={input.start}
                  end={input.end}
                  value={input.value}
                  error={errors[input.name]}
                  onChange={input.onChange}
                />
              );
            case "number":
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
                  error={errors[input.name]}
                  onChange={(value) => {
                    input.onchange && input.onchange(input.name, value);
                  }}
                />
              );
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
                  error={errors[input.name]}
                  onChange={(value) => {
                    input.onchange && input.onchange(input.name, value);
                  }}
                />
              );
            case "textArea":
              return (
                <TextAreaForm
                  key={index}
                  label={input.label}
                  placeholder={input.placeholder}
                  labelWeight={input.labelWeight}
                  id={input.name}
                  start={input.start}
                  end={input.end}
                  value={input.value}
                  error={errors[input.name]}
                  onChange={input.onChange}
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
                  id={input.name}
                  start={input.start}
                  end={input.end}
                  error={errors[input.name]}
                  data={optionsChageState}
                  /*      required={input.required} */
                />
              );
            case "date":
              return (
                <Date
                  type={input.type}
                  key={index}
                  label={input.label}
                  labelWeight={input.labelWeight}
                  placeholder={input.placeholder}
                  id={input.name}
                  start={input.start}
                  end={input.end}
                  value={input.value}
                  error={errors[input.name]}

                  /*     required={input.required} */
                />
              );
            case "button":
              return (
                /* <ButtonForm
                  text={input.text}
                  icon={input.icon}
                  type={input.type}
                  key={index}
                /> */
                <div
                  className={`col-start-${input.start} col-end-${input.end} flex`}
                  key={index}
                >
                  
                  <button type="button" className="flex-grow h-full border-2 border-[#0090FF] rounded-2xl overflow-hidden text-overflow-ellipsis whitespace-nowrap max-w-full">{input.text}</button>

                </div>
              );
            case "span":
              return (
                <div
                  className={`col-start-${input.start} col-end-${input.end}`}
                  key={index}
                >
                  <label
                    className={`block mb-2 text-sm font-medium text-gray-900`}
                  >
                    {input.label}
                  </label>
                  <div className="bg-gray-50 p-2 border rounded-lg min-h-[42px]">
                    <span>{input.value}</span>
                  </div>
                </div>
              );

            case "hr":
              return (
                <div className={`col-start-${input.start} col-end-${input.end}`} key={index}>
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
            <ButtonIcon
              key={index}
              text={button.text}
              icon={button.icon}
              type={button.type}
              onClick={(value) => {
                button.onClick && button.onClick(value);
              }}
            />
          );
        })}
      </div>
    </form>
  );
};

export default FormFlexGeneral;
