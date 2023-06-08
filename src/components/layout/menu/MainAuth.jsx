import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../../api/features/auth/authSlice";
import Header from "../header/header";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faGrip,
} from "@fortawesome/free-solid-svg-icons";
import "./MainAuth.css";

const MainAuth = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState();
  const [openList, setOpenList] = React.useState(true);

  console.log(window.location.href, "ruta")

  const handleClick = () => {
    setOpenList(!openList);
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
      <div className="menu-container">
        <div className="menu-info-container">
          <div className="flex p-2 items-center">
          <img
                className="mr-2"
                src={faGrip}
                alt="x"
              />
            <h2 className="text-xl">
              Transporto
            </h2>
          </div>
          <div className="divider"></div>
          <div className="flex py-3 p-2 items-center">
          <img
                className="mr-2"
                src={faGrip}
                alt="x"
              />
            <span className="text-lg">
              {user.name}
            </span>
          </div>
          <div className="divider mb-2"></div>
        </div>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
          component="nav"
          aria-labelledby="nested-list-subheader">
          <ListItemButton onClick={() => navigate("/modulo")}>
            <FontAwesomeIcon icon={faGrip} className="mr-3" />
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <FontAwesomeIcon icon={faGrip} className="mr-3" />
            <ListItemText primary="Fases pve" />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/preparacion")}>
                <FontAwesomeIcon icon={faGrip} className="mr-3" />
                <ListItemText primary="Preparacion" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/planificacion")}>
                <FontAwesomeIcon icon={faGrip} className="mr-3" />
                <ListItemText primary="Planificacion" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/implementacion")}>
                <FontAwesomeIcon icon={faGrip} className="mr-3" />
                <ListItemText primary="Implementacion" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/seguimiento")}>
                <FontAwesomeIcon icon={faGrip} className="mr-3" />
                <ListItemText primary="Seguimiento" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/mejora")}>
                <FontAwesomeIcon icon={faGrip} className="mr-3" />
                <ListItemText primary="Mejora" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={() => navigate("/informes")}>
            <FontAwesomeIcon icon={faGrip} className="mr-3" />
            <ListItemText primary="Informes" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/calendario")}>
            <FontAwesomeIcon icon={faGrip} className="mr-3" />
            <ListItemText primary="Calendario" />
          </ListItemButton>
        </List>
      </div>
      <div className="flex-1 min-h-full text-white bg-blue-800 flex flex-col overflow-auto">
        <Header
          openMenu={openMenu}
          setOpenMenu={setOpenMenu} />
        <div className="m-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainAuth;
