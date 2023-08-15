import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import SelectRHF from "../../../../components/commons/input/select/SelectRHF";
import TableStep522 from "../../../../components/tables/TableStep522";


const dataApi = [ {
  label:"User1 Tester - 0995479",
  value:"user1"
}, 
{
  label:"User2 Tester - 0995480",
  value:"user2"
},
{
  label:"User3 Tester - 0995481",
  value:"user3"
}]

const SubStep52 = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  return (
    <div className="p-5">
      <SelectRHF
        label="Actividad Principal (CIIU)"
        dataApi={dataApi}
        {...register("main_activity_ciiu")}
      />
      <button className="button-save mt-5">Cargar usuario</button>
      <TableStep522 />
    </div>
  );
};

export default SubStep52;
