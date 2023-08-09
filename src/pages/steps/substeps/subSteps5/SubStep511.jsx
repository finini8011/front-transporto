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
      uploadDate: "09-08-2023 08:02:53",
      users_name: "Usuario Test 2",
      Escolaridad: "qwerty",
      Restriccion: "SIN RESTRICCION",
      Vencimiento: "ALERTA",
      ExamenesMedicos: "qwerty",
      TipodeContrato: "qwerty",
      Tipodelicencia: "C1",
      FechadeExpedicion: "28/12/2018"
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
      uploadDate: "09-08-2023 08:02:53",
      users_name: "Usuario Test 2",
      Escolaridad: "qwerty",
      Restriccion: "SIN RESTRICCION",
      Vencimiento: "ALERTA",
      ExamenesMedicos: "qwerty",
      TipodeContrato: "qwerty",
      Tipodelicencia: "C1",
      FechadeExpedicion: "28/12/2018"
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