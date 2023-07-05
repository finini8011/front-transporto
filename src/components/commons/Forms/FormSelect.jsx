import { useEffect, useState } from "react";
import { useLazyGetDataStepQuery } from "../../../api/services/steps/stepsApiSlice";
import Form from "./Form";
import FormFlexGeneral from "./FormFlexGeneral";
import {
  faDownload,
  faEye,
  faSquarePlus,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FormSelect = ({ titleForm, step, nameStep, cols, onSubmit }) => {

  const [inputValues, setInputValues] = useState({});
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const [isLoading, setIsLoading] = useState(true);
  const [lastPayload, setLastPayload] = useState({});
  const [getDataStep] =
    useLazyGetDataStepQuery(step);

  const inputs = [
    {
      label: "CAMBIAR ESTADO",
      labelWeight: "medium",
      name: "cambiarEstado",
      type: "select",
      placeholder: "",
      start: 1,
      end: 3,
      required: true,
    },
    {
      label: "Observaciones sobre el hallazgo o la no aplicación del requisito",
      labelWeight: "medium",
      name: "observaciones",
      nameApi:"observaciones",
      type: "textArea",
      start: 3,
      end: 6,
      required: true,
    },

    {
      label: "ESTADO ACTUAL",
      name: "estado",
      nameApi: "estado",
      type: "span",
      start: 1,
      end: 3,
      value: "",
    },
  ];
  const buttons = [
    {
      text: "Guardar",
      type: "submit",
      icon: faSquarePlus,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const { data, isLoading: loading } = await getDataStep(step);
      let payload = [];
      let dataGetPayload = {};
      if (!!data) {
        const {payload:payloadData} = data;
        if(!!payloadData){
          payload = JSON.parse(data.payload);
          dataGetPayload = payload[payload.length - 1];
        }
      };
      setLastPayload(dataGetPayload);
      setIsLoading(loading);
    };
    getData();
    if (!isLoading) {
      const updatedInputValues = {};
      if (lastPayload) {
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
      }
      setInputValues(updatedInputValues);
    }
  }, [isLoading])

  return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="rounded-t-2xl flex text-base">
          <div className="bg-[#EEF2F6] p-4 text-[#0090FF] rounded-t-2xl font-medium w-full">
          <FontAwesomeIcon
              size="xs"
              icon={faGreaterThan}
              className="mr-2"
              style={{ color: "#008ffe" }}
            />
            {step} {nameStep}
          </div>
        </div>
        {lastPayload ? (
          <FormFlexGeneral
          title={titleForm}
          inputs={inputs.map((input) => ({
            ...input,
            value: inputValues[input.name],
            onChange: (valor) => {
              console.log(valor, "valor")
              let fileLoad;
              let originalName;
              if (input.name === "fileName") {
                fileLoad = valor.target.files[0];
                originalName = valor.target.files[0].name;
                setInputValues({
                  ...inputValues,
                  [input.name]: fileLoad,
                  originalName
                });
              } else {
                setInputValues({
                  ...inputValues,
                  [input.name]: valor
                });
              }
              console.log(inputValues, "valores")
            }
          }))}
          cols={cols}
          buttons={buttons}
          onSubmit={onSubmit}
          id={step}
        />
        ) : (
          <FormFlexGeneral
            title={titleForm}
            inputs={inputs}
            cols={cols}
            buttons={buttons}
            onSubmit={onSubmit}
            id={step}
            document={true}
          />
        )}
      </section>
    </>
  );
};

export default FormSelect;
