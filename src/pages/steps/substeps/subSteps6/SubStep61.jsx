import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextAreaRHF from "../../../../components/commons/input/TextArea/TextAreaRHF";
import GraficColumnsDynamic from "../../../../../grafic/GraficColumnsDynamic";
import TableStep621A from "../../../../components/tables/TableStep621A";
import TableStep621B from "../../../../components/tables/TableStep621B";
import Button from "../../../../components/commons/button/Button";
import { Toaster, toast } from "react-hot-toast";
import {
  useGetReport61Query,
  useSaveReportMutation,
} from "../../../../api/services/subSteps/subStepsApiSlice";

const SubStep61 = () => {
  const { register, handleSubmit, setValue } = useForm();
  const {
    data: getDataSubStep,
    isLoading: isLoadingData,
    error: isErrorData,
  } = useGetReport61Query();
  const [saveReport, { isLoading }] = useSaveReportMutation();
  const navigate = useNavigate();
  const [stateGrafico1, setStateGrafico1] = useState([]);
  const [stateGrafico2, setStateGrafico2] = useState([]);
  const [stateGrafico3, setStateGrafico3] = useState([]);

  if (isErrorData?.data.Message === "Pending to do substep 5.2.2")
    return <p>Debe completar el paso 5.2.2</p>;

  const onSubmit = async (data) => {
    // console.log(getDataSubStep)
    // console.log(data)

    const arrTabla1 = Object.entries(getDataSubStep.tabla1).map(
      ([key, value]) => ({ key, ...value })
    );
    const arrConAtrAgregado = arrTabla1.map((item, key) => ({
      ...item,
      observacion: data.table_1[`observaciones_${key + 1}`],
    }));
    const payloadTabla1 = arrConAtrAgregado.reduce((obj, item) => {
      obj[item.key] = {
        texto: item.texto,
        data: item.data,
        observacion: item.observacion,
      };
      return obj;
    }, {});

    const arrTabla2 = Object.entries(getDataSubStep.tabla2).map(
      ([key, value]) => ({ key, ...value })
    );
    const arrConAtrAgregado2 = arrTabla2.map((item, key) => ({
      ...item,
      observacion: data.table_2[`observaciones_${key + 1}`],
    }));
    const payloadTabla2 = arrConAtrAgregado2.reduce((obj, item) => {
      obj[item.key] = {
        texto: item.texto,
        data: item.data,
        observacion: item.observacion,
      };
      return obj;
    }, {});

    const payload = {
      payload: {
        introduccion: data.introduccion,
        objetivo_general: data.objetivo_general,
        objetivos_especificos: data.objetivos_especificos,
        diagnostico: data.diagnostico,
        grafico1: getDataSubStep.grafico1,
        grafico2: getDataSubStep.grafico2,
        grafico3: getDataSubStep.grafico3,
        texto_grafico1: data.texto_grafico1,
        texto_grafico2: data.texto_grafico2,
        texto_grafico3: data.texto_grafico3,
        tabla1: payloadTabla1,
        tabla2: payloadTabla2,
        texto_tabla1: data.texto_tabla1,
        texto_ant_tabla2: data.texto_ant_tabla2,
        texto_pos_tabla2: data.texto_pos_tabla2,
        recomendaciones: data.recomendaciones,
      },
    };
    try {
      await saveReport(payload).unwrap();
      toast.success("Se ha registrado correctamente!");
      setTimeout(() => {
        navigate("/informes");
      }, 2500);
    } catch (e) {
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

  useEffect(() => {
    if (!isLoadingData) {
      console.log(getDataSubStep);
      setValue("introduccion", getDataSubStep.introduccion);
      setValue("objetivo_general", getDataSubStep.objetivo_general);
      setValue(
        "objetivos_especificos",
        getDataSubStep.objetivos_especificos
          ? getDataSubStep.objetivos_especificos
          : ""
      );
      setValue(
        "diagnostico",
        getDataSubStep.diagnostico ? getDataSubStep.diagnostico : ""
      );
      setValue(
        "texto_grafico1",
        getDataSubStep.texto_grafico1 ? getDataSubStep.texto_grafico1 : ""
      );
      setValue(
        "texto_grafico2",
        getDataSubStep.texto_grafico2 ? getDataSubStep.texto_grafico2 : ""
      );
      setValue(
        "texto_grafico3",
        getDataSubStep.texto_grafico3 ? getDataSubStep.texto_grafico3 : ""
      );
      setValue(
        "texto_tabla1",
        getDataSubStep.texto_tabla1 ? getDataSubStep.texto_tabla1 : ""
      );
      setValue(
        "texto_ant_tabla2",
        getDataSubStep.texto_ant_tabla2 ? getDataSubStep.texto_ant_tabla2 : ""
      );
      setValue(
        "texto_pos_tabla2",
        getDataSubStep.texto_pos_tabla2 ? getDataSubStep.texto_pos_tabla2 : ""
      );
      setValue(
        "recomendaciones",
        getDataSubStep.recomendaciones ? getDataSubStep.recomendaciones : ""
      );

      //en un futuro se agregará esto como utils para reducir código
      const grafico1 = [];
      const grafico2 = [];
      const grafico3 = [];
      for (const key in getDataSubStep.grafico1) {
        if (getDataSubStep.grafico1.hasOwnProperty(key)) {
          grafico1.push({
            name: key,
            y: getDataSubStep.grafico1[key],
            color: "#96AEF1",
          });
        }
      }
      for (const key in getDataSubStep.grafico2) {
        if (getDataSubStep.grafico2.hasOwnProperty(key)) {
          grafico2.push({
            name: key,
            y: getDataSubStep.grafico2[key],
            color: "#96AEF1",
          });
        }
      }
      for (const key in getDataSubStep.grafico3) {
        if (getDataSubStep.grafico3.hasOwnProperty(key)) {
          grafico3.push({
            name: key,
            y: getDataSubStep.grafico3[key],
            color: "#96AEF1",
          });
        }
      }
      setStateGrafico1(grafico1);
      setStateGrafico2(grafico2);
      setStateGrafico3(grafico3);
    }
  }, [isLoadingData]);

  if (!isLoadingData)
    return (
      /* Respetar y tener en cuenta los titulos y enumerados que estan en el excel,
       faltan titulos y enumerados tambien unos input textarea
    */
      <div className="p-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-semibold">Introducción</h2>
          <TextAreaRHF {...register("introduccion")} />
          <h2 className="text-center font-semibold">Objetivo General</h2>
          <TextAreaRHF {...register("objetivo_general")} />
          <h2 className="text-center font-semibold">Objetivos Específicos</h2>
          <TextAreaRHF {...register("objetivos_especificos")} />
          <h2 className="text-center font-semibold">Diagnóstico</h2>
          <TextAreaRHF {...register("diagnostico")} />
          <div className="flex justify-center">
            <div className="relative w-[40rem] ">
              <GraficColumnsDynamic
                title="Distribución personal encuestado por Contrato"
                data={stateGrafico1}
              />
            </div>
          </div>
          <TextAreaRHF {...register("texto_grafico1")} />
          <div className="flex justify-center">
            <div className="relative w-[40rem] ">
              <GraficColumnsDynamic
                title="Edad promedio por Contrato"
                data={stateGrafico2}
              />
            </div>
          </div>
          <TextAreaRHF {...register("texto_grafico2")} />
          <div className="flex justify-center">
            <div className="relative w-[40rem] ">
              <GraficColumnsDynamic
                title="Tipología vehículos en misión"
                data={stateGrafico3}
              />
            </div>
          </div>
          <TextAreaRHF {...register("texto_grafico3")} />
          <h2 className="text-center font-semibold">
            Antecedentes en materia de seguridad vial
          </h2>
          <TableStep621A data={getDataSubStep.tabla1} setValue={setValue} />
          <TextAreaRHF {...register("texto_tabla1")} />
          <h2 className="text-center font-semibold">
            Hábitos de conducción y riesgos viales
          </h2>
          <TextAreaRHF {...register("texto_ant_tabla2")} />
          <div className="mt-4">
            <p className="font-semibold">Leyenda:</p>
            <div className="ml-4">
              <p>1: Nunca</p>
              <p>2: Casi nunca</p>
              <p>3: Algunas veces</p>
              <p>4: Casi siempre</p>
              <p>5: Siempre</p>
            </div>
          </div>
          <TableStep621B data={getDataSubStep.tabla2} setValue={setValue} />
          <TextAreaRHF {...register("texto_pos_tabla2")} />
          <h2 className="text-center font-semibold">Recomendaciones</h2>
          <TextAreaRHF {...register("recomendaciones")} />
        </div>
        <Button
          blue
          text="Guardar"
          onClick={handleSubmit(onSubmit)}
          loading={isLoading}
        />
      </div>
    );
  else return <p>Cargando..</p>;
};

export default SubStep61;
