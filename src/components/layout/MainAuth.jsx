import { useState, useEffect } from "react";
// import logo from "../../public/img/mrio.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink, Link, Router } from "react-router-dom";
import {
  selectCurrentUser,
  logOut,
} from "../../api/features/auth/authSlice";
import Header from "./header/header";

const MainAuth = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(window.location.href, "ruta")



  useEffect(() => {
    if (!user) {
      console.log(user)
      navigate("/");
    }
  }, []
  );

  const logoutSession = () => {
    navigate("/");
    setTimeout(() => {
      dispatch(logOut(null));
    }, 500)

  };

  return (
    <div className="min-h-screen flex bg-blue-700">
      <div className="h-screen bg-blue-700 w-80 relative">
        <div className="h-full w-80 flex flex-col items-center fixed">
          <div className="relative w-1/2 py-24">
            <img
              alt="logo"
              src="http://lorempixel.com/300/300"
            />
            <img
              alt="user"
              src="http://lorempixel.com/300/300"
            />
            <p>nombre usuario</p>
          </div>
          <ul className="list-menu">
            <li className="item-list-menu">
              <NavLink to="/modulo" >
                Inicio
              </NavLink>
            </li>
            <li className="item-list-menu">
               <p>Fases</p>
               <ul>
                <li>
                <NavLink to="/1" >
                1
              </NavLink>
                </li>
               </ul>
            </li>
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
        <Header />
        <div className="m-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainAuth;
