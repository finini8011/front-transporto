import {
  faBookOpen,
  faChalkboardUser,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoCompliance.css";

const InfoCompliance = () => {
  return (
    <div className="containerModal flex flex-col w-full h-full">
      <div className="bg-black w-full h-2/5">
        <h1 className="text-center mt-2 titleModal">Cumplimiento</h1>
      </div>

      <div className="p-4">
        <ul className="optionsList">
          <li className="p-2">
            <a className="text-white">
              <FontAwesomeIcon icon={faChalkboardUser} className="icons" />
              Capacitación
            </a>
          </li>

          <li className="p-2">
            <a className="text-white">
              <FontAwesomeIcon icon={faBookOpen} className="icons" />
              Manual
            </a>
          </li>

          <li className="p-2">
            <a className="text-white">
              <FontAwesomeIcon icon={faFileLines} className="icons" />
              Documentación
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoCompliance;
