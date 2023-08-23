import React, { useState} from "react";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetUsersQuery } from "../../api/services/auth/apiSlice";
import Modal from "react-modal";
import EditUser from "../modal/EditUser";

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

const TableUsers = () => {
  const { data: dataUsers, isLoading: isLoadingUsers } = useGetUsersQuery();
  const [stateModal, setStateModal] = useState(false);
  const [stateUserIdActually, setStateUserIdActually] = useState(null);

  function openModal(userId) {
    setStateModal(true);
    setStateUserIdActually(userId)
  }

  function closeModal() {
    setStateModal(false);
  }


  if (!isLoadingUsers)
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((data, key) => {
              return (
                <tr className="bg-white border-b  hover:bg-gray-50 " key={key}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {data.name}
                  </th>
                  <td className="px-6 py-4">{data.email} </td>
                  <td className="px-6 py-4 flex justify-center gap-4">
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="w-5 h-5 cursor-pointer"
                      onClick={()=>openModal(data.id)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal
          isOpen={stateModal}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <EditUser closeModal={closeModal} userId={stateUserIdActually} />
        </Modal>
      </div>
    );
  else return <p>Cargando..</p>;
};

export default TableUsers;
