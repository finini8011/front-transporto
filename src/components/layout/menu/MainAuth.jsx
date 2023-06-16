import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../../api/features/auth/authSlice";
import Header from "../header/header";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faBuilding,
  faCalendar,
  faCheckSquare,
  faCogs,
  faEye,
  faFile,
  faGrip,
  faLocationPin,
  faLock,
  faUserCircle,
  faVoteYea,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
import "./MainAuth.css";

const MainAuth = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState();
  const [openList, setOpenList] = React.useState(true);


  const handleClick = () => {
    setOpenList(!openList);
  };
  const logoutSession = () => {
    navigate("/");
    setTimeout(() => {
      dispatch(logOut(null));
    }, 500)
  };

  useEffect(() => {
    if (!user) {
      console.log(user)
      navigate("/");
    }
  }, []
  );

  return (
    <div className="min-h-screen flex">
      <div className={`menu-container ${openMenu ? "menu-open" : "menu-close"}`}
        onMouseLeave={() => setOpenMenu(!openMenu)}>
        <div className="menu-info-container">
          <div className="flex p-2 items-center">
            <FontAwesomeIcon icon={faUserCircle} className="mr-3 w-7 h-7" />
            {openMenu &&
              <h2 className="text-xl">
                Transporto
              </h2>}
          </div>
          <div className="divider"></div>
          <div className="flex py-4 p-2 items-center">
            <FontAwesomeIcon icon={faUserCircle} className="mr-3 w-7 h-7" />
            {openMenu &&
              <span className="text-lg">
                {user.name}
              </span>}
          </div>
          <div className="divider mb-2"></div>
        </div>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
          component="nav"
          aria-labelledby="nested-list-subheader">
          <ListItemButton
            onClick={() => navigate("/home")}
            >
            <FontAwesomeIcon icon={faLocationPin} className="mr-3 w-5 h-5" />
            {openMenu && <ListItemText primary="Inicio" />}
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <FontAwesomeIcon icon={faGrip} className="mr-3 w-5 h-5" />
            {openMenu && <ListItemText primary="Fases pve" />}
            {!openMenu ? "" :
              openList ? <ExpandLess /> : <ExpandMore />
            }
          </ListItemButton>
          {openMenu &&
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/register-company")}>
                  <FontAwesomeIcon icon={faPenToSquare} className="mr-3 w-5 h-5" />
                  <ListItemText primary="Registrar Empresa" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/preparacion")}>
                  <FontAwesomeIcon icon={faBuilding} className="mr-3 w-5 h-5" />
                  <ListItemText primary="Preparación" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/planificacion")}>
                  <FontAwesomeIcon icon={faVoteYea} className="mr-3 w-5 h-5" />
                  <ListItemText primary="Planificación" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/implementacion")}>
                  <FontAwesomeIcon icon={faCogs} className="mr-3 w-5 h-5" />
                  <ListItemText primary="Implementación" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/seguimiento")}>
                  <FontAwesomeIcon icon={faEye} className="mr-3 w-5 h-5" />
                  <ListItemText primary="Seguimiento" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/mejora")}>
                  <FontAwesomeIcon icon={faCheckSquare} className="mr-3 w-5 h-5" />
                  <ListItemText primary="Mejora" />
                </ListItemButton>
              </List>
            </Collapse>}
          <ListItemButton onClick={() => navigate("/informes")}>
            <FontAwesomeIcon icon={faFile} className="mr-3 w-5 h-5" />
            {openMenu && <ListItemText primary="Informes" />}
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/calendario")}>
            <FontAwesomeIcon icon={faCalendar} className="mr-3 w-5 h-5" />
            {openMenu && <ListItemText primary="Calendario" />}
          </ListItemButton>
        </List>
        <div className="button-logout">
          <FontAwesomeIcon icon={faLock} className="ml-3 w-5 h-5" />
          <button className="p-2"
            onClick={logoutSession}>
            {openMenu && <p>Cerrar Sesión</p>}
          </button>
        </div>
      </div>
      <div className="flex-1 h-screen bg-slate-200 flex flex-col overflow-auto">
        <Header
          openMenu={openMenu}
          setOpenMenu={setOpenMenu} />
        <div className="m-6">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default MainAuth;
