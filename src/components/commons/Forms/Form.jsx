import React, { useRef } from "react";
import Input from "../input/text/Input";
import Select from "../input/select/Select";
import TextArea from "../input/TextArea/TextArea";
import ButtonIcon from "../button/ButtonIcon";
import ButtonForm from "../button/ButtonForm";
import Date from "../input/text/Date";
import { useState } from "react";
const Form = ({ title, inputs, cols, buttons, onSubmit, id }) => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const optionsChageState = [
    "Seleccionar",
    "Cumple",
    "NO cumple",
    "Cumple parcialmente",
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

      if(input.required && input.name === "cambiarEstado" && formData.get(input.name) === "Seleccionar"){
        isValid = false;
        newErrors[input.name] = `Campo requerido`;
      }
 
      if(input.required && input.name === "cargaArchivo"  && !formData.get(input.name).name ){
         isValid = false;
        newErrors[input.name] = `Campo requerido`; 
      } 
    });

    if (isValid) {
      onSubmit(formValues, id);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-2" id={id}>
      <h2 className="text-center text-xs mb-4">{title}</h2>
      <hr />

      {/*   <div className={`grid grid-cols-${cols} gap-2`}> */}
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
                  error={errors[input.name]}
                  onChange={(value) => {
                    input.onchange && input.onchange(input.name, value);
                  }}
                  /*  required={input.required} */
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
                  error={errors[input.name]}
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
                  error={errors[input.name]}

                  /*     required={input.required} */
                />
              );
            case "button":
              return (
                <ButtonForm text={input.text} icon={input.icon} type={input.type} key={index} />
              );
            case "span":
              return (
                <div
                  className={`col-start-${input.start} col-end-${input.end}`} key={index}
                >
                  <label
                    className={`block mb-2 text-sm  font-bold text-gray-900`}
                  >
                    {input.label}
                  </label>
                  <div className="bg-gray-50 p-2 border rounded-lg">
                    <span>{input.value}</span>
                  </div>
                </div>
              );

            case "hr":
              return (
                <div className="col-start-1 col-end-6" key={index}>
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

export default Form;
