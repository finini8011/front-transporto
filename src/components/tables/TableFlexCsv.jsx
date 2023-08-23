import React from "react";
import { DataGrid, esES } from '@mui/x-data-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableFlexCsv = ({ datos, handleEdit, handleView, handleTrash, editRow, trashRow }) => {

  const MAX_COLUMNS = 5; // Define el número máximo de columnas a mostrar

  const columns = React.useMemo(() => {
    const dynamicColumns = datos[0] && Object.keys(datos[0])
      .filter(
        columna => columna !== "id"
          && columna !== "users_id"
          && columna !== "activo"
          && columna !== "uploadDate"
          && columna !== "estado"
          && columna !== "Fecha"
          && columna !== "users_name"
      ) // Filtra las propiedades "id" y "user_id"
      .slice(0, MAX_COLUMNS)
      .map((columna) => ({
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
            <button onClick={() => handleView(params)}>
              <FontAwesomeIcon icon={faEye} className="w-4 h-4 mr-2" />
            </button>
          {editRow &&
            <button onClick={() => handleEdit(params)}>
              <FontAwesomeIcon icon={faPencil} className="w-4 h-4 mr-2" />
            </button>
          }
          {trashRow &&
            <button onClick={() => handleTrash(params)}>
              <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
            </button>
          }
        </div>
      ),
    };

    return dynamicColumns ? [...dynamicColumns, actionColumn] : [];
  }, [datos]);

  return (
    <div style={{ height: 380, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={datos}
        autoHeight={false}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5]}
      />
    </div>
  );
};

export default TableFlexCsv;