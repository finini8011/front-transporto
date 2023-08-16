import React, { useState, useEffect } from 'react';
import { Toaster, toast } from "react-hot-toast";
import FileInput from '../../../../components/commons/input/file/FileInput';
import TableFlexCsv from '../../../../components/tables/TableFlexCsv';
import { useLazyGetDataStep5Query, useSaveStep5Mutation } from '../../../../api/services/steps/stepsApiSlice';
import "./SubSteps5.css";

const SubStep511 = () => {

  const [listData, setListData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [getDataStep5] = useLazyGetDataStep5Query('5.1.1');
  const [saveStep5] = useSaveStep5Mutation();

  useEffect(() => {
    const getData = async () => {
      const { data, isLoading: loading } = await getDataStep5('5.1.1');
      console.log(data, "datos")
      setListData(data);
    };
    getData();
  }, [])

  const handleFormSubmit = async (selectedFile) => {
    try {
      const obj = {
        numStep: '5.1.1',
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

  return (
    <div className='p-5'>
      <section className='pb-10'>
        <p className='pb-4 text-[#0090FF]'>
          ¿El diagnóstico del PESV al menos contiene los requisitos definidos en el paso 5 de la Metodología del PESV?
        </p>
        <div className='flex'>
          <FileInput onFileChange={handleFileChange} /> {/* Pasa la función handleFileChange como prop */}
          <button className='button-save' onClick={() => handleFormSubmit(selectedFile)}>
            Guardar
          </button>
        </div>
      </section>
      <TableFlexCsv datos={listData} />
    </div>
  );
};

export default SubStep511;