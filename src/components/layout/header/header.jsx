import React, { useState, useEffect } from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../api/features/auth/authSlice";
import expandir from "/img/expandir.png";
import guia from "/img/guia.png";
import modulo from "/img/modulo.png";
import herramientas from "/img/herramientas.png";
import buscar from "/img/buscar.png";
import Empresa from "../../imgComponents/Empresa";
import Guide from "../../imgComponents/Guide";

const Header = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [date, setDate] = useState("");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    navigate(page);
    // Aquí puedes realizar la navegación a la página correspondiente
  };

  useEffect(() => {
    const date = new Date();
    setDate(
      new Intl.DateTimeFormat("es", {
        dateStyle: "full",
      }).format(date)
    );
  }, []);

  return (
    <React.Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-white  shadow-md px-9 py-2 z-10">
        <div className="flex flex-col leading-4">
          <h3 className="text-base uppercase">
            {user.compania?.razon_social
              ? user.compania.razon_social
              : "Empresa sin registrar"}{" "}
            - {user.name}{" "}
          </h3>
          <p className="text-xs color-fifth">{date} </p>
        </div>
        <>
          <ul className="flex flex-row gap-4 color-fifth items-center">
            <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
              <img className="w-4 h-4" src={buscar} alt="Expandir" />
              <p className="text-img">Buscar</p>
            </li>
            {user.permissions.length === 0 && (
              <li
                className=" flex flex-col items-center text-xs gap-1 cursor-pointer"
                onClick={() =>
                  handleNavigate(
                    user.compania ? "/update-company" : "/register-company"
                  )
                }
                role="button"
              >
                <Empresa
                  color={`${currentPage === "/register-company" ||
                    currentPage === "/update-company"
                    ? "#0090FF"
                    : "#c2c7d0"
                    }`}
                />
                <p
                  className={`${currentPage === "/register-company" ||
                    currentPage === "/update-company"
                    ? "color-fourth text-img"
                    : "color-fifth text-img"
                    }`}
                >
                  Empresa
                </p>
              </li>
            )}

            <li
              className=" flex flex-col items-center text-xs gap-1 cursor-pointer"
              onClick={() => handleNavigate("/guide")}
            >
              <Guide
                color={`${currentPage === "/guide" ? "#0090FF" : "#c2c7d0"}`}
              />
              <p
                className={`${currentPage === "/guide" ? "color-fourth text-img" : "color-fifth text-img"
                  }`}
              >
                Guía Rápida
                
              </p>
              {/* <p className="leading-none"></p> */}
            </li>
            <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
              <img className="w-4 h-4" src={modulo} alt="Expandir" />
              <p className="text-img">Módulos</p>
            </li>
            <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
              <img className="w-4 h-4" src={herramientas} alt="Expandir" />
              <p className="text-img">Herramientas</p>
            </li>
            <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
              <img className="w-4 h-4" src={expandir} alt="Expandir" />
              <p className="text-img">Expandir</p>
            </li>
          </ul>
        </>
      </nav>
    </React.Fragment>
  );
};

export default Header;
