import React from "react";
import { useState, useEffect } from "react";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import {
  selectCurrentUser
} from "../../../api/features/auth/authSlice";
import Header from "../header/header";
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
        <div className="menu">
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
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
          component="nav"
          aria-labelledby="nested-list-subheader">
           <ListItemButton onClick={() => navigate("/modulo")}>
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Fases pve" />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/preparacion")}>
                <ListItemText primary="Preparacion" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/planificacion")}>
                <ListItemText primary="Planificacion" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/implementacion")}>
                <ListItemText primary="Implementacion" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/seguimiento")}>
                <ListItemText primary="Seguimiento" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/mejora")}>
                <ListItemText primary="Mejora" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={() => navigate("/informes")}>
            <ListItemText primary="Informes" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/calendario")}>
            <ListItemText primary="Calendario" />
          </ListItemButton>
        </List>
      </div>
      <div className="flex-1 min-h-full text-white bg-gray-800 flex flex-col overflow-auto">
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
