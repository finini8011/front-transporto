import React, { useState, useEffect } from "react";
import "./header.css";

import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../api/features/auth/authSlice";
import expandir from "/img/expandir.png";
import empresa from "/img/empresa.png";
import guia from "/img/guia.png";
import modulo from "/img/modulo.png";
import herramientas from "/img/herramientas.png";
import buscar from "/img/buscar.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
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

  console.log(user);

  return (
    <React.Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-white py-3 shadow-md px-20 z-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">
            {user.compania?.razon_social
              ? user.compania.razon_social
              : "Texto por definir"}
            - {user.name}{" "}
          </h3>
          <p className="text-sm color-fifth">{date} </p>
        </div>

        <ul className="flex flex-row gap-4 color-fifth items-center">
          <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
            <img className="" src={buscar} alt="Expandir" />
            <p>Buscar</p>
          </li>
          <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
            <button
              className="mt-1 "
              onClick={() =>
                handleNavigate(
                  user.compania ? "update-company" : "/register-company"
                )
              }
            >
              <img className="m-auto" src={empresa} alt="Expandir" />
              <p>Empresa</p>
            </button>
          </li>
          <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
            <img className="" src={guia} alt="Expandir" />
            <p className="leading-none">Guía Rápida</p>
            {/* <p className="leading-none"></p> */}
          </li>
          <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
            <img className="" src={modulo} alt="Expandir" />
            <p>Módulos</p>
          </li>
          <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
            <img className="" src={herramientas} alt="Expandir" />
            <p>Herramientas</p>
          </li>
          <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
            <img className="" src={expandir} alt="Expandir" />
            <p>Expandir</p>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
