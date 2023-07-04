import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  selectCurrentUser,
  logOut,
} from "../../../api/features/auth/authSlice";
import Header from "../header/header";
import toast, { Toaster } from "react-hot-toast";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/img/logo.png";
import abc from "/img/abc.png";
import transporto from "/img/transporto.png";
import arrow from "/img/arrow.png";
import notification from "/img/notification.png";
import LateralRight from "../lateralRight";

import {
  faBuilding,
  faCalendarDays,
  faCheckSquare,
  faCogs,
  faEye,
  faFile,
  faGrip,
  faHouse,
  faArrowUpRightFromSquare,
  faPenToSquare,
  faVoteYea,
} from "@fortawesome/free-solid-svg-icons";
import "./MainAuth.css";
import BreakCrumbs from "../../breakcrumbs/BreakCrumbs";

const MainAuth = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [openMenu, setOpenMenu] = useState();
  const [openList, setOpenList] = useState(true);

  const handleClick = () => {
    setOpenList(!openList);
  };

  const logoutSession = () => {
    navigate("/");
    setTimeout(() => {
      dispatch(logOut(null));
    }, 500);
  };

  const handleNavigate = (page) => {
    if (user.compania) {
      setCurrentPage(page);
      navigate(page);
    } else {
      setCurrentPage("/register-company");
      navigate("/register-company");
      toast.error("Necesita registrar su empresa antes de poder navegar por la web");
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (!user) {
      console.log(user);
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex w-full">
       <Toaster />
      <div
        className={`shadow-md relative menu-container ${
          openMenu ? "menu-open" : "menu-close"
        }`}
        // onMouseLeave={() => setOpenMenu(!openMenu)}
      >
        <img
          className={`absolute right-12 top-44 cursor-pointer z-10 ${
            openMenu ? "block" : "hidden"
          } `}
          src={notification}
          alt=""
          // onClick={handleOpenMenu}
        />
        <img
          className={`absolute -right-5 top-48 cursor-pointer z-10 ${
            openMenu ? "rotate-0" : "rotate-180"
          } `}
          src={arrow}
          alt=""
          onClick={handleOpenMenu}
        />
        <div
          className={`flex items-center justify-center flex-col gap-2  border-third border-b ${
            openMenu ? "py-2 px-4" : "p-2"
          }`}
        >
          <img src={openMenu ? logo : transporto} alt="logo" />
          {openMenu && (
            <p className="capitalize color-primary text-xs">
              plan estratégico de seguridad vial
            </p>
          )}
          {/* <div className="divider" /> */}
        </div>
        <div
          className={` border-third border-b ${openMenu ? "py-2 px-4" : "p-2"}`}
        >
          <div className="flex justify-center items-center gap-2">
            <img src={abc} alt="logo" />
            {openMenu && (
              <h2 className="text-base text-neutral-500">ABC Transportes</h2>
            )}
          </div>
        </div>
        <div className=" text-sm pt-6 overflow-y-auto flex-1 relative">
          <h3 className={`${openMenu ? "px-12" : "text-center"}`}>Menu</h3>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => handleNavigate("/home")}
              className={`flex gap-2 ${currentPage === "/home" && "active"}`}
              sx={{ justifyContent: "center" }}
            >
              <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />
              {openMenu && (
                <ListItemText
                  primary="Inicio"
                  primaryTypographyProps={{
                    component: "span",
                    sx: {
                      fontSize: "0.9rem",
                    },
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton
              onClick={handleClick}
              className="flex gap-2"
              sx={{ justifyContent: "center" }}
            >
              <FontAwesomeIcon icon={faGrip} className="w-5 h-5" />
              {openMenu && (
                <ListItemText
                  primary="Fases PESV"
                  primaryTypographyProps={{
                    component: "span",
                    sx: {
                      fontSize: "0.9rem",
                    },
                  }}
                />
              )}
              {!openMenu ? "" : openList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {openMenu && (
              <Collapse in={openList} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => handleNavigate("/planificacion")}
                    className={`flex gap-2 ${currentPage === "/planificacion" && "active"}`}
                  >
                    <FontAwesomeIcon icon={faVoteYea} className="w-5 h-5" />
                    <ListItemText
                      primary="Planificación"
                      primaryTypographyProps={{
                        component: "span",
                        sx: {
                          fontSize: "0.9rem",
                        },
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => handleNavigate("/implementacion")}
                    className={`flex gap-2 ${currentPage === "/implementacion" && "active"}`}
                  >
                    <FontAwesomeIcon icon={faCogs} className="w-5 h-5" />
                    <ListItemText
                      primary="Implementación"
                      primaryTypographyProps={{
                        component: "span",
                        sx: {
                          fontSize: "0.9rem",
                        },
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => handleNavigate("/seguimiento")}
                    className={`flex gap-2 ${currentPage === "/seguimiento" && "active"}`}
                  >
                    <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
                    <ListItemText
                      primary="Seguimiento"
                      primaryTypographyProps={{
                        component: "span",
                        sx: {
                          fontSize: "0.9rem",
                        },
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => handleNavigate("/mejora")}
                    className={`flex gap-2 ${currentPage === "/mejora" && "active"}`}
                  >
                    <FontAwesomeIcon icon={faCheckSquare} className="w-5 h-5" />
                    <ListItemText
                      primary="Mejora"
                      primaryTypographyProps={{
                        component: "span",
                        sx: {
                          fontSize: "0.9rem",
                        },
                      }}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            )}
            <ListItemButton
              className={`flex gap-2 ${
                currentPage === "/list-verification" && "active"
              }`}
              sx={{ justifyContent: "center" }}
              onClick={() => handleNavigate("/list-verification")}
            >
              <FontAwesomeIcon icon={faPenToSquare} className="w-5 h-5" />
              {openMenu && (
                <ListItemText
                  primary="Lista de Chequeo"
                  primaryTypographyProps={{
                    component: "span",
                    sx: {
                      fontSize: "0.9rem",
                    },
                  }}
                />
              )}
            </ListItemButton>

            <ListItemButton
              onClick={() => handleNavigate("/informes")}
              className={`flex gap-2 ${currentPage === "/informes" && "active"}`}
              sx={{ justifyContent: "center" }}
            >
              <FontAwesomeIcon icon={faFile} className="w-5 h-5" />
              {openMenu && (
                <ListItemText
                  primary="Informes"
                  primaryTypographyProps={{
                    component: "span",
                    sx: {
                      fontSize: "0.9rem",
                    },
                  }}
                />
              )}
            </ListItemButton>
            <ListItemButton
              onClick={() => handleNavigate("/calendario")}
              className={`flex gap-2 ${currentPage === "/calendario" && "active"}`}
              sx={{ justifyContent: "center" }}
            >
              <FontAwesomeIcon icon={faCalendarDays} className="w-5 h-5" />
              {openMenu && (
                <ListItemText
                  primary="Calendario"
                  primaryTypographyProps={{
                    component: "span",
                    sx: {
                      fontSize: "0.9rem",
                    },
                  }}
                />
              )}
            </ListItemButton>
          </List>
          <div className={`${openMenu ? "px-4" : "px-2"} text-white `}>
            <div
              className={`bg-fourth rounded-lg flex gap-2 py-2 justify-center overflow-hidden ${
                openMenu ? "px-4" : ""
              }`}
              onClick={logoutSession}
              role="button"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className=" w-5 h-5"
              />

              {openMenu && <p>Cerrar Sesión</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-screen bg-white flex flex-col overflow-auto">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex bg-white   ">
          <div className="p-6 min-w-[80%] flex-1">
            <Outlet context={{handleNavigate}} />
          </div>
          <LateralRight />
        </div>
      </div>
    </div>
  );
};

export default MainAuth;
