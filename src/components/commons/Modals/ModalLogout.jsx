import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import toast, { Toaster } from "react-hot-toast";
import {  useDispatch } from "react-redux";
import { logOut } from '../../../api/features/auth/authSlice';
import { useLogOutUserMutation } from '../../../api/services/auth/apiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalLogout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [logOutUser] = useLogOutUserMutation();
  const dispatch = useDispatch();

  const handleClose = () => { setModalIsOpen(false) };

  const handleUserActivity = () => {
    setModalIsOpen(true);
  };

  useEffect(() => {
    // Establece un temporizador para mostrar el modal después de un tiempo determinado (por ejemplo, 5 minutos)
    const timeout = setTimeout(() => {
      handleUserActivity();
    }, 1800000); // 30 minutos en milisegundo 

    // Limpia el temporizador cuando el componente se desmonta o cuando se muestra el modal
    return () => clearTimeout(timeout);
  }, []);

  const logoutSession = async () => {
    try {
      await logOutUser();
      dispatch(logOut(null))
      toast.success("Sesión cerrada correctamente");
      setModalIsOpen(false);
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        shouldCloseOnOverlayClick={false} // Bloquea el clic fuera del modal
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Establece el color de fondo del overlay
          },
          content: {
            width: '400px', // Establece el ancho del contenido del modal
            height: '200px', // Establece la altura del contenido del modal
            margin: 'auto', // Centra el modal horizontalmente
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white', // Establece el color de fondo del contenido del modal
          },

        }}
      >
          <p className='mb-5'>Tu sesión ha expirado debido a la inactividad</p>
          <button
            className='button-save ml-6'
            onClick={logoutSession}>
            OK
          </button>
      </Modal>
    </div>
  );
};

export default ModalLogout;