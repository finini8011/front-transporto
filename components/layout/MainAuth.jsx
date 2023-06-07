import { useState, useEffect } from "react";
// import logo from "../../public/img/mrio.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink  } from "react-router-dom";
import {
  selectCurrentUser,
  logOut,
} from "../../src/api/features/auth/authSlice";
import Header from "../commons/header/header";

const MainAuth = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    console.log(user)
    router.replace('/');
    return null;
  }

  const logoutSession = () => {
    navigate("/");
    setTimeout(() => {
      dispatch(logOut(null));
    },500)

  };

  return (
    <div className="min-h-screen flex bg-blue-700">
      <div className="h-screen bg-blue-700 w-80 relative">
        <div className="h-full w-80 flex flex-col items-center fixed">
          <div className="relative w-1/2 py-24">
            {/* <Image alt="logo" src={logo} placeholder="empty" /> */}
          </div>
          <ul className="w-full text-white uppercase font-semibold cursor-pointer">
            <NavLink to="/modulo" passHref>
              <li className="text-xl hover:bg-blue-600 py-5 px-10">
                Inicio
              </li>
            </NavLink>
            {/* <NavLink to="/admin/services" passHref>
              <li className="text-xl hover:bg-blue-600 py-5 px-10">
                servicios
              </li>
            </NavLink>
            <NavLink to="/admin/addPage" passHref>
              <li className="text-xl hover:bg-blue-600 py-5 px-10">
                agregar nueva página
              </li>
            </NavLink> */}
            {/* <NavLink to={`/presentation/${user.id}`} passHref target="_blank">
              <li className="text-xl hover:bg-blue-600 py-5 px-10">vista</li>
            </NavLink> */}
          </ul>
          <div
            className="py-5 px-10 hover:bg-blue-600 text-xl absolute bottom-0 text-white w-full font-semibold cursor-pointer"
            onClick={logoutSession}
          >
            Cerrar Sesión
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-full text-white bg-gray-800 flex flex-col overflow-auto">
       
        {children}
      </div>
    </div>
  );
};

export default MainAuth;
