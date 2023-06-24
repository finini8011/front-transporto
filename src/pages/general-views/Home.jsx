import React from "react";
import Card from "../../components/commons/Cards/Card";
import { dataCard } from "../../constants";
import { useGetStateStepsQuery } from "../../api/services/steps/stepsApiSlice";

const Home = () => {
  const { data, error, isLoading } = useGetStateStepsQuery("Básico");
  if (data) {
   /*  const dataArray = Object.values(data); */

    dataCard.map((dataC, i) => {
      dataC.state = data[i + 1][0];
    });
  }

  return (
    <div className="justify-center ">
      {data ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {dataCard.map((data, key) => (
            <Card key={key} data={data} numberCard={key} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
