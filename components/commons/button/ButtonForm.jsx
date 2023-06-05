import React from "react";

const ButtonForm = (props) => {
  const { text, ...inputProps } = props;
  return (
    <div
      className={`bg-gradient-to-r from-[#0b2d61] to-[#0e70cc] rounded-md py-2 w-7/12 text-white font-semibold text-base lg:text-lg cursor-pointer z-20 shadow-md  mx-auto text-center`}
      {...inputProps}
      role="button"
    >
      {text}
    </div>
  );
};

export default ButtonForm;
