import React, { useState } from 'react';

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['text/csv'];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Por favor, selecciona un archivo CSV.');
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {selectedFile && <p>Archivo seleccionado: {selectedFile.name}</p>}
    </div>
  );
};

export default FileInput;