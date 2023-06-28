import React from "react";
import { useGetStatePESVQuery } from "../../../api/services/states/statesApiSlice";
import ProgressBar from "../../../components/commons/Progress/ProgressBar";

const Seguimiento = () => {

  
  const { data: dataState } = useGetStatePESVQuery();

  let resultCumple = 0;
  let parcialmente = 0;
  let arrayDateStateFase3 = [];
  let resultNoAplica = 0;

  

  if (dataState) {
    const { 3: fase3 } = dataState;
     arrayDateStateFase3 = Object.values(fase3);
    arrayDateStateFase3.map((registro) => {
      if (registro === "Cumple") {
        resultCumple = resultCumple + 1;
      }
      if (registro === "Cumple parcialmente") {
        parcialmente = parcialmente + 1;
      }
      if (registro === "No aplica") {
        resultNoAplica = resultNoAplica + 1;
      }
    })
  }

  let resultParcialmente = parcialmente * 0.25;
  let resultPesv = (resultCumple + resultParcialmente  )/(arrayDateStateFase3.length - resultNoAplica )*100 ;

  return (
    <div>
      <p>fase Implementacion</p>
      <ProgressBar bgcolor="#0090ff" progress={Math.round(resultPesv) ? Math.round(resultPesv) : 0} height={12} width="100%" text="PESV" />
    </div>
  );
};

export default Seguimiento;