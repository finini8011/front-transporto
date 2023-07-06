import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import TableCheckList from "../../components/tables/TableCheckList";
import TablePesv from "../../components/tables/TablePesv";
import ButtonPrimary from "../../components/commons/button/ButtonPrimary";


const ListVerification = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const local = location.pathname
  console.log(local, "locac")

  const functionPrint = () => {
    print();
  };


  return (
    <div className={local === "/list-verification" ? "p-10 bg-white items-center justify-center" :
      "bg-white w-4/5 m-auto  block items-center justify-center p-10"}>
      <div className="mb-5"><TableCheckList /></div>
      <TablePesv />
      {local === "/list-verification" ?
        <ButtonPrimary text="Reporte" onClick={() => navigate("/report-list")} /> :
        <div className="flex ">
          <div className="mr-4">
            <ButtonPrimary text="Atras" onClick={() => navigate("/list-verification")} />
          </div>
          <ButtonPrimary text="Guardar pdf" onClick={() => functionPrint()} />
        </div>
      }
    </div>

  );
};

export default ListVerification;