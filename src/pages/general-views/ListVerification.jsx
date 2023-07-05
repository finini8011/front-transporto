import React, { useEffect, useState } from "react";
import TableCheckList from "../../components/tables/TableCheckList";
import TablePesv from "../../components/tables/TablePesv";
import ButtonPrimary from "../../components/commons/button/ButtonPrimary";


const ListVerification = () => {

  const functionPrint = () => {
    print();
  };


  return (
    <div className="p-20 bg-white items-center justify-center ">
      <div><TableCheckList /></div>
      <TablePesv />
      <ButtonPrimary text="Generar pdf" onClick={() => functionPrint()} />
    </div>

  );
};

export default ListVerification;