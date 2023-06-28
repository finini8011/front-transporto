import React from "react";
import LoadingIcon from "../../loading/LoadingIcon";

const Button = (props) => {
  const { text,loading, ...inputProps } = props;
  return (
    <button
      type="button"
      className="color-fourth bg-white text-center border border-fourth py-3 rounded-xl text-lg"
      {...inputProps}
    >
      {loading && <LoadingIcon /> }
      {text}
    </button>
  );
};

export default Button;
