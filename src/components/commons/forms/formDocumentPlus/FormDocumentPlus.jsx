import React from "react";
import InputChecklist from "../../input/text/InputChecklist";
import { useForm } from "react-hook-form";
import Textarea from "../../input/text/Textarea";

const FormDocumentPlus = (
  {
    title,
    stepNumber,
    subtitle,
    crea,
    destinario,
    descripcion,
    archivo,
    fecha
  }) => {

  const {
    register,
  } = useForm();

  return (
    <div className="bg-white text-gray-800 flex flex-col w-full">
      <div className="shadow-md rounded-md">
        <div className="text-white bg-blue-500 p-3 rounded-t-md text-base font-semibold">
          <p>{`${stepNumber} ${title}`}</p>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="px-2 mt-2">
        <div className="py-2 grid grid-cols-3 gap-2">
          <InputChecklist
            type="text"
            label="Crea"
            placeholder="Crea"
            value={crea}
            {...register("Crea")}
          />
          <InputChecklist
            type="text"
            label="Destinario"
            placeholder="Destinario"
            value={destinario}
            {...register("Destinario")}
          />
          <InputChecklist
            type="date"
            label="Fecha"
            placeholder="Fecha"
            value={fecha}
            {...register("Fecha")}
          />
        </div>
        <div className="py-2 grid grid-cols-3 gap-2">
          <InputChecklist
            type="file"
            label="Cargar archivo"
            placeholder="Cargar archivo"
            value={archivo}
            {...register("Cargar archivo")}
          />
          <Textarea
            label="Descripcion"
            col="col-span-2"
            value={descripcion}
            {...register("Descripcion")}
          />
        </div>
      </div>
    </div>
  );
};

export default FormDocumentPlus;


