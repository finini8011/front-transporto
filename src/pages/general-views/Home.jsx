import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/commons/Cards/Card";
import { dataCard } from "../../constants";
import { useGetStateStepsQuery } from "../../api/services/steps/stepsApiSlice";

const Home = () => {
  const navigate = useNavigate();
  const [updatedDataCard, setUpdatedDataCard] = useState(dataCard);
  const persistRootValue = localStorage.getItem("persist:root");
  const authState = JSON.parse(persistRootValue).authState;
  const nivel = JSON.parse(authState).user.compania.nivel;
  const { data, error, isLoading } = useGetStateStepsQuery(nivel);

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
    console.log(state)
    if (state !== "No aplica" && nivel == "Básico") {
      return navigate(`/step/${step}`);
    }
  };

  return (
    <div className="justify-center ">
    {/*   {loadedData ? ( */}
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
    {/*   ) : (
        <div></div>
      )} */}
    </div>
  );
};

export default Home;
