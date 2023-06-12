import React from "react";
import LoadingIcon from "../../loading/LoadingIcon";

const ButtonPrimary = (props) => {
  const { text,loading, ...inputProps } = props;
  return (
    <button
      type="button"
      className="w-36 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
      {...inputProps}
    >
      {loading && <LoadingIcon /> }
      {text}
    </button>
  );
};

export default ButtonPrimary;
