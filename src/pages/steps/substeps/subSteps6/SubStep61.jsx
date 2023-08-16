import React from "react";
import { useForm } from "react-hook-form";
import TextAreaRHF from "../../../../components/commons/input/TextArea/TextAreaRHF";
import GraficColumnsDynamic from "../../../../../grafic/GraficColumnsDynamic";
import TableStep621A from "../../../../components/tables/TableStep621A";
import TableStep621B from "../../../../components/tables/TableStep621B";

const SubStep61 = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-4">
        <h2 className="text-center font-semibold">Introducción</h2>
        <p>
          En primer lugar, es necesario señalar que la seguridad vial “se define
          como la disciplina que estudia y aplica las acciones y mecanismos
          tendientes a garantizar el buen funcionamiento de la circulación en la
          vía pública, previniendo los accidentes de tránsito” es así como, el
          concepto de seguridad vial hace referencia a todos aquellos
          comportamientos que las personas deben tener en la vía pública, tanto
          como peatones, conductores o pasajeros los cuales se encuentran
          orientadas a propiciar su seguridad integral y la de los otros.{" "}
        </p>
        <p>
          Para garantizar esto y teniendo en cuenta la reciente Resolución
          4004595 de 2022, se ha realizado una nueva encuesta de movilidad con
          el objetivo de actualizar el diagnóstico de la seguridad vial de la
          empresa, caracterizando a la población encuestada, los desplazamientos
          que realizan, los medios de transporte que utilizan, y los riesgos
          percibidos; en este informe se registra la información delos
          resultados obtenidos de la encuesta para determinar recomendaciones de
          acuerdo a la información recopilada, con el objetivo de proponer
          acciones de mejorar a la gestión de prevención vial de la
          organización.
        </p>
        <h2 className="text-center font-semibold">Objetivo General</h2>
        <p>
          Procesar y analizar la información registrada por el personal a quien
          se le aplicó la encuesta de movilidad, para la actualización PESV.
        </p>
        <h2 className="text-center font-semibold">Objetivos Específicos</h2>
        <TextAreaRHF />
        <h2 className="text-center font-semibold">Diagnóstico</h2>
        <TextAreaRHF />
        <div className="flex justify-center">
          <div className="relative w-[40rem] ">
            <GraficColumnsDynamic title="Distribución personal encuestado por Contrato" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[40rem] ">
            <GraficColumnsDynamic title="Edad promedio por Contrato" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[40rem] ">
            <GraficColumnsDynamic title="Tipología vehículos en misión" />
          </div>
        </div>
        <h2 className="text-center font-semibold">
          Antecedentes en materia de seguridad vial
        </h2>
        <TableStep621A />
        <h2 className="text-center font-semibold">
          Hábitos de conducción y riesgos viales
        </h2>
        <TableStep621B />
      </div>
      <button className="button-save mt-5 cursor-pointer">Guardar</button>
    </div>
  );
};

export default SubStep61;
