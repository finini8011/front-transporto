import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  useLazyGetDataStep521Query,
  useSaveStep521QuestionMutation
} from "../../../../api/services/steps/stepsApiSlice";
import InputRHF from "../../../../components/commons/input/text/InputRHF";
import TableStep521 from "../../../../components/tables/TableStep521";
import Button from "../../../../components/commons/button/Button";

const SubStep521 = () => {

  const { register, handleSubmit } = useForm();
  const [getDataStep521] = useLazyGetDataStep521Query();
  const [saveStep521, isLoading] = useSaveStep521QuestionMutation();
  const [getdata, setGetData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, isLoading: loading } = await getDataStep521();
      console.log(data, "datos")
      setGetData(data);
    };
    getData();
  }, [])

  const onSubmit = async (data) => {
    try {
      toast.success("Se ha registrado correctamente!");
      await saveStep521(data).unwrap();
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  }

  return (
    <div className="p-5">
      {getdata?.length === 0 ? (
        <>
          <div className="grid grid-cols-3 gap-5">
            <InputRHF
              type="number"
              label="Valor1"
              placeholder="Valor1"
              {...register("val1")}
            />
            <InputRHF
              type="number"
              label="Valor2"
              placeholder="Valor2"
              {...register("val2")}
            />
            <InputRHF
              type="number"
              label="Valor3"
              placeholder="Valor3"
              {...register("val3")}
            />
          </div>
          <Button
            text="Guardar"
            onClick={handleSubmit(onSubmit)}
            loading={isLoading}
          />
        </>
      ) : (
        <TableStep521 data={getdata} />
      )}
    </div>
  );
};

export default SubStep521;
