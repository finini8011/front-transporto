import React from 'react';
import FileInput from '../../../../components/commons/input/file/FileInput';
import TableFlexCsv from '../../../../components/tables/TableFlexCsv';
import "./SubSteps5.css";

const SubStep511 = () => {

  const datosCSV = [
    {
      id: 0,
      users_id: 3,
      uploadDate: "09-08-2023 08:02:53",
      Edad: "36",
      Cargo: "qwerty",
      Fecha: "17/04/2023",
      CCN: "123456789",
      activo: true,
      Genero: "qwerty",
    },
    {
      id: 1,
      users_id: 3,
      uploadDate: "09-08-2023 08:02:53",
      Edad: "40",
      Cargo: "qwerty",
      Fecha: "17/05/2023",
      CCN: "1231",
      activo: true,
      Genero: "qwerty",
    },
    {
      id: 2,
      users_id: 3,
      uploadDate: "09-08-2023 08:02:53",
      Cargo: "qwerty",
      Fecha: "17/04/2023",
      CCN: "123456789",
      activo: true,
      Genero: "qwerty",
    }
  ]




  return (
    <div className='p-5'>
      <section className='pb-10'>
        <FileInput />
        <button className='button-save'>
          Guardar
        </button>
      </section>
      <TableFlexCsv datos={datosCSV} />
    </div>
  );
};

export default SubStep511;