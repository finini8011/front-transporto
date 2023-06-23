import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import Select from "../../components/commons/input/select/Select";
import InputRHF from "../../components/commons/input/text/InputRHF";
import InputNumberCount from "../../components/commons/input/text/InputNumberCount";

const arrPrincipalActivities = [
  "Actividad principal 1",
  "Actividad principal 2",
];
const arrSecondaryActivities = [
  "Actividad secundaria 1",
  "Actividad secundaria 2",
];
const arrDepartments = ["Departamento 1", "Departamento 2"];
const arrCities = ["Cities 1", "Cities 2"];

const RegisterCompany = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    resetField,
  } = useForm();

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-fourth text-white py-3 px-5 rounded-md flex justify-between items-center">
        <p>Registro de nueva empresa</p>
        <p className="text-sm">Ayuda</p>
      </div>
      <div>
        <div className="bg-seventh py-2 px-5 rounded-t-xl ">
          <p className="color-fourth uppercase text-sm">
            {"> información básica"}
          </p>
        </div>
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl">
          <div className="grid grid-cols-3 gap-5">
            <InputRHF
              type="text"
              label="NIT"
              placeholder="Ingrese NIT"
              {...register("empresa")}
            />
            <InputRHF
              type="text"
              label="Razón Social"
              placeholder="Ingrese Razón Social"
              {...register("razon")}
            />
            <InputRHF
              type="text"
              label="Representante Legal"
              placeholder="Ingrese Representante Legal"
              {...register("empresa")}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Select
              type="text"
              label="Actividad Principal (CIIU)"
              data={arrPrincipalActivities}
              {...register("principalActivities")}
            />
            <Select
              type="text"
              label="Actividad Secundaria (CIIU)"
              data={arrSecondaryActivities}
              {...register("secondaryActivities")}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-seventh py-2 px-5 rounded-t-xl ">
          <p className="color-fourth uppercase text-sm">
            {"> Datos de contacto"}
          </p>
        </div>
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl">
          <div className="grid grid-cols-3 gap-5">
            <InputRHF
              type="text"
              label="Dirección"
              placeholder="Ingrese Dirección de la Empresa"
              {...register("direccion")}
            />
            <InputRHF
              type="text"
              label="Teléfono #1"
              placeholder="Ingrese número de teléfono principal"
              {...register("telefono1")}
            />
            <InputRHF
              type="text"
              label="Teléfono #2"
              placeholder="Ingrese número de teléfono secundario"
              {...register("telefono2")}
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <InputRHF
              type="text"
              label="Correo electrónico	"
              placeholder="Ingrese dirección de correo electrónico"
              {...register("email")}
            />
            <Select
              type="text"
              label="Departamento"
              data={arrDepartments}
              {...register("departments")}
            />
            <Select
              type="text"
              label="Ciudad"
              data={arrCities}
              {...register("cities")}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-seventh py-2 px-5 rounded-t-xl ">
          <p className="color-fourth uppercase text-sm">{"> Misionalidad"}</p>
        </div>
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl">
          <div className="grid grid-cols-2 gap-5">
            <div class="flex items-center border border-gray-300 rounded px-4">
              <label
                for="bordered-radio-1"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900"
              >
                La empresa se dedica a la prestación de servicios de transporte
                terrestre automotor
              </label>
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
            </div>
            <div class="flex items-center border border-gray-300 rounded px-4">
              <label
                for="bordered-radio-2"
                class="w-full py-4 ml-2 text-sm font-medium text-gray-900"
              >
                La empresa se dedica a actividades diferentes al transporte
              </label>
              <input
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-seventh py-2 px-5 rounded-t-xl ">
          <p className="color-fourth uppercase text-sm">
            {"> Tamaño de la organización"}
          </p>
        </div>
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl">
          <div className="grid grid-cols-2 gap-5">
            <div className="border border-gray-300 p-3 rounded-md">
              <p className="text-sm">
                Vehículos automotores (autos, camiones, montacargas, maquinaria,
                etc) o no automotores (bicicletas, patinetas, triciclos o
                similares)
              </p>
              <div className="flex justify-end">
                <div className="text-center w-20 text-xs  font-semibold color-fifth uppercase">
                  Cantidad
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <InputNumberCount
                  text="Cantidad de vehículos propios"
                  {...register("vehiculos1")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos arrendados"
                  {...register("vehiculos2")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos en intermediación o administración"
                  {...register("vehiculos3")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos de contratistas"
                  {...register("vehiculos4")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos en leasing"
                  {...register("vehiculos5")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos en renting"
                  {...register("vehiculos6")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos de los colaboradores puestos al servicio de la organización (se pague o no de rodamiento, combustible o emovolumenes similares)"
                  {...register("vehiculos7")}
                />
                <InputNumberCount
                  text="Total de vehículos de la flota automotor o no automotor"
                  size="text-base"
                  disabled
                  {...register("vehiculos8")}
                />
              </div>
            </div>
            <div className="border border-gray-300 p-3 rounded-md">
              <p className="text-sm">
                Conductores contratados o administrados por la organización
                (independientemente del nombre del cargo, aquellos que conducen
                para cumplir su función)
              </p>
              <div className="flex justify-end">
                <div className="text-center w-20 text-xs  font-semibold color-fifth uppercase">
                  Cantidad
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <InputNumberCount
                  text="Cantidad de trabajadores directos como conductores"
                  {...register("vehiculos_1")}
                />
                <InputNumberCount
                  text="Cantidad de trabajadores (administrativos, directivos o de apoyo), que conducen para desarrollar sus funciones"
                  {...register("vehiculos_2")}
                />
                <InputNumberCount
                  text="Cantidad de contratistas y/o afiliados que conducen para desarrollar sus funciones"
                  {...register("vehiculos_3")}
                />
                <InputNumberCount
                  text="Personal vinculado mediante tercerización, subcontratación, outsourcing o intermediación laboral, que conduce para desarrollar sus funciones"
                  {...register("vehiculos_4")}
                />
                <InputNumberCount
                  text="Otros colaboradores que conducen para desarrollar sus funciones"
                  {...register("vehiculos_5")}
                />
                <InputNumberCount
                  text="Total de conductores contratados o administrados por la organización"
                  size="text-base"
                  disabled
                  {...register("vehiculos_6")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="color-fourth bg-white text-center border border-fourth py-3 rounded-xl text-lg">
        Registrar Empresa
      </div>
    </div>
  );
};

export default RegisterCompany;
