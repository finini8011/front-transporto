import React from "react";
import LoadingIcon from "../../loading/LoadingIcon";

const ButtonLoading = () => {
  return (
    <button
      type="button"
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  inline-flex items-center justify-center"
      disabled
    >
      <LoadingIcon />
      Cargando...
    </button>
  );
};

export default ButtonLoading;
