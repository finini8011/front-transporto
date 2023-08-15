import React, { useEffect, useState } from "react";

const data = [
  {
    pregunta:
      "USA EL CINTURÓN DE SEGURIDAD CUANDO EL VEHÍCULO ESTA CON EL MOTOR ENCENDIDO (Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "EXIGE EL USO DEL CINTURÓN DE SEGURIDAD A LOS PASAJEROS (Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "RESPETA LAS SEÑALES DE CEDA EL PASO Y SEMÁFOROS (Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "REDUCE LA VELOCIDAD EN LA INTERSECCIÓN, AUN CUANDO TIENE EL DERECHO DE PASO(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "EXCEDE LOS LÍMITES DE VELOCIDAD ESTABLECIDOS POR LA EMPRESA (ALERTAS DE GPS)(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "CONDUCE CON SUEÑO, FATIGA O CANSANCIO(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "USA EL CELULAR U OTROS DISPOSITIVOS DISTRACTORES MIENTRAS CONDUCE(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "HACE LA REVISIÓN PRE-OPERACIONAL DIARIA DEL VEHÍCULO A CONCIENCIA, ANTES DE INICIAR SU JORNADA DE CONDUCCIÓN(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "CUMPLE CON EL DÍA DE DESCANSO A LA SEMANA(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "ALGUNA VEZ LOS PASAJEROS LE HAN PEDIDO QUE INCUMPLA LAS NORMAS DE SEGURIDAD PARA LLEVARLOS A SU DESTINO.(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "SE INFORMA CON ANTICIPACIÓN SOBRE LOS RIESGOS DE LA RUTA POR DONDE VA A TRANSITAR A SU DESTINO(Califique de 1: Nunca, 2: Casi Nunca, 3: Algunas veces, 4: Casi siempre y 5: Siempre)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "CONDICIONES DEL TERRENO EN LAS VÍAS DONDE CIRCULA( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "AUSENCIA DE SEÑALIZACIÓN VIAL EN LAS VÍAS DONDE TRANSITA    ( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "CONDICIONES GEOMÉTRICAS DE LAS VÍAS POR DONDE TRANSITA (RADIOS DE GIRO EN CURVAS, PERALTES, PENDIENTES, ETC)     ( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "ESTADO MECÁNICO DEL VEHÍCULO QUE OPERA ( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "TIEMPOS JORNADAS DE CONDUCCIÓN Y DESCANSO( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "SEÑALIZACIÓN Y ORDEN DE LA OPERACIÓN INTERNA EN LAS INSTALACIONES DE LOS CLIENTES DONDE SE PRESTA EL SERVICIO.( Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "PRESENCIA DE ANIMALES EN LA VÍA (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "MOTORIZADOS, PEATONES O BICIUSUARIOS IMPRUDENTES (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "CONTROLES A LOS EXCESOS DE VELOCIDAD (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "CONTROLES A LOS ESTADOS DE ALCOHOLISMO (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "COMPROMISO DE LOS COMPAÑEROS CON LA SEGURIDAD DEL SERVICIO(Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "RETROALIMENTACIÓN DE LOS JEFES (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "PARTICIPACIÓN EN ACTIVIDADES DE SENSIBILIZACIÓN (Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
  {
    pregunta:
      "CONOCIMIENTO Y RESPETO DE LAS NORMAS DE SEGURIDAD POR PARTE DE LOS PASAJEROS O USUARIOS DE LA RUTA(Califique 1: muy bajo, 2: medio bajo, 3: medio, 4: medio alto y 5: alto.)",
    value1: "1",
    value2: "2",
    value3: "2",
    value4: "2",
    value5: "2",
    riesgo: "no",
    nivel: "medio",
    observacion: "",
  },
];

const TableStep621B = () => {
  return (
    <div className="mt-10 ">
      <table className="border text-center text-sm shadow-md bg-white mb-16 w-full">
        <thead className="uppercase">
          <tr>
            {/* <th className="border p-2">#</th> */}
            <th className="border p-2">Pregunta</th>
            <th className="border p-2">1</th>
            <th className="border p-2">2</th>
            <th className="border p-2">3</th>
            <th className="border p-2">4</th>
            <th className="border p-2">5</th>
            <th className="border p-2">riesgo</th>
            <th className="border p-2">nivel</th>
            <th className="border p-2">Observación</th>
          </tr>
        </thead>
        <tbody className="font-normal">
          {data.map((data, key) => (
            <tr className="text-start" key={key}>
              <td className="border p-2 w-96">{data.pregunta} </td>
              <td className="border p-2">{data.value1}</td>
              <td className="border p-2">{data.value2}</td>
              <td className="border p-2">{data.value3}</td>
              <td className="border p-2">{data.value4} </td>
              <td className="border p-2">{data.value5}</td>
              <td className="border p-2">{data.riesgo}</td>
              <td className="border p-2">{data.nivel}</td>
              <td className="border p-2 w-72">{data.observacion} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStep621B;
