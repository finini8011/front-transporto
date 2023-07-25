import React from "react";
import {
faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonPlus = (props) => {
  const { text, loading, ...inputProps } = props;
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 gap-2"
      {...inputProps}
    >
        <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
      {text}
    </button>
  );
};

export default ButtonPlus;
