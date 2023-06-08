import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ButtonForm from "../button/ButtonForm";

const CardItem = ({ text, stateCards }) => {
  const navigate = useNavigate();

  const showAlert = () => {
    const transformedString = text.toString().replace(".", "_");
    if (transformedString === "1") return navigate("/lvc/");
    else if (stateCards.state_1)  return toast.error("la tarea #1 es necesaria.");
    else return navigate("/lvc/");
  };

  return (
    <div className="w-full">
      <Toaster />
      <ButtonForm
        text={`Hacer tarea #${text} `}
        onClick={showAlert}
        stateCards={stateCards}
        info={text}
      />
    </div>
  );
};

export default CardItem;