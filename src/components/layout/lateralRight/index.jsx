import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { esES } from "@mui/x-date-pickers/locales";

import arrow from "/img/arrow.png";
import face from "/img/face.png";
import teach from "/img/teach.png";
import document from "/img/document.png";
import book from "/img/book.png";
import "./lateralRight.css";

const LateralRight = () => {
  const [openMenu, setOpenMenu] = useState();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section
      className={` mr-6 mt-6 transition-section  relative ${
        openMenu ? "w-80" : "w-24"
      }`}
    >
      <img
        className={`absolute -left-5 top-[5.5rem] cursor-pointer z-10 ${
          openMenu ? "rotate-180" : "rotate-0"
        } `}
        src={arrow}
        alt=""
        onClick={handleOpenMenu}
      />
      <div className="bg-white border-third border rounded-md p-4 flex flex-col gap-2 overflow-hidden">
        {openMenu && (
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={
              esES.components.MuiLocalizationProvider.defaultProps.localeText
            }
          >
            <DateCalendar sx={{ width: "210px" }} />
          </LocalizationProvider>
        )}

        <div className="bg-sixth rounded-md p-2 flex items-center gap-2">
          <img src={face} alt="" />
          {openMenu && (
            <div>
              <p className="color-fourth">Ayuda</p>
              <p className="text-xs">Consulte la ayuda</p>
            </div>
          )}
        </div>
        <div className="bg-sixth rounded-md p-2 flex items-center gap-2">
          <img src={teach} alt="" />
          {openMenu && (
            <div>
              <p className="color-fourth">Capacitación</p>
              <p className="text-xs">Lecciones de capacitación</p>
            </div>
          )}
        </div>
        <div className="bg-sixth rounded-md p-2 flex items-center gap-2">
          <img src={book} alt="" />
          {openMenu && (
            <div className="">
              <p className="color-fourth">Manual</p>
              <p className="text-xs">Guía de todos los módulos</p>
            </div>
          )}
        </div>
        <div className="bg-sixth rounded-md p-2 flex items-center gap-2">
          <img src={document} alt="" />
          {openMenu && (
            <div>
              <p className="color-fourth">Documentación</p>
              <p className="text-xs">Normas vigentes</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LateralRight;
