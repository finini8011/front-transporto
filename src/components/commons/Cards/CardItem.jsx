import React from "react";
import toast, { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import ButtonForm from "../button/ButtonForm";

const CardItem = ({ text }) => {
  const navigate = useNavigate();

  const showAlert = () => {
    const String = text.toString();
 if (String) {
      return toast.error("Diligenciar los datos de la empresa", {
        style: {
          boxShadow: "none",
          border: "1px solid red",
        },
      });
    } else {
      return navigate("/lvc/");
    }
  };

  return (
    <div className="w-full">
      <Toaster position="top-right" reverseOrder={false} />
      <ButtonForm
        text={`Paso #${text} `}
        onClick={showAlert}
        info={text}
      />
    </div>
  );
};

export default CardItem;
