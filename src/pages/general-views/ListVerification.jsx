import React, { useEffect, useState } from "react";
import TableCheckList from "../../components/tables/TableCheckList";
import TablePesv from "../../components/tables/TablePesv";
import ButtonPrimary from "../../components/commons/button/ButtonPrimary";
import GraficColumns from "../../../grafic/GraficColumns";
import GraficLine from "../../../grafic/GraficLine";


const ListVerification = () => {

  const functionPrint = () => {
    print();
  };


  return (
    <div className="p-20 bg-white items-center justify-center ">
      <div><TableCheckList /></div>
      <TablePesv />
      <div className="mb-10 m-auto block"><GraficColumns /></div>
      <div className="mb-10 m-auto block"><GraficLine /></div>
      <ButtonPrimary text="Generar pdf" onClick={() => functionPrint()} />
    </div>

  );
};

export default ListVerification;