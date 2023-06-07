import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faPencil,
  faGrip,
  faRectangleXmark,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import InfoCumplimiento from "../../commons/InfoCumplimiento/InfoCumplimiento";
import DirectAccess from "../../commons/DirectAccess/DirectAccess";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAccessOpen, setIsModalAccessOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalAccess = () => {
    setIsModalAccessOpen(true);
  };

  const closeModalAccess = () => {
    setIsModalAccessOpen(false);
  };
  return (
    <React.Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-white p-5">
        <ul className="flex flex-row">
          <li>
            <a className="p-2" data-widget="pushmenu" href="#" role="button">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </a>
          </li>

          <li>
            <a
              className="p-2 ml-4"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              Cerrar Sesión
            </a>
          </li>
        </ul>

        <ul className="flex flex-row">
          <li>
            <button className="p-2">
              <FontAwesomeIcon icon={faPencil} />
            </button>
          </li>

          <li>
            <button className="p-2 ml-4" onClick={openModalAccess}>
            <FontAwesomeIcon icon={faShareFromSquare} />
            </button>
          </li>

          <li>
            <button className="p-2 ml-4" onClick={openModal}>
              <FontAwesomeIcon icon={faGrip} />
            </button>
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
        <InfoCumplimiento />
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
