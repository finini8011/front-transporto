import React from "react";
import { DataGrid } from '@mui/x-data-grid';


const TableFlexCsv = ({ datos }) => {
  
  const columns = React.useMemo(
    () =>
      datos[0] &&
      Object.keys(datos[0]).map((columna) => ({
        field: columna,
        headerName: columna,
        flex: 1,
      })),
    [datos]
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid columns={columns} rows={datos} />
    </div>
  );
};

export default TableFlexCsv;