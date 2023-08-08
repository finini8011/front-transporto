import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/commons/Cards/Card";
import ProgressBar from "../../components/commons/Progress/ProgressBar";
import { dataCard } from "../../constants";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../api/features/auth/authSlice";
import {
  useGetStateStepsQuery,
  useGetStatePESVQuery,
} from "../../api/services/steps/stepsApiSlice";
import { useOutletContext } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { CircularProgress } from "@mui/material";
import ProgressCircular from "../../components/commons/Progress/ProgressCircular";
// import { useGetStatePESVQuery } from "../../api/services/states/statesApiSlice";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [updatedDataCard, setUpdatedDataCard] = useState([]);
  const [progress, setProgress] = useState(0);
  const [textNoData, setTextNoData] = useState(false);
  const { data } = useGetStateStepsQuery(user.compania?.nivel);
  const { data: dataState } = useGetStatePESVQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { handleNavigate } = useOutletContext();

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
    const isIncluded = user.permissions?.includes(step); //verificar que esté permitido de ver este paso
    if (isIncluded || user.permissions?.length === 0) {
      //verifica si está permitido o si tiene permisos de admin
      if (state !== "No aplica" && user?.compania?.nivel !== "Básico") {
        return handleNavigate(`/step/${step}`);
      }
      if (state !== "No aplica" && user?.compania?.nivel === "Básico") {
        return handleNavigate(`/step/${step}`);
      } else {
        return handleNavigate(`/home`);
      }
    } else {
      toast.error("No tiene permiso para ingresar a este paso.");
    }
  };

 

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 500);
  
    const tiempo = 10000; 
  
    setTimeout(() => {
      clearInterval(timer);
      setTextNoData(true);
      setProgress(0);
    }, tiempo);
  
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="justify-center ">
      <Toaster />
      <ProgressBar
        bgcolor="#0090ff"
        progress={Math.round(resultPesv) ? Math.round(resultPesv) : 0}
        height={12}
        width="100%"
        text="PESV"
      />
      {data ? (
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
      ) : (
        <div className="p-4 text-[#0090FF] rounded-2xl font-medium text-center text-xl mt-16 w-2/5 m-auto">
          <ProgressCircular progress={progress} />
          {textNoData &&
            <p className="mb-4 text-center">No se encontraron datos...</p>}
        </div>
      )}
    </div>
  );
};

export default Home;
