import React, { useState } from "react";
import DataTable from "../../../../components/commons/Table/Datatable";
import TableFlexCsv from "../../../../components/tables/TableFlexCsv";

const SubStep62 = () => {

  const [matrizView, setMatrizView] = useState(true);
  const [rows, setRows] = useState([]);

  const columnsMatriz = [
    { field: 'Causa', headerName: 'Causa', width: 250 },
    { field: 'Evento', headerName: 'Evento', width: 230 },
    { field: 'Impacto', headerName: 'Impacto', width: 230 },
    { field: 'Conductor', headerName: 'Conductor', width: 230, },
    { field: 'Bici Usuario', headerName: 'Bici Usuario', width: 230, },
    { field: 'Motorizado', headerName: 'Motorizado', width: 230, },
    { field: 'Peaton', headerName: 'Peaton', width: 230, },
    { field: 'Pasajero', headerName: 'Pasajero', width: 230, },
    { field: 'Nivel de probabilidad', headerName: 'Nivel de probabilidad', width: 230, },
    { field: 'Nivel de impacto', headerName: 'Nivel de impacto', width: 230, },
    { field: 'Valoracion de riesgo', headerName: 'Valoracion de riesgo', width: 230, },
    { field: 'Nivel de riesgo', headerName: 'Nivel de riesgo', width: 230, },
  ];

  const columnsRespuesta = [
  ];



  const deleteDocs = (selectedItems) => {
  }






  return (
    <div className="p-5">
      <div className="pb-5">
        <button className='button-save ml-6' onClick={() => setMatrizView(true)}>
          Matriz
        </button>
        <button className='button-save ml-6' onClick={() => setMatrizView(false)}>
          Respuesta
        </button>
      </div>
      {matrizView ?
        <>
          <DataTable title={"titulo"} columns={columnsMatriz} rows={rows}  />
          <button className='button-save ml-6' onClick={() => setMatrizView(false)}>
            Añadir fila
          </button>
         {/*  Abre el modal con todos los campos inputs de cada fila*/}
        </>

        :
        <TableFlexCsv datos={columnsRespuesta} />
      }

    </div>
  );
};

export default SubStep62;