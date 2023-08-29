import React, { useState, useEffect } from 'react';
import { Toaster, toast } from "react-hot-toast";
import FileInput from '../../../../components/commons/input/file/FileInput';
import TableFlexCsv from '../../../../components/tables/TableFlexCsv';
import { useGetDataStep5Query, useSaveStep5Mutation } from '../../../../api/services/steps/stepsApiSlice';
import "./SubSteps5.css";


const SubStep514 = () => {

  const step = '5.1.4';
  const [selectedFile, setSelectedFile] = useState(null);
  const { data: getDataStep5, isLoading: isLoadingDataStep5 } =
  useGetDataStep5Query(step);
  const [saveStep5] = useSaveStep5Mutation();

  const handleFormSubmit = async (selectedFile) => {
    try {
      const obj = {
        numStep: step,
        file: selectedFile,
      };
      toast.success("Se ha registrado correctamente!");
      await saveStep5(obj).unwrap();
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  }

  const handleFileChange = (file) => {
    setSelectedFile(file); // Actualiza el estado selectedFile con el archivo seleccionado
  };

  const handleView = (params) => {
    // Lógica para ver el registro
    console.log("Ver registro:", params.row);
  };

  const handleEdit = (params) => {
    // Lógica para editar el registro
    console.log("Editar registro:", params.row);
  };

  const handleTrash = (params) => {
    // Lógica para eliminar el registro
    console.log("Eliminar registro:", params.row);
  };

  return (
    <div className='p-5'>
      <section className='pb-10'>
        <p className='pb-4 text-[#0090FF]'>
          ¿El diagnóstico del PESV al menos contiene los requisitos definidos en el paso 5 de la Metodología del PESV?
        </p>
        <div className='flex'>
          <FileInput onFileChange={handleFileChange} /> {/* Pasa la función handleFileChange como prop */}
          <button className='button-save ml-6' onClick={() => handleFormSubmit(selectedFile)}>
            Guardar
          </button>
        </div>
      </section>
      <TableFlexCsv
        datos={getDataStep5 ? getDataStep5 : []}
        editRow
        trashRow
        handleEdit={handleEdit}
        handleView={handleView}
        handleTrash={handleTrash}
      />
    </div>
  );
};

export default SubStep514;