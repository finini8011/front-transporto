import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPencil,
  faGrip,
  faRectangleXmark,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
import InfoCompliance from "../../commons/InfoCompliance/InfoCompliance";
import DirectAccess from "../../commons/DirectAccess/DirectAccess";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../api/features/auth/authSlice";
import expandir from "/img/expandir.png";
import empresa from "/img/empresa.png";
import guia from "/img/guia.png";
import modulo from "/img/modulo.png";
import herramientas from "/img/herramientas.png";
import buscar from "/img/buscar.png";

const Header = ({ openMenu, setOpenMenu }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAccessOpen, setIsModalAccessOpen] = useState(false);
  const user = useSelector(selectCurrentUser);
 console.log("datos", user)


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalAccess = () => {
    setIsModalAccessOpen(false);
  };
  return (
    <React.Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-white py-3 shadow-md px-20">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">ABC Transportes - {user.name} </h3>
          <p className="text-sm color-fifth">Lun, 1 Ene 2023</p>
        </div>

        <ul className="flex flex-row gap-4 color-fifth items-center">
          <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
            <img className="" src={buscar} alt="Expandir" />
            <p>Buscar</p>
          </li>
          <li className=" flex flex-col items-center text-xs gap-1 cursor-pointer">
            <button className="mt-1 "  onClick={() =>  navigate("/register-company")}>
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal} className="modal-close">
          <FontAwesomeIcon icon={faRectangleXmark} />
        </button>
        <InfoCompliance />
      </Modal>

      <Modal
        isOpen={isModalAccessOpen}
        onRequestClose={closeModalAccess}
        className="ModalAccess"
        overlayClassName="Overlay"
      >
        <DirectAccess />
      </Modal>
    </React.Fragment>
  );
};

export default Header;
