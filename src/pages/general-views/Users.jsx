import React, { useState } from "react";
import TableUsers from "../../components/tables/TableUsers";
import ButtonPlus from "../../components/commons/button/ButtonPlus";
import Modal from "react-modal";

import NewUser from "../../components/modal/NewUser";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
  },
  overlay: { zIndex: 50 },
};

Modal.setAppElement("#root");

const Users = () => {
  const [stateModal, setStateModal] = useState(false);

  function openModal() {
    setStateModal(true);
  }

  function closeModal() {
    setStateModal(false);
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end">
        <ButtonPlus text="Crear usuario" onClick={openModal} />
      </div>
      <TableUsers />
      <Modal
        isOpen={stateModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <NewUser closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Users;
