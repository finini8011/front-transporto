import React from "react";
import Card from "../../components/commons/Cards/Card"

const Home = () => {

  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
<div className="flex justify-center ">
        <div className="grid grid-cols-6 gap-4">
          {data.map((number, key) => (
            <Card key={key} value={number} numberCard={key} />
          ))}
        </div>
      </div>

  );
};

export default Home;
