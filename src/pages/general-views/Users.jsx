import React, { useState } from "react";
import TableUsers from "../../components/tables/TableUsers";
import ButtonPlus from "../../components/commons/button/ButtonPlus";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import InputRHF from "../../components/commons/input/text/InputRHF";
import ButtonPrimary from "../../components/commons/button/ButtonPrimary";

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
  const { register, handleSubmit, watch, setValue } = useForm();

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
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="font-semibold text-lg">Crear usuario</p>
          </div>
          <FontAwesomeIcon
            icon={faX}
            className="w-5 h-5 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <InputRHF
            type="text"
            label="Usuario"
            placeholder="Ingrese Usuario"
            {...register("nit")}
          />
          <InputRHF
            type="password"
            label="Email"
            placeholder="Ingresar Email"
            {...register("nit")}
          />
          <InputRHF
            type="password"
            label="Contraseña"
            placeholder="Ingrese Contraseña"
            {...register("nit")}
          />
          <InputRHF
            type="password"
            label="Confirmar Contraseña"
            placeholder="Confirmar Contraseña"
            {...register("nit")}
          />
          <div className="">
            <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 flex items-center">
              ¿Este usuario será administrador?
              <input
                type="checkbox"
                value={false}
                name="check"
                //   {...register("misionalidad")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ml-2"
              />
            </label>
          </div>
        </div>
        <ButtonPrimary text="Guardar" onClick={closeModal} />
      </Modal>
    </div>
  );
};

export default Users;
