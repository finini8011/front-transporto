import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
  useGetCIIUQuery,
  useSaveCompanyMutation,
  useGetDepartmentsQuery,
  useLazyGetCitiesOfDepartmentQuery,
  useLazyValidateNITQuery,
} from "../../api/services/company/companyApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../../api/features/auth/authSlice";

import SelectRHF from "../../components/commons/input/select/SelectRHF";
import InputRHF from "../../components/commons/input/text/InputRHF";
import InputNumberCount from "../../components/commons/input/text/InputNumberCount";
import Button from "../../components/commons/button/Button";
import { useOutletContext } from "react-router-dom";

const RegisterCompany = () => {

  const {handleNavigate} = useOutletContext()

  const dispatch = useDispatch();
  const [saveCompany, { isLoading, error }] = useSaveCompanyMutation();
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
  const [validateNIT, { isLoading: isLoadingValidateNIT }] =
    useLazyValidateNITQuery();

  const [dataCities, setDataCities] = useState([]);
  const [stateValidateNIT, setStateValidateNIT] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    resetField,
  } = useForm({
    defaultValues: {
      vehiculos_propios: '0',
      vehiculos_arrendados: '0',
      vehiculos_intermediacion: '0',
      vehiculos_contratistas: '0',
      vehiculos_leasing: '0',
      vehiculos_renting: '0',
      vehiculos_colaboradores: '0',
      conductores_directos: '0',
      conductores_trabajadores: '0',
      conductores_contratistas: '0',
      conductores_tercerizados: '0',
      otros_conductores: '0',
    }
  });

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
    
      if (
        parseInt(vehiculos_propios)<0 ||
        parseInt(vehiculos_arrendados)<0  ||
        parseInt(vehiculos_intermediacion)<0  ||
        parseInt(vehiculos_contratistas)<0  ||
        parseInt(vehiculos_leasing)<0  ||
        parseInt(vehiculos_renting)<0 ||
        parseInt(vehiculos_colaboradores)<0  ||
        parseInt(conductores_directos)<0 ||
        parseInt(conductores_trabajadores)<0  ||
        parseInt(conductores_contratistas)<0  ||
        parseInt(conductores_tercerizados)<0  ||
        parseInt(otros_conductores)<0  
      )
        return toast.error("Los campos del tamaño de la organización no pueden tener valores negativos");

    if (stateValidateNIT) return toast.error("NIT ya registrado, ingrese otro");

    try {
      const {user} =  await saveCompany({
        email,
        cities_id: parseInt(cities_id),
        main_activity_ciiu: parseInt(main_activity_ciiu),
        secondary_activity_ciiu: parseInt(secondary_activity_ciiu),
        nit,
        razon_social,
        // cantidad_vehiculos: parseInt(cantidad_vehiculos),
        // cantidad_conductores: parseInt(cantidad_conductores),
        representante_legal,
        telefono1,
        telefono2,
        direccion,
        misionalidad: misionalidad=== "true" ? true : false,
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
      toast.success("Se ha registrado correctamente!");
      dispatch(setUser(user) );

      setTimeout(() => {
        handleNavigate("/home", true)
      }, 2500);

    } catch (e) {
      // if (e.data.message === "User credentials not found or not authorized")
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

  useEffect(() => {
    if (!isLoadingDepartments) {
      setValue("departments", dataDepartments[0].value);
    }
  }, [isLoadingDepartments]);

  useEffect(() => {
    if (!isLoadingCIIU) {
      setValue("main_activity_ciiu", dataCIIU[0].value);
      setValue("secondary_activity_ciiu", dataCIIU[0].value);
    }
  }, [isLoadingCIIU]);

  useEffect(() => {
    if (watch("departments")) {
      const getCitiesOfDepartments = async () => {
        const { data } = await getCities(parseInt(watch("departments")));
        setDataCities(data);
        setValue("cities_id", data[0].value);
      };
      getCitiesOfDepartments();
    }
  }, [watch("departments")]);

  useEffect(() => {
    if (watch("nit") !== "") {
      const timeoutId = setTimeout(async () => {
        const { data } = await validateNIT([watch("nit")]);
        data === 1 ? setStateValidateNIT(true) : setStateValidateNIT(false);
        data === 1 && toast.error("NIT ya registrado!");
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [watch("nit")]);

  useEffect(() => {
    if (
      watch("vehiculos_propios").length > 0 &&
      watch("vehiculos_arrendados").length > 0 &&
      watch("vehiculos_intermediacion").length > 0 &&
      watch("vehiculos_contratistas").length > 0 &&
      watch("vehiculos_leasing").length > 0 &&
      watch("vehiculos_renting").length > 0 &&
      watch("vehiculos_colaboradores").length > 0
    ) {
      const totalVehiculos =
        parseInt(watch("vehiculos_propios")) +
        parseInt(watch("vehiculos_arrendados")) +
        parseInt(watch("vehiculos_intermediacion")) +
        parseInt(watch("vehiculos_contratistas")) +
        parseInt(watch("vehiculos_leasing")) +
        parseInt(watch("vehiculos_renting")) +
        parseInt(watch("vehiculos_colaboradores"));
      setValue("cantidad_vehiculos", totalVehiculos);
    } else {
      setValue("cantidad_vehiculos", "");
    }
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
    if (
      watch("conductores_directos").length > 0 &&
      watch("conductores_trabajadores").length > 0 &&
      watch("conductores_contratistas").length > 0 &&
      watch("conductores_tercerizados").length > 0 &&
      watch("otros_conductores").length > 0
    ) {
      const total =
        parseInt(watch("conductores_directos")) +
        parseInt(watch("conductores_trabajadores")) +
        parseInt(watch("conductores_contratistas")) +
        parseInt(watch("conductores_tercerizados")) +
        parseInt(watch("otros_conductores"));
      setValue("cantidad_conductores", total);
    } else {
      setValue("cantidad_conductores", "");
    }
  }, [
    watch("conductores_directos"),
    watch("conductores_trabajadores"),
    watch("conductores_contratistas"),
    watch("conductores_tercerizados"),
    watch("otros_conductores"),
  ]);

  return (
    <div>
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
            />
            <SelectRHF
              type="text"
              label="Actividad Secundaria (CIIU)"
              dataApi={dataCIIU}
              {...register("secondary_activity_ciiu")}
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
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl border border-gray-300 ">
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
        <div className="p-5 flex flex-col gap-5  bg-white rounded-b-xl border border-gray-300 ">
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
                  disabled
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
                  disabled
                  {...register("cantidad_conductores")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        text="Registrar Empresa"
        onClick={handleSubmit(onSubmit)}
        loading={isLoading}
      />
    </div>
    {/* <Form title="complemento" inputs={inputs} cols={cols}  buttons={buttons} onSubmit={onSubmit} id={step}/> */}
    </div>
    );
};

export default RegisterCompany;
