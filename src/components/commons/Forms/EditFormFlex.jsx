import { useEffect } from "react";
import { useGetDataStepQuery } from "../../../api/services/steps/stepsApiSlice";




const EditFormFlex = ({ step}) => {
  const { data, isLoading, isError } = useGetDataStepQuery(step);

  
/*   useEffect(() => {
    if (!isLoading) {
      const payload = JSON.parse(data.payload);
      const lastPayload = payload[payload.length - 1];
      const updatedInputValues = {};
      inputs.forEach((input) => {
        if (lastPayload[input.nameApi]) {
          if (input.nameApi !== "uploadDate") {
            updatedInputValues[input.name] = lastPayload[input.nameApi];
          } else {
            const dateString = lastPayload[input.nameApi];
            const dateParts = dateString.split(" ")[0].split("-");
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            updatedInputValues[input.name] = formattedDate;
          }
        }
      });
      setInputValues(updatedInputValues);
    }
  }, [isLoading]) */ 
  return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4 w-full">
        {step}
        <p>Editar</p>
      </section>
    </>
  );
};

export default EditFormFlex;
