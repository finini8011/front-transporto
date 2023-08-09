import React from 'react';
import FileInput from '../../../../components/commons/input/file/FileInput';
import TableFlexCsv from '../../../../components/tables/TableFlexCsv';

const SubStep511 = () => {

  const datosCSV = [
    {
      id: 0,
      Edad: "36",
      Cargo: "qwerty",
      Fecha: "17/04/2023",
      CCN: "123456789",
      activo: true,
      Genero: "qwerty",
      users_id: 3,
    },
    {
      id: 1,
      Edad: "40",
      Cargo: "qwerty",
      Fecha: "17/05/2023",
      CCN: "1231",
      activo: true,
      Genero: "qwerty",
      users_id: 3,
    },
    {
      id: 2,
      Edad: "36",
      Cargo: "qwerty",
      Fecha: "17/04/2023",
      CCN: "123456789",
      activo: true,
      Genero: "qwerty",
      users_id: 3,
    },
    {
      id: 3,
      Edad: "36",
      Cargo: "qwerty",
      Fecha: "17/04/2023",
      CCN: "123456789",
      activo: true,
      Genero: "qwerty",
      users_id: 3,
    },
    {
      id: 4,
      Edad: "36",
      Cargo: "qwerty",
      Fecha: "17/04/2023",
      CCN: "123456789",
      activo: true,
      Genero: "qwerty",
      users_id: 3,
    },
    {
      id: 5,
      Edad: "36",
      Cargo: "qwerty",
      Fecha: "17/04/2023",
      CCN: "123456789",
      activo: true,
      Genero: "qwerty",
      users_id: 3,
    },

  ]


  return (
    <div className='p-5'>
      <section className='pb-10'>
        <FileInput />
      </section>
      <TableFlexCsv datos={datosCSV} />
    </div>
  );
};

export default SubStep511;