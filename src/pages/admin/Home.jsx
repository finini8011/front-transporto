import React from "react";
import Card from "../../components/commons/Cards/Card"
import { dataCard } from "../../constants";

const Home = () => {

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-6 gap-4">
        {dataCard.map((data, key) => (
          <Card key={key} data={data} numberCard={key} />
        ))}
      </div>
    </div>
  );
};

export default Home;
