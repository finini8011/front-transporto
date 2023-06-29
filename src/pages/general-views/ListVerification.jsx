import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  useGetCIIUQuery,
  useUpdateCompanyMutation,
  useGetDepartmentsQuery,
  useLazyGetCitiesOfDepartmentQuery,
} from "../../api/services/company/companyApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, setUser } from "../../api/features/auth/authSlice";

import SelectRHF from "../../components/commons/input/select/SelectRHF";
import InputRHF from "../../components/commons/input/text/InputRHF";
import InputNumberCount from "../../components/commons/input/text/InputNumberCount";
import TableListVerification from "../../components/tables/tableListVerification";

const ListVerification = () => {


  const { compania } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [updateCompany] = useUpdateCompanyMutation();
  const [count, setCount] = useState(0);
  const {
    data: dataCIIU,
  } = useGetCIIUQuery();
  const {
    data: dataDepartments,
    error: errorDepartments,
    isLoading: isLoadingDepartments,
  } = useGetDepartmentsQuery();
  const [getCities] =
    useLazyGetCitiesOfDepartmentQuery();

  const [dataCities, setDataCities] = useState([]);
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    if (count > 0) {
      const getCitiesOfDepartments = async () => {
        const { data } = await getCities(parseInt(watch("departments")));
        setDataCities(data);
        // setValue("cities_id", compania.cities_id);
      };
      getCitiesOfDepartments();
    }
    setCount(1);
  }, [watch("departments")]);

  useEffect(() => {
    // console.log(compania);
    setValue("nit", compania.nit);
    setValue("razon_social", compania.razon_social);
    setValue("representante_legal", compania.representante_legal);
    setValue("main_activity_ciiu", compania.main_activity_ciiu);
    setValue("secondary_activity_ciiu", compania.secondary_activity_ciiu);
    setValue("direccion", compania.direccion);
    setValue("telefono1", compania.telefono1);
    setValue("telefono2", compania.telefono2);
    setValue("email", compania.email);
    // setValue("departments", compania.departments_id);
    // setValue("cities_id", compania.cities_id);
    setValue("misionalidad", compania.misionalidad === 1 ? "true" : "false");
    setValue("vehiculos_propios", compania.vehiculos_propios);
    setValue("vehiculos_arrendados", compania.vehiculos_arrendados);
    setValue("vehiculos_intermediacion", compania.vehiculos_intermediacion);
    setValue("vehiculos_contratistas", compania.vehiculos_contratistas);
    setValue("vehiculos_leasing", compania.vehiculos_leasing);
    setValue("vehiculos_renting", compania.vehiculos_renting);
    setValue("vehiculos_colaboradores", compania.vehiculos_colaboradores);
    setValue("conductores_directos", compania.conductores_directos);
    setValue("conductores_contratistas", compania.conductores_contratistas);
    setValue("conductores_tercerizados", compania.conductores_tercerizados);
    setValue("conductores_trabajadores", compania.conductores_trabajadores);
    setValue("otros_conductores", compania.otros_conductores);
  }, []);

  useEffect(() => {
    if (!isLoadingDepartments) {
      setValue("departments", compania.departments_id);
    }
  }, [isLoadingDepartments]);

  useEffect(() => {
    setValue("cities_id", compania.cities_id);
  }, [dataCities]);

  useEffect(() => {
    const totalVehiculos =
      parseInt(watch("vehiculos_propios")) +
      parseInt(watch("vehiculos_arrendados")) +
      parseInt(watch("vehiculos_intermediacion")) +
      parseInt(watch("vehiculos_contratistas")) +
      parseInt(watch("vehiculos_leasing")) +
      parseInt(watch("vehiculos_renting")) +
      parseInt(watch("vehiculos_colaboradores"));
    setValue("cantidad_vehiculos", totalVehiculos);
  }, [
    watch("vehiculos_propios"),
    watch("vehiculos_arrendados"),
    watch("vehiculos_intermediacion"),
    watch("vehiculos_contratistas"),
    watch("vehiculos_leasing"),
    watch("vehiculos_renting"),
    watch("vehiculos_colaboradores"),
  ]);

  useEffect(() => {
    const total =
      parseInt(watch("conductores_directos")) +
      parseInt(watch("conductores_trabajadores")) +
      parseInt(watch("conductores_contratistas")) +
      parseInt(watch("conductores_tercerizados")) +
      parseInt(watch("otros_conductores"));
    setValue("cantidad_conductores", total);
  }, [
    watch("conductores_directos"),
    watch("conductores_trabajadores"),
    watch("conductores_contratistas"),
    watch("conductores_tercerizados"),
    watch("otros_conductores"),
  ]);

  return (
    <div className="p-8">
    <div className="flex flex-col gap-2">
      <Toaster />
      <div className="bg-fourth text-white py-3 px-5 rounded-md flex justify-between items-center">
        <p>Lista de Verificacion</p>
      </div>
      <div>
        <div className="bg-seventh py-2 px-5 rounded-t-xl ">
          <p className="color-fourth uppercase text-sm">
            {"> información básica"}
          </p>
        </div>
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl border border-gray-300 ">
          <div className="grid grid-cols-3 gap-5">
            <InputRHF
              type="text"
              label="NIT"
              placeholder="Ingrese NIT"
              readOnly
              {...register("nit")}
            />
            <InputRHF
              type="text"
              label="Razón Social"
              placeholder="Ingrese Razón Social"
              {...register("razon_social")}
              disabled
            />
            <InputRHF
              type="text"
              label="Representante Legal"
              placeholder="Ingrese Representante Legal"
              {...register("representante_legal")}
              disabled
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <SelectRHF
              type="text"
              label="Actividad Principal (CIIU)"
              dataApi={dataCIIU}
              {...register("main_activity_ciiu")}
              disabled
            />
            <SelectRHF
              type="text"
              label="Actividad Secundaria (CIIU)"
              dataApi={dataCIIU}
              {...register("secondary_activity_ciiu")}
              disabled
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
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl border border-gray-300   ">
          <div className="grid grid-cols-3 gap-5">
            <InputRHF
              type="text"
              label="Dirección"
              placeholder="Ingrese Dirección de la Empresa"
              {...register("direccion")}
              disabled
            />
            <InputRHF
              type="text"
              label="Teléfono #1"
              placeholder="Ingrese número de teléfono principal"
              {...register("telefono1")}
              disabled
            />
            <InputRHF
              type="text"
              label="Teléfono #2"
              placeholder="Ingrese número de teléfono secundario"
              {...register("telefono2")}
              disabled
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <InputRHF
              type="text"
              label="Correo electrónico	"
              placeholder="Ingrese dirección de correo electrónico"
              {...register("email")}
              disabled
            />
            <SelectRHF
              type="text"
              label="Departamento"
              dataApi={dataDepartments}
              {...register("departments")}
              disabled
            />
            <SelectRHF
              type="text"
              label="Ciudad"
              dataApi={dataCities}
              {...register("cities_id")}
              disabled
            />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-seventh py-2 px-5 rounded-t-xl ">
          <p className="color-fourth uppercase text-sm">{"> Misionalidad"}</p>
        </div>
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl border border-gray-300 ">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center border border-gray-300 rounded px-4">
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4 ml-2 text-sm font-medium text-gray-900"
              >
                La empresa se dedica a la prestación de servicios de transporte
                terrestre automotor
              </label>
              <input
                type="radio"
                value={true}
                defaultChecked
                {...register("misionalidad")}
                disabled
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded px-4">
              <label
                htmlFor="bordered-radio-2"
                className="w-full py-4 ml-2 text-sm font-medium text-gray-900"
              >
                La empresa se dedica a actividades diferentes al transporte
              </label>
              <input
                {...register("misionalidad")}
                type="radio"
                value={false}
                disabled
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
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
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl  border border-gray-300 ">
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
                  {...register("vehiculos_propios")}
                  disabled
                />
                <InputNumberCount
                  text="Cantidad de vehículos arrendados"
                  {...register("vehiculos_arrendados")}
                  disabled
                />
                <InputNumberCount
                  text="Cantidad de vehículos en intermediación o administración"
                  {...register("vehiculos_intermediacion")}
                  disabled
                />
                <InputNumberCount
                  text="Cantidad de vehículos de contratistas"
                  {...register("vehiculos_contratistas")}
                  disabled
                />
                <InputNumberCount
                  text="Cantidad de vehículos en leasing"
                  {...register("vehiculos_leasing")}
                  disabled
                />
                <InputNumberCount
                  text="Cantidad de vehículos en renting"
                  {...register("vehiculos_renting")}
                  disabled
                />
                <InputNumberCount
                  text="Cantidad de vehículos de los colaboradores puestos al servicio de la organización (se pague o no de rodamiento, combustible o emovolumenes similares)"
                  {...register("vehiculos_colaboradores")}
                  disabled
                />
                <InputNumberCount
                  text="Total de vehículos de la flota automotor o no automotor"
                  size="text-base"
                  readOnly
                  {...register("cantidad_vehiculos")}
                  disabled
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
                  {...register("conductores_directos")}
                  disabled
                />
                <InputNumberCount
                  text="Cantidad de trabajadores (administrativos, directivos o de apoyo), que conducen para desarrollar sus funciones"
                  {...register("conductores_trabajadores")}
                  disabled
                />
                <InputNumberCount
                  text="Cantidad de contratistas y/o afiliados que conducen para desarrollar sus funciones"
                  {...register("conductores_contratistas")}
                  disabled
                />
                <InputNumberCount
                  text="Personal vinculado mediante tercerización, subcontratación, outsourcing o intermediación laboral, que conduce para desarrollar sus funciones"
                  {...register("conductores_tercerizados")}
                  disabled
                />
                <InputNumberCount
                  text="Otros colaboradores que conducen para desarrollar sus funciones"
                  {...register("otros_conductores")}
                  disabled
                />
                <InputNumberCount
                  text="Total de conductores contratados o administrados por la organización"
                  size="text-base"
                  readOnly
                  {...register("cantidad_conductores")}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TableListVerification/>
    </div>
  );
};

export default ListVerification;