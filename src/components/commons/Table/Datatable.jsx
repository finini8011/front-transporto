import React, { useState } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerCell: {
    color: "#0090FF", 

  },
  rowCell: {
    color: "#7A86A1"
  },
});
const DataTable = ({ title, columns, rows, onDeleteSelected }) => {
  const classes = useStyles();

  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectRow = (id) => {
    const selectedIndex = selectedIds.indexOf(id);
    let newSelectedIds = [];

    if (selectedIndex === -1) {
      newSelectedIds = [...selectedIds, id];
    } else {
      selectedIds.splice(selectedIndex, 1);
      newSelectedIds = [...selectedIds];
    }

    setSelectedIds(newSelectedIds);
  };

  const handleDeleteSelected = () => {
    onDeleteSelected(selectedIds);

  };

  return (
    <div className="h-[400px] w-full">
      <div className="bg-[#F7F7F8] p-2 flex justify-between items-center">
        <div>{title}</div>
        <div>
          <div className="rounded-lg bg-white shadow-xl p-3 flex">
            <button onClick={handleDeleteSelected}>
              <img src="/img/icon-delete.svg" />
            </button>
          </div>
        </div>
      </div>

      <DataGrid sx={{border:0,  boxShadow: 0,}}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={rows.map((row) => ({
            ...row,
            headerClassName: classes.rowCell, 
          }))}
        columns={columns.map((column) => ({
          ...column,
          headerClassName: classes.headerCell, 
        }))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(newSelection) => {
          setSelectedIds(newSelection);
        }}
      />
    </div>
  );
};

export default DataTable;
