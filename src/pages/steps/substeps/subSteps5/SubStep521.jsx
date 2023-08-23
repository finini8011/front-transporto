import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  useLazyGetDataStep521Query,
  useSaveStep521QuestionMutation
} from "../../../../api/services/steps/stepsApiSlice";
import InputRHF from "../../../../components/commons/input/text/InputRHF";
import DataTable from "../../../../components/commons/Table/Datatable";
import Button from "../../../../components/commons/button/Button";

const SubStep521 = () => {

  const { register, handleSubmit } = useForm();
  const [getDataStep521] = useLazyGetDataStep521Query();
  const [saveStep521] = useSaveStep521QuestionMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [getdata, setGetData] = useState([]);

  const columns = [
    { field: 'Valor1', headerName: 'Valor1', width: 250 },
    { field: 'Valor2', headerName: 'Valor2', width: 250 },
    { field: 'Valor3', headerName: 'Valor3', width: 250 },
  ];

  useEffect(() => {
    const getData = async () => {
      const { data } = await getDataStep521();
      setGetData(data);

    };
    getData();
  }, [])

  const onSubmit = async (data) => {
    try {
      toast.success("Se ha registrado correctamente!");
      await saveStep521(data).unwrap();
      setIsLoading(true);
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  }

  return (
    <div className="p-5">
      {getdata?.length === 1 ? (
        <>
          <div className="grid grid-cols-3 gap-5 pb-5">
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
            blue
            text="Guardar"
            onClick={handleSubmit(onSubmit)}
            loading={isLoading}
          />
        </>
      ) : (
        <DataTable title={"titulo"} columns={columns} rows={getdata} />
      )}
    </div>
  );
};

export default SubStep521;
