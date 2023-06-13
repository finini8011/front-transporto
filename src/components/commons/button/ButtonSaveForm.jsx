import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const ButtonForm = (props) => {
    const { text, ...inputProps } = props;
    return (
        <button className="flex flex-col items-center justify-center px-4 py-1.5 w-58 h-43 bg-gray-500 text-white rounded-md focus:outline-none m-5" style={{borderRadius: '2px'}}>
            <FontAwesomeIcon icon={faSquarePlus} className="m-1" size="lg" />
            <span className="text-xs">{text}</span>
        </button>
    );
};

export default ButtonForm;

