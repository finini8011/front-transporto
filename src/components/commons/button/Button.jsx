import React from "react";
import LoadingIcon from "../../loading/LoadingIcon";

const Button = (props) => {
  const { text, loading, blue, ...inputProps } = props;
  return (
    <button
      type="button"
      className={
        blue
          ? " text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          : "color-fourth bg-white text-center border border-fourth py-2 px-3 rounded-xl text-lg"
      }
      {...inputProps}
    >
      {loading && <LoadingIcon />}
      {text}
    </button>
  );
};

export default Button;
