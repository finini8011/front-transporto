import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const TableFlexCsv = ({ datos }) => {
  const MAX_COLUMNS = 5; // Define el número máximo de columnas a mostrar

  const columns = React.useMemo(() => {
    const dynamicColumns = datos[0] && Object.keys(datos[0]).slice(0, MAX_COLUMNS).map((columna) => ({
      field: columna,
      headerName: columna,
      flex: 1,
    }));

    // Agrega una columna adicional con botones para editar y ver el registro
    const actionColumn = {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleEdit(params)}>Editar</button>
          <button onClick={() => handleView(params)}>Ver</button>
        </div>
      ),
    };

    return dynamicColumns ? [...dynamicColumns, actionColumn] : [];
  }, [datos]);

  const handleEdit = (params) => {
    // Lógica para editar el registro
    console.log("Editar registro:", params.row);
  };

  const handleView = (params) => {
    // Lógica para ver el registro
    console.log("Ver registro:", params.row);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid columns={columns} rows={datos} />
    </div>
  );
};

export default TableFlexCsv;