import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/commons/Cards/Card";
import ProgressBar from "../../components/commons/Progress/ProgressBar";
import { dataCard } from "../../constants";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../api/features/auth/authSlice";
import { useGetStateStepsQuery, useGetStatePESVQuery } from "../../api/services/steps/stepsApiSlice";
import { useOutletContext } from "react-router-dom";
// import { useGetStatePESVQuery } from "../../api/services/states/statesApiSlice";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [updatedDataCard, setUpdatedDataCard] = useState([]);
  const { data } = useGetStateStepsQuery(user.compania?.nivel);
  const { data: dataState } = useGetStatePESVQuery();
  const {handleNavigate} = useOutletContext()

  let resultCumple = 0;
  let parcialmente = 0;
  let arrayPesv = [];
  let resultNoAplica = 0;

  if (dataState) {
    const { 1: fase1, 2: fase2, 3: fase3, 4: fase4 } = dataState;
    const arrayDateStateFase1 = Object.values(fase1);
    const arrayDateStateFase2 = Object.values(fase2);
    const arrayDateStateFase3 = Object.values(fase3);
    const arrayDateStateFase4 = Object.values(fase4);
    arrayPesv = arrayDateStateFase1.concat(
      arrayDateStateFase2,
      arrayDateStateFase3,
      arrayDateStateFase4
    );
    arrayPesv.map((registro) => {
      if (registro === "Cumple") {
        resultCumple = resultCumple + 1;
      }
      if (registro === "Cumple parcialmente") {
        parcialmente = parcialmente + 1;
      }
      if (registro === "No aplica") {
        resultNoAplica = resultNoAplica + 1;
      }
    });
  }

  let resultParcialmente = parcialmente * 0.25;
  let resultPesv =
    ((resultCumple + resultParcialmente) /
      (arrayPesv.length - resultNoAplica)) *
    100;

  useEffect(() => {
    if (data) {
      const updatedData = dataCard.map((dataC, i) => {
        return {
          ...dataC,
          state: data[i + 1][0],
        };
      });
      setUpdatedDataCard(updatedData);
    }
  }, [data]);

  const handleCardClick = (step, state) => {
    if (state !== "No aplica" && user?.compania?.nivel == "Básico") {
      return handleNavigate(`/step/${step}`)
    } else {
      return handleNavigate(`/step/${step}`)
    }
  };

  return (
    <div className="justify-center ">
      <ProgressBar
        bgcolor="#0090ff"
        progress={Math.floor(resultPesv) ? Math.floor(resultPesv) : 0}
        height={12}
        width="100%"
        text="PESV"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {updatedDataCard.map((data, key) => (
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

export default Home;
