import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../../components/commons/Cards/Card";
import ProgressBar from "../../../components/commons/Progress/ProgressBar";
import { dataCard } from "../../../constants";
import { selectCurrentUser } from "../../../api/features/auth/authSlice";
import { useGetStateStepsQuery, useGetStatePESVQuery } from "../../../api/services/steps/stepsApiSlice";

const Planificacion = () => {

  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [updatedDataCard, setUpdatedDataCard] = useState([]);
  const { data } = useGetStateStepsQuery(user.compania?.nivel);
  const {data:dataState} = useGetStatePESVQuery();

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

  useEffect(() => {
    if (data) {
  
      const updatedData = dataCard.map((dataC, i) => {
        return {
          ...dataC,
          state: data[i + 1][0]
        };
      });
      console.log(updatedData)

      setUpdatedDataCard(updatedData.filter(card => card.stage == 1));
    }
  }, [data]);  

  const handleCardClick = (step, state) => {
    if (state !== "No aplica" && user?.compania?.nivel == "Básico") {
      return navigate(`/step/${step}`);
    } else {
      return navigate(`/step/${step}`);
    }
  };


  return (
    <div className="justify-center ">
  <ProgressBar bgcolor="#0090ff" progress={Math.round(resultPesv) ? Math.round(resultPesv) : 0} height={12} width="100%" text="FASE#1 PLANIFICACION" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {
          updatedDataCard.map((data, key) => (
            <Card
              key={key}
              data={data}
              numberCard={key}
              onClick={handleCardClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Planificacion;