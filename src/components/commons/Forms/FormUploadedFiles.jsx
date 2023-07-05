import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import ButtonPaginationNext from "../button/ButtonPaginationNext";
// import ButtonPaginationPrev from "../button/ButtonPaginationPrev";
// import SelectEntries from "../input/select/SelectEntries";
// import Table from "../Table/Table";
import DataTable from "../Table/Datatable";

const FormUploadedFiles = ({ title, stepNumber, columns, rows, onDeleteSelected }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleDeleteSelected = (selectedIds) => {
    onDeleteSelected(selectedIds)
  };

  return (
    <section className="bg-white text-gray-800 flex flex-col w-full">
      <div className="mt-5 shadow-md rounded-md">
        <DataTable title={title} columns={columns} rows={rows} onDeleteSelected={handleDeleteSelected}/>
      </div>
    </section>
  );
};

export default FormUploadedFiles;
