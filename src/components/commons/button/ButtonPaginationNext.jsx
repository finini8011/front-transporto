import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const ButtonPaginationNext = (props) => {
    const { text, ...inputProps } = props;
    return (
        <button className="py-1 px-3 rounded-r border border-slate-300">
            {text}
        </button>
    );
};

export default ButtonPaginationNext;

