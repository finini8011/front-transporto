import React from "react";
import Card from "../../components/commons/Cards/Card"
import { dataCard } from "../../constants";

const Home = () => {

  return (
    <div className="justify-center ">
   <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {dataCard.map((data, key) => (
          <Card key={key} data={data} numberCard={key} />
        ))}
      </div>
    </div>
  );
};

export default Home;
