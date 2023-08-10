import React, { useState } from 'react';
import FileInput from '../../../../components/commons/input/file/FileInput';
import TableFlexCsv from '../../../../components/tables/TableFlexCsv';
import "./SubSteps5.css";

const SubStep511 = () => {

  const [listData, setListData]= useState([]);


  return (
    <div className='p-5'>
      <section className='pb-10'>
        <FileInput />
        <button className='button-save'>
          Guardar
        </button>
      </section>
      <TableFlexCsv datos={listData} />
    </div>
  );
};

export default SubStep511;