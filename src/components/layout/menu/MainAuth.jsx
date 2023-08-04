import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import arrow from "/img/arrow.svg";
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
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./MainAuth.css";
import BreakCrumbs from "../../breakcrumbs/BreakCrumbs";
import { useLogOutUserMutation } from "../../../api/services/auth/apiSlice";

const MainAuth = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [openMenu, setOpenMenu] = useState();
  const [openList, setOpenList] = useState(true);
  const [verifiedStepPage, setVerifiedStepPage] = useState("");
  const [verifiedStepPagePlanification, setVerifiedStepPagePlanification] =
    useState(false);
  const [verifiedStepPageImplementation, setVerifiedStepPageImplementation] =
    useState(false);
  const [verifiedStepPageFollowup, setVerifiedStepPageFollowup] =
    useState(false);
  const [verifiedStepPageImprove, setVerifiedStepPageImprove] = useState(false);

  const [logOutUser] = useLogOutUserMutation();

  const handleClick = () => {
    setOpenList(!openList);
  };

  /*   const logoutSession = () => {
      navigate("/");
      setTimeout(() => {
        // dispatch(logOut(null));
      }, 500);
    }; */

    console.log(user)

  const logoutSession = async () => {
    try {
      await logOutUser();
      dispatch(logOut(null))
      // toast.success("Sesion cerrada correctamente");
      // navigate("/?logout=true");
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

  const handleNavigate = (page, validate = false) => {
    if (validate) {
      setCurrentPage(page);
      navigate(page);
    } else if (user.compania) {
      setCurrentPage(page);
      navigate(page);
    } else {
      setCurrentPage("/register-company");
      navigate("/register-company");
      toast.error(
        "Necesita registrar su empresa antes de poder navegar por la web"
      );
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    const step = currentPage.split("/");
    setVerifiedStepPage(step[1]);
  }, [currentPage]);
  useEffect(() => {
    const step = currentPage.split("/");
    if (
      step[2] === "1" ||
      step[2] === "2" ||
      step[2] === "3" ||
      step[2] === "4" ||
      step[2] === "5" ||
      step[2] === "6" ||
      step[2] === "7" ||
      step[2] === "8" ||
      currentPage === "/planificacion"
    ) {
      setVerifiedStepPagePlanification(true);
    } else {
      setVerifiedStepPagePlanification(false);
    }
  }, [currentPage]);
  useEffect(() => {
    const step = currentPage.split("/");
    if (
      step[2] === "9" ||
      step[2] === "10" ||
      step[2] === "11" ||
      step[2] === "12" ||
      step[2] === "13" ||
      step[2] === "14" ||
      step[2] === "15" ||
      step[2] === "16" ||
      step[2] === "17" ||
      step[2] === "18" ||
      step[2] === "19" ||
      currentPage === "/implementacion"
    ) {
      setVerifiedStepPageImplementation(true);
    } else {
      setVerifiedStepPageImplementation(false);
    }
  }, [currentPage]);
  useEffect(() => {
    const step = currentPage.split("/");
    if (
      step[2] === "20" ||
      step[2] === "21" ||
      step[2] === "22" ||
      currentPage === "/seguimiento"
    ) {
      setVerifiedStepPageFollowup(true);
    } else {
      setVerifiedStepPageFollowup(false);
    }
  }, [currentPage]);
  useEffect(() => {
    const step = currentPage.split("/");
    if (step[2] === "23" || step[2] === "24" || currentPage === "/mejora") {
      setVerifiedStepPageImprove(true);
    } else {
      setVerifiedStepPageImprove(false);
    }
  }, [currentPage]);

  useEffect(() => {
  }, [])
  

  return (
    <div className="min-h-screen flex w-full relative">
      <Toaster />
      <div
        className={`shadow-md relative menu-container h-screen overflow-y-auto overflow-x-hidden ${
          openMenu ? "menu-open" : "menu-close"
        }`}
      >
        <img
          className={`absolute right-16 top-44 cursor-pointer z-10 ${
            openMenu ? "block" : "hidden"
          } `}
          src={notification}
          alt=""
        />
        <img
          className={`absolute right-2  cursor-pointer z-20 ${
            openMenu ? "rotate-0 top-44 right-2" : "rotate-180 top-32 right-0"
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
        <div className=" text-sm pt-6 relative">
          <h3 className={`${openMenu ? "px-12" : "text-center"}`}>Menú</h3>
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
              className={`flex gap-2 ${
                (currentPage === "/planificacion" ||
                  currentPage === "/implementacion" ||
                  currentPage === "/seguimiento" ||
                  currentPage === "/mejora" ||
                  verifiedStepPage === "step") &&
                "active"
              }`}
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
                    onClick={() => {
                      handleNavigate("/planificacion");
                    }}
                    className={`flex gap-2 ${
                      (currentPage === "/planificacion" ||
                        verifiedStepPagePlanification) &&
                      "active"
                    }`}
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
                  {(currentPage === "/planificacion" ||
                    verifiedStepPagePlanification) && (
                    <Collapse in={true} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <ListItemButton
                            sx={{ pl: 10 }}
                            key={num}
                            onClick={() => handleNavigate(`/step/${num}`)}
                            className={`flex gap-2 ${
                              currentPage === `/step/${num}` && "active"
                            }`}
                          >
                            <ListItemText
                              primary={`> Paso ${num}`}
                              primaryTypographyProps={{
                                component: "span",
                                sx: {
                                  fontSize: "0.9rem",
                                },
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => handleNavigate("/implementacion")}
                    className={`flex gap-2 ${
                      (currentPage === "/implementacion" ||
                        verifiedStepPageImplementation) &&
                      "active"
                    }`}
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
                  {(currentPage === "/implementacion" ||
                    verifiedStepPageImplementation) && (
                    <Collapse in={true} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(
                          (num) => (
                            <ListItemButton
                              sx={{ pl: 10 }}
                              key={num}
                              onClick={() => handleNavigate(`/step/${num}`)}
                              className={`flex gap-2 ${
                                currentPage === `/step/${num}` && "active"
                              }`}
                            >
                              <ListItemText
                                primary={`> Paso ${num}`}
                                primaryTypographyProps={{
                                  component: "span",
                                  sx: {
                                    fontSize: "0.9rem",
                                  },
                                }}
                              />
                            </ListItemButton>
                          )
                        )}
                      </List>
                    </Collapse>
                  )}
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => handleNavigate("/seguimiento")}
                    className={`flex gap-2 ${
                      (currentPage === "/seguimiento" ||
                        verifiedStepPageFollowup) &&
                      "active"
                    }`}
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
                  {(currentPage === "/seguimiento" ||
                    verifiedStepPageFollowup) && (
                    <Collapse in={true} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {[20, 21, 22].map((num) => (
                          <ListItemButton
                            sx={{ pl: 10 }}
                            key={num}
                            onClick={() => handleNavigate(`/step/${num}`)}
                            className={`flex gap-2 ${
                              currentPage === `/step/${num}` && "active"
                            }`}
                          >
                            <ListItemText
                              primary={`> Paso ${num}`}
                              primaryTypographyProps={{
                                component: "span",
                                sx: {
                                  fontSize: "0.9rem",
                                },
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => handleNavigate("/mejora")}
                    className={`flex gap-2 ${
                      (currentPage === "/mejora" || verifiedStepPageImprove) &&
                      "active"
                    }`}
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
                  {(currentPage === "/mejora" || verifiedStepPageImprove) && (
                    <Collapse in={true} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {[23, 24].map((num) => (
                          <ListItemButton
                            sx={{ pl: 10 }}
                            key={num}
                            onClick={() => handleNavigate(`/step/${num}`)}
                            className={`flex gap-2 ${
                              currentPage === `/step/${num}` && "active"
                            }`}
                          >
                            <ListItemText
                              primary={`> Paso ${num}`}
                              primaryTypographyProps={{
                                component: "span",
                                sx: {
                                  fontSize: "0.9rem",
                                },
                              }}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  )}
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
            {user.permissions.length === 0 && (
              <ListItemButton
                onClick={() => handleNavigate("/informes")}
                className={`flex gap-2 ${
                  currentPage === "/informes" && "active"
                }`}
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
            )}

            <ListItemButton
              onClick={() => handleNavigate("/calendar")}
              className={`flex gap-2 ${
                currentPage === "/calendar" && "active"
              }`}
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
            {user.permissions.length === 0 && (
              <ListItemButton
                onClick={() => handleNavigate("/users")}
                className={`flex gap-2 ${currentPage === "/users" && "active"}`}
                sx={{ justifyContent: "center" }}
              >
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                {openMenu && (
                  <ListItemText
                    primary="Usuarios"
                    primaryTypographyProps={{
                      component: "span",
                      sx: {
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                )}
              </ListItemButton>
            )}
          </List>
          <div className={`${openMenu ? "px-4" : "px-2"} text-white pb-4`}>
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
            {currentPage !== "/guide" &&
              currentPage !== "/register-company" && (
                <BreakCrumbs handleNavigate={handleNavigate} />
              )}

            <Outlet context={{ handleNavigate }} />
          </div>
          <div className="flex-shrink-0">
            <div className="sticky top-0 bottom-0">
              <LateralRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAuth;
