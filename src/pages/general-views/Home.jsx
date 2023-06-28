import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/commons/Cards/Card";
import ProgressBar from "../../components/commons/Progress/ProgressBar";
import { dataCard } from "../../constants";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../api/features/auth/authSlice";
import { useGetStateStepsQuery } from "../../api/services/steps/stepsApiSlice";


const Home = () => {

  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  
  const [updatedDataCard, setUpdatedDataCard] = useState([]);
  const { data } = useGetStateStepsQuery(user.compania?.nivel);


  useEffect(() => {
    if (data) {
      const updatedData = dataCard.map((dataC, i) => {
        return {
          ...dataC,
          state: data[i + 1][0]
        };
      });
      setUpdatedDataCard(updatedData);
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
       <ProgressBar bgcolor="#0090ff" progress={40}  height={12} width="100%" text="PESV"/>
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

export default Home;
