import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  useSaveStep521QuestionMutation,
  useGetDataStep521Query
} from "../../../../api/services/steps/stepsApiSlice";
import InputRHF from "../../../../components/commons/input/text/InputRHF";
import DataTable from "../../../../components/commons/Table/Datatable";
import Button from "../../../../components/commons/button/Button";

const SubStep521 = () => {

  const { register, handleSubmit } = useForm();
  // const [getDataStep521] = useLazyGetDataStep521Query();
  const { data: getDataStep521, isLoading: isLoadingDataStep521 } =
  useGetDataStep521Query();
  const [saveStep521] = useSaveStep521QuestionMutation();
  const [isLoading, setIsLoading] = useState(false);
  // const [getdata, setGetData] = useState([]);

  const columns = [
    { field: 'valor_1', headerName: 'Valor1', width: 250 },
    { field: 'valor_2', headerName: 'Valor2', width: 250 },
    { field: 'valor_3', headerName: 'Valor3', width: 250 },
  ];

  const onSubmit = async (data) => {

    const payload = {
      payload: data
    }
    try {
      toast.success("Se ha registrado correctamente!");
      await saveStep521(payload).unwrap();
      setIsLoading(true);
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  }


  if(!isLoadingDataStep521)
  return (
    <div className="p-5">
      {getDataStep521.length === 0 ? (
        <>
          <div className="grid grid-cols-3 gap-5 pb-5">
            <InputRHF
              type="number"
              label="Valor1"
              placeholder="Valor1"
              {...register("valor_1")}
            />
            <InputRHF
              type="number"
              label="Valor2"
              placeholder="Valor2"
              {...register("valor_2")}
            />
            <InputRHF
              type="number"
              label="Valor3"
              placeholder="Valor3"
              {...register("valor_3")}
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
        
        <DataTable title={""} columns={columns} rows={getDataStep521} />
        
      )}
    </div>
  );
  else return <p>Cargando..</p>
};

export default SubStep521;
