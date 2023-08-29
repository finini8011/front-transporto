import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import SelectRHF from "../../../../components/commons/input/select/SelectRHF";
import TableStep522 from "../../../../components/tables/TableStep522";
import { useGetCollaboratosSubStep522Query } from "../../../../api/services/subSteps/subStepsApiSlice";

const SubStep52 = () => {
  const { register, watch, setValue } = useForm();
  const { data: dataCollaborators, isLoading: isLoadingCollaborators } =
    useGetCollaboratosSubStep522Query();

  const updateFormatSelect = (arr) => {
    const format = arr.map((data) => {
      return {
        label: `${data.Nombres_y_Apellidos} - ${data.Numero_Cedula}`,
        value: data.id,
      };
    });
    return format;
  };

  useEffect(() => {
    if (dataCollaborators) {
      setValue("id_collaborator", dataCollaborators[0]?.id);
    }
  }, [dataCollaborators]);

  if (!isLoadingCollaborators)
    if (dataCollaborators)
      return (
        <div className="p-5">
          <SelectRHF
            label="Nombre de colaborador"
            dataApi={updateFormatSelect(dataCollaborators)}
            {...register("id_collaborator")}
          />
          <TableStep522 id_collaborator={watch("id_collaborator")} />
        </div>
      );
    else if (dataCollaborators?.length === 0)
      return <p className="text-[#0090FF] text-xl">- No hay colaboradores por mostrar.</p>;
    else return <p className="text-[#0090FF] text-xl">- Primero debe completar el subpaso 5.1.1</p>;
  else return <p className="text-[#0090FF]">Cargando..</p>;
};

export default SubStep52;
