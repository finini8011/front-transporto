import React from "react";
import InputRHF from "../../../../components/commons/input/text/InputRHF";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import TableStep521 from "../../../../components/tables/TableStep521";

const SubStep521 = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-5">
        <InputRHF
          type="text"
          label="Valor1"
          placeholder="Valor1"
          {...register("val1")}
        />
        <InputRHF
          type="text"
          label="Valor2"
          placeholder="Valor2"
          {...register("val2")}
        />
        <InputRHF
          type="text"
          label="Valor3"
          placeholder="Valor3"
          {...register("val3")}
        />
      </div>
      <button className='button-save mt-5'>
          Guardar
        </button>
      <TableStep521/>
    </div>
  );
};

export default SubStep521;
