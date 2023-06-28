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
import Button from "../../components/commons/button/Button";

const UpdateCompany = () => {
  const { compania } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [updateCompany, { isLoading, error }] = useUpdateCompanyMutation();
  const [count, setCount] = useState(0);
  const {
    data: dataCIIU,
    error: errorCIIU,
    isLoading: isLoadingCIIU,
  } = useGetCIIUQuery();
  const {
    data: dataDepartments,
    error: errorDepartments,
    isLoading: isLoadingDepartments,
  } = useGetDepartmentsQuery();
  const [getCities, { isLoading: isLoadingCities }] =
    useLazyGetCitiesOfDepartmentQuery();

  const [dataCities, setDataCities] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    resetField,
  } = useForm();

  const onSubmit = async (dataForm) => {
    const {
      cities_id,
      direccion,
      cantidad_vehiculos,
      cantidad_conductores,
      email,
      main_activity_ciiu,
      nit,
      representante_legal,
      razon_social,
      misionalidad,
      secondary_activity_ciiu,
      telefono1,
      telefono2,
      vehiculos_propios,
      vehiculos_arrendados,
      vehiculos_intermediacion,
      vehiculos_contratistas,
      vehiculos_leasing,
      vehiculos_renting,
      vehiculos_colaboradores,
      conductores_directos,
      conductores_trabajadores,
      conductores_contratistas,
      conductores_tercerizados,
      otros_conductores,
    } = dataForm;

    if (
      nit === "" ||
      cantidad_conductores === "" ||
      cantidad_vehiculos === "" ||
      razon_social === "" ||
      direccion === "" ||
      telefono1 === "" ||
      representante_legal === "" ||
      email === ""
    )
      return toast.error("Llenar todos los campos del formulario");

    try {
      const { user } = await updateCompany({
        email,
        cities_id: parseInt(cities_id),
        main_activity_ciiu: parseInt(main_activity_ciiu),
        secondary_activity_ciiu: parseInt(secondary_activity_ciiu),
        nit,
        razon_social,
        representante_legal,
        telefono1,
        telefono2,
        direccion,
        misionalidad: misionalidad === "true" ? true : false,
        vehiculos_propios: parseInt(vehiculos_propios),
        vehiculos_arrendados: parseInt(vehiculos_arrendados),
        vehiculos_intermediacion: parseInt(vehiculos_intermediacion),
        vehiculos_contratistas: parseInt(vehiculos_contratistas),
        vehiculos_leasing: parseInt(vehiculos_leasing),
        vehiculos_renting: parseInt(vehiculos_renting),
        vehiculos_colaboradores: parseInt(vehiculos_colaboradores),
        conductores_directos: parseInt(conductores_directos),
        conductores_trabajadores: parseInt(conductores_trabajadores),
        conductores_contratistas: parseInt(conductores_contratistas),
        conductores_tercerizados: parseInt(conductores_tercerizados),
        otros_conductores: parseInt(otros_conductores),
      }).unwrap();
      dispatch(setUser(user));
      toast.success("Se ha actualizado correctamente!");
      setTimeout(() => {
        navigate("/home");
      }, 2500);
    } catch (e) {
      // if (e.data.message === "User credentials not found or not authorized")
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

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
    <div className="flex flex-col gap-2">
      <Toaster />
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
            />
            <InputRHF
              type="text"
              label="Representante Legal"
              placeholder="Ingrese Representante Legal"
              {...register("representante_legal")}
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
            <SelectRHF
              type="text"
              label="Departamento"
              dataApi={dataDepartments}
              {...register("departments")}
            />
            <SelectRHF
              type="text"
              label="Ciudad"
              dataApi={dataCities}
              {...register("cities_id")}
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
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
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
                />
                <InputNumberCount
                  text="Cantidad de vehículos arrendados"
                  {...register("vehiculos_arrendados")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos en intermediación o administración"
                  {...register("vehiculos_intermediacion")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos de contratistas"
                  {...register("vehiculos_contratistas")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos en leasing"
                  {...register("vehiculos_leasing")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos en renting"
                  {...register("vehiculos_renting")}
                />
                <InputNumberCount
                  text="Cantidad de vehículos de los colaboradores puestos al servicio de la organización (se pague o no de rodamiento, combustible o emovolumenes similares)"
                  {...register("vehiculos_colaboradores")}
                />
                <InputNumberCount
                  text="Total de vehículos de la flota automotor o no automotor"
                  size="text-base"
                  readOnly
                  {...register("cantidad_vehiculos")}
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
                />
                <InputNumberCount
                  text="Cantidad de trabajadores (administrativos, directivos o de apoyo), que conducen para desarrollar sus funciones"
                  {...register("conductores_trabajadores")}
                />
                <InputNumberCount
                  text="Cantidad de contratistas y/o afiliados que conducen para desarrollar sus funciones"
                  {...register("conductores_contratistas")}
                />
                <InputNumberCount
                  text="Personal vinculado mediante tercerización, subcontratación, outsourcing o intermediación laboral, que conduce para desarrollar sus funciones"
                  {...register("conductores_tercerizados")}
                />
                <InputNumberCount
                  text="Otros colaboradores que conducen para desarrollar sus funciones"
                  {...register("otros_conductores")}
                />
                <InputNumberCount
                  text="Total de conductores contratados o administrados por la organización"
                  size="text-base"
                  readOnly
                  {...register("cantidad_conductores")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        text="Actualizar Empresa"
        onClick={handleSubmit(onSubmit)}
        loading={isLoading}
      />
    </div>
  );
};

export default UpdateCompany;
