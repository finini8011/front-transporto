import React from "react";
import "./DirectAccess.css";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DirectAccess = () => {
  return (
    <div className="w-full shadow-md lg:max-w-lg">
      <div className="space-y-2 mt-2">
        <section className="sectionTitle">
          <h3 className="text-center text-gray-600">
            Accesos directos frecuentes
          </h3>
        </section>

        <section className="sectionOptions">
          <ul className="p-2">
            <li>
              <a href="">
                <FontAwesomeIcon icon={faBullseye} className="icons" />
                Inventarios
              </a>
            </li>

            <li>
              <a href="">Colaboradores</a>
            </li>

            <li>
              <a href="">Contratistas</a>
            </li>

            <li>
              <a href="">Rutas</a>
            </li>

            <li>
              <a href="">Sedes</a>
            </li>
            <li>
              <a href="">Vehículos</a>
            </li>
          </ul>
        </section>
        <section className="sectionOptions">
          <ul className="p-2">
            <li>
              <a href="">
                <FontAwesomeIcon icon={faBullseye} className="icons" />
                Evaluación de riesgo
              </a>
            </li>
          </ul>
        </section>
        <section className="sectionOptions">
          <ul className="p-2">
            <li>
              <FontAwesomeIcon icon={faBullseye} className="icons" />
              Accidentalidad
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DirectAccess;
