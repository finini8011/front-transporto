import React from "react";
import { useGetStatePESVQuery } from "../../../api/services/states/statesApiSlice";
import ProgressBar from "../../../components/commons/Progress/ProgressBar";

const Implementacion = () => {

  const { data: dataState } = useGetStatePESVQuery();

  let resultCumple = 0;
  let parcialmente = 0;
  let arrayDateStateFase2 = [];
  let resultNoAplica = 0;

  

  if (dataState) {
    const { 2: fase2 } = dataState;
     arrayDateStateFase2 = Object.values(fase2);
    arrayDateStateFase2.map((registro) => {
      if (registro === "Cumple") {
        resultCumple = resultCumple + 1;
      }
      if (registro === "Cumple parcialmente") {
        parcialmente = parcialmente + 1;
      }
      console.log(arrayDateStateFase2, "fase2")
      if (registro === "No aplica") {
        resultNoAplica = resultNoAplica + 1;
      }
      console.log(arrayDateStateFase2, "fase2")
    })
  }


  let resultParcialmente = parcialmente * 0.25;
  let resultPesv = (resultCumple + resultParcialmente  )/(arrayDateStateFase2.length -resultNoAplica ) ;

  return (
    <div>
      <p>fase Implementacion</p>
      <ProgressBar bgcolor="#0090ff" progress={Math.floor(resultPesv) ? Math.floor(resultPesv) : 0} height={12} width="100%" text="PESV" />
    </div>
  );
};

export default Implementacion;