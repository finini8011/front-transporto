import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import SelectRHF from "../commons/input/select/SelectRHF";

const dataApi = [
  {
    label: "VEHICULO QUE CONDUCE",
    selects: [
      [
        {
          label: "CAMIONETA",
          value: "CAMIONETA",
        },
        {
          label: "CAMPERO",
          value: "CAMPERO",
        },
        {
          label: "MICROBUS",
          value: "MICROBUS",
        },
        {
          label: "VANS",
          value: "VANS",
        },
      ],
    ],
  },
  {
    label: "EXPERIENCIA EN LA CONDUCCION DE TRANSPORTE PUBLICO",
    selects: [
      [
        {
          label: "1 AÑO",
          value: "1 AÑO",
        },
        {
          label: "2 AÑOS",
          value: "2 AÑOS",
        },
        {
          label: "3 AÑOS",
          value: "3 AÑOS",
        },
      ],
      [
        {
          label: "1 MES",
          value: "1 MES",
        },
        {
          label: "2 MESES",
          value: "2 MESES",
        },
        {
          label: "3 MESES",
          value: "3 MESES",
        },
      ],
    ],
  },
  {
    label: "HA TENIDO ACCIDENTES O INCIDENTES VIALES EN LOS ULTIMOS 2 AÑOS",
    selects: [
      [
        {
          label: "SI",
          value: "SI",
        },
        {
          label: "NO",
          value: "NO",
        },
      ],
    ],
  },
  {
    label: "CONOCE LA POLÍTICA Y OBJETIVOS DE SEGURIDAD VIAL DE LA EMPRESA",
    selects: [
      [
        {
          label: "SI",
          value: "SI",
        },
        {
          label: "NO",
          value: "NO",
        },
      ],
    ],
  },
  {
    label: "CONOCE LAS LECCIONES APRENDIDAS DE ACCIDENTES OCURRIDOS A OTROS COMPAÑEROS EN LA EMPRESA",
    selects: [
      [
        {
          label: "SI",
          value: "SI",
        },
        {
          label: "NO",
          value: "NO",
        },
      ],
    ],
  },
  {
    label: "CONOCE CÓMO ACTUAR ANTE CUALQUIER EMERGENCIA QUE SE PRESENTE DURANTE LA PRESTACIÓN DEL SERVICIO",
    selects: [
      [
        {
          label: "SI",
          value: "SI",
        },
        {
          label: "NO",
          value: "NO",
        },
      ],
    ],
  },
  {
    label: "USA EL CINTURÓN DE SEGURIDAD CUANDO EL VEHÍCULO ESTA CON EL MOTOR ENCENDIDO (Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "EXIGE LE USO DEL CINTURÓN DE SEGURIDAD A LOS PASAJEROS (Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },  
  {
    label: "RESPETA LAS SEÑALES DE CEDA EL PASO Y SEMÁFOROS (Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "REDUCE LA VELOCIDAD EN LA INTERSECCIÓN, AUN CUANDO TIENE EL DERECHO DE PASO(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "EXCEDE LOS LÍMITES DE VELOCIDAD ESTABLECIDOS POR LA EMPRESA (ALERTAS DE GPS)(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  { 
    label: "CONDUCE CON SUEÑO, FATIGA O CANSANCIO(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "USA EL CELULAR U OTROS DISPOSITIVOS DISTRACTORES MIENTRAS CONDUCE(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "HACE LA REVISIÓN PRE-OPERACIONAL DIARIA DEL VEHÍCULO A CONCIENCIA, ANTES DE INICIAR SU JORNADA DE CONDUCCIÓN(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "CUMPLE CON EL DÍA DE DESCANSO A LA SEMANA(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "ALGUNA VEZ LOS PASAJEROS LE HAN PEDIDO QUE INCUMPLA LAS NORMAS DE SEGURIDAD PARA LLEVARLOS A SU DESTINO.(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "SE INFORMA CON ANTICIPACIÓN SOBRE LOS RIESGOS DE LA RUTA POR DONDE VA A TRANSITAR A SU DESTINO(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "CONDICIONES DEL TERRENO EN LAS VÍAS DONDE CIRCULA( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
    {
    label: "AUSENCIA DE SEÑALIZACIÓN VIAL EN LAS VÍAS DONDE TRANSITA    ( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "CONDICIONES GEOMÉTRICAS DE LAS VÍAS POR DONDE TRANSITA (RADIOS DE GIRO EN CURVAS, PERALTES, PENDIENTES, ETC)     ( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: " ESTADO MECÁNICO DEL VEHÍCULO QUE OPERA ( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "TIEMPOS JORNADAS DE CONDUCCIÓN Y DESCANSO( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "SEÑALIZACIÓN Y ORDEN DE LA OPERACIÓN INTERNA EN LAS INSTALACIONES DE LOS CLIENTES DONDE SE PRESTA EL SERVICIO.( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "PRESENCIA DE ANIMALES EN LA VÍA (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "MOTORIZADOS, PEATONES O BICIUSUARIOS IMPRUDENTES (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "CONTROLES A LOS EXCESOS DE VELOCIDAD (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "CONTROLES A LOS ESTADOS DE ALCOHOLISMO (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "COMPROMISO DE LOS COMPAÑEROS CON LA SEGURIDAD DEL SERVICIO(Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "RETROALIMENTACIÓN DE LOS JEFES (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "PARTICIPACIÓN EN ACTIVIDADES DE SENSIBILIZACIÓN (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
  {
    label: "CONOCIMIENTO Y RESPETO DE LAS NORMAS DE SEGURIDAD POR PARTE DE LOS PASAJEROS O USUARIOS DE LA RUTA(Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    selects: [
      [
        {
          label: "1",
          value: "1",
        },
        {
          label: "2",
          value: "2",
        },
        {
          label: "3",
          value: "3",
        },
        {
          label: "4",
          value: "4",
        },
        {
          label: "5",
          value: "5",
        },
      ],
    ],
  },
];

const btnRegister = () => {
 return toast.error("Proximamente");
}

const TableStep522 = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  return (
    <div className="mt-10 ">
            <Toaster />
      <table className="border text-center text-sm shadow-md bg-white mb-8 w-full">
        <tbody className="font-normal">
          {dataApi.map((data, key) => (
            <tr className="text-start" key={key}>
              <td className="border p-2 font-semibold">{data.label} </td>
              <td className="border p-2 grid grid-cols-2 gap-2 w-64">
                {data.selects.map((selectContainer, index) => {
                  if(data.selects.length === 1){
                    return (
                      <SelectRHF
                        key={index}
                        dataApi={selectContainer} 
                        {...register(`${ 'key' + key + index}`)}
                      />
                    )
                  }else return (
                  <SelectRHF
                    key={index}
                    dataApi={selectContainer} 
                    {...register(`${ 'key-2' + key + index}`)}
                  />
                ) })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button-save " onClick={btnRegister}>Registrar</button>
    </div>
  );
};

export default TableStep522;
