import React from "react";
import { useGetStatePESVQuery } from "../../../api/services/states/statesApiSlice";
import ProgressBar from "../../../components/commons/Progress/ProgressBar";

const Planificacion = () => {

  const { data: dataState } = useGetStatePESVQuery();

  let resultCumple = 0;
  let parcialmente = 0;
  let arrayDateStateFase1 = [];
  let resultNoAplica = 0;

  

  if (dataState) {
    const { 1: fase1 } = dataState;
     arrayDateStateFase1 = Object.values(fase1);
    arrayDateStateFase1.map((registro) => {
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
  let resultPesv = (resultCumple + resultParcialmente  )/(arrayDateStateFase1.length - resultNoAplica )*100 ;

  return (
    <div>
      <p>fase Implementacion</p>
      <ProgressBar bgcolor="#0090ff" progress={Math.round(resultPesv) ? Math.round(resultPesv) : 0} height={12} width="100%" text="PESV" />
    </div>
  );
};

export default Planificacion;