import React, { useState } from 'react';

const FileInput = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['text/csv'];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      onFileChange(file); // Llama a la función de callback con el archivo seleccionado
    } else {
      setSelectedFile(null);
      alert('Por favor, selecciona un archivo CSV.');
    }
  };

  return (
    <div>
      <input 
      className='bg-white-500 border border-[#E9EEF3] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:outline-none focus:ring-1 focus:border-primary-600 w-full p-2.5 disabled:cursor-no-drop disabled:bg-gray-200 read-only:bg-gray-200 read-only:cursor-no-drop'
      type="file"
      accept=".csv" 
      onChange={handleFileChange} />
    </div>
  );
};

export default FileInput;