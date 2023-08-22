import React, { useState } from 'react';
import { DataGrid, esES } from '@mui/x-data-grid';

const TableStatic = ({ columns }) => {
  if (!columns || columns.length === 0) {
    return <div>No se han proporcionado columnas.</div>;
  }

  const [rows, setRows] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);

  const handleAddRow = () => {
    const newRow = {};
    columns.forEach(column => {
      if (column.type === 'select') {
        newRow[column.name] = column.options[0];
      } else if (column.type === 'number') {
        newRow[column.name] = 0;
      } else {
        newRow[column.name] = '';
      }
    });
    setRows(prevRows => [...prevRows, newRow]);
    setIdCounter(prevCounter => prevCounter + 1);
    setInitialLoad(false);
  };

  const handleCellEditCommit = ({ id, field, value }) => {
    setRows(prevRows => {
      const updatedRows = [...prevRows];
      const rowIndex = updatedRows.findIndex(row => row.id === id);
      if (rowIndex !== -1) {
        const updatedRow = { ...updatedRows[rowIndex], [field]: value };
        updatedRows[rowIndex] = updatedRow;
      }
      return updatedRows;
    });
  };

  const rowsData = initialLoad ? [] : rows.map((row, index) => ({ id: index + 1, ...row }));

  const columnsData = columns.map(column => ({
    field: column.name,
    headerName: column.label,
    flex: 0,
    editable: true,
    type: column.type,
    valueGetter: (params) => {
      if (column.type === 'select') {
        return params.row[column.name].value;
      }
      return params.row[column.name];
    },
    renderCell: (params) => {
      if (column.type === 'span') {
        return (
          <p>{column.value}</p>
        );
      }
      if (column.type === 'select') {
        return (
          <select
            value={params.row[column.name].value}
            onChange={(e) => handleCellEditCommit({ id: params.row.id, field: column.name, value: e.target.value })}
          >
            {column.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      } if (column.type === 'number') {
        return (
          <input
            type="number"
            value={params.row[column.name]}
            onChange={(e) => handleCellEditCommit({ id: params.row.id, field: column.name, value: e.target.value })}
          />
        );
      }
      if (column.type === 'text') {
        return (
          <input
            type="text"
            value={params.row[column.name]}
            onChange={(e) => handleCellEditCommit({ id: params.row.id, field: column.name, value: e.target.value })}
          />
        );
      }
      return
    },
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={columnsData}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onCellEditCommit={handleCellEditCommit}
      />
      <button onClick={handleAddRow}>Agregar Fila</button>
    </div>
  );
};

export default TableStatic;