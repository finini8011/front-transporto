import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TableStatic from "../../../../components/tables/TableStatic";

const SubStep62 = () => {

  const [matrizView, setMatrizView] = useState(true);
  const optionsChageState = [
    "seleccionar",
    "Si",
    "No",
  ];
  const optionsChageStateNumber = [
    "seleccionar",
    1,
    2,
    3,
  ]
  const optionsEstrategia = [
    "seleccionar",
    "MITIGAR",
    "EVITAR",
  ];
  const optionsResponsable = [
    "seleccionar",
    "H&H",  
    "OPERA",
    "H&H",
    "MANTTO",
    "RR HH",
    "ADMIN",
  ];

  const [columnsMatriz, setColumnsMatriz] = useState([
    { id: 1, name: 'Causa', label: 'Causa', type: 'text', value: "", width: 230 },
    { id: 2, name: 'Evento', label: 'Evento', type: 'text', value: "" },
    { id: 3, name: 'Impacto', label: 'Impacto', type: 'text', value: "" },
    { id: 4, name: 'Conductor', label: 'Conductor', type: 'select', options: optionsChageState, value: "" },
    { id: 5, name: 'Bici Usuario', label: 'Bici Usuario', type: 'select', options: optionsChageState, value: "" },
    { id: 6, name: 'Motorizado', label: 'Motorizado', type: 'select', options: optionsChageState, value: "" },
    { id: 7, name: 'Peaton', label: 'Peaton', type: 'select', options: optionsChageState, value: "" },
    { id: 8, name: 'Pasajero', label: 'Pasajero', type: 'select', options: optionsChageState, value: "" },
    { id: 9, name: 'Nivel de probabilidad', label: 'Nivel de probabilidad', type: 'select', options: optionsChageStateNumber, value: "" },
    { id: 10, name: 'Nivel de impacto', label: 'Nivel de impacto', type: 'select', options: optionsChageStateNumber, value: "" },
    { id: 11, name: 'Valoracion de riesgo', label: 'Valoracion de riesgo', type: 'span', value: "5" },
    { id: 12, name: 'Nivel de riesgo', label: 'Nivel de riesgo', type: 'span', value: "ALTO" },

  ]);

  const [columnsRespuesta, setColumnsRespuesta] = useState([
    { id: 1, name: 'Nivel de riesgo', label: 'Nivel de riesgo', type: 'span', value: "ALTO" },
    { id: 2, name: 'Causa', label: 'Causa', type: 'span', value: "Causa", width: 230 },
    { id: 3, name: 'Evento', label: 'Evento', type: 'span', value: "Evento", width: 230 },
    { id: 4, name: 'Impacto', label: 'Impacto', type: 'span', value: "Impacto", width: 230 },
    { id: 5, name: 'Estrategia de gestion', label: 'Estrategia de gestion', type: 'select', options: optionsEstrategia, value: "" },
    { id: 6, name: 'Accion de respuesta', label: 'Accion de respuesta', type: 'text', value: "", width: 230 },
    { id: 5, name: 'Responsable', label: 'Responsable', type: 'select', options: optionsEstrategia, value: "" },
    { id: 6, name: 'Evidencia', label: 'Evidencia', type: 'text', value: "", width: 230 },

  ]);


  return (
    <div className="p-5">
      <div className="pb-5">
        <button className='button-save ml-6' onClick={() => setMatrizView(true)}>
          Matriz
        </button>
        <button className='button-save ml-6' onClick={() => setMatrizView(false)}>
          Respuesta
        </button>
      </div>
      {matrizView ?
        <TableStatic columns={columnsMatriz} />
        :
        <TableStatic columns={columnsRespuesta} />
      }
    </div>
  );
};

export default SubStep62;