import React, { useState, useEffect } from "react";
import InputRHF from "../../components/commons/input/text/InputRHF";
import ButtonPrimary from "../../components/commons/button/ButtonPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../api/features/auth/authSlice";
import {
  useEditUserMutation,
  useGetUserQuery,
} from "../../api/services/auth/apiSlice";

const nivelBasic = [2, 11, 13, 18, 19, 21];
const nivelMedium = [11, 21];

const EditUser = ({ closeModal, userId }) => {
  const { data: dataUsers, isLoading: isLoadingUsers } =
    useGetUserQuery(userId);
  const { register, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: {
      name: "",
      password: "",
      password_confirmation: "",
    },
  });

  const [editUser, { isLoading, error }] = useEditUserMutation();
  const { compania } = useSelector(selectCurrentUser);
  const [stateRegex, setStateRegex] = useState(false);

  const statePassword = watch(["password"])[0];

  const onSubmit = async (dataForm) => {
    //filtrar para obtener solo los forms que sean pasos

    const { password, name, password_confirmation } = dataForm;

    const filterForm = Object.keys(dataForm)
      .filter((key) => key.includes("Paso"))
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: dataForm[key],
        });
      }, {});

    const anyTrueStep = Object.values(filterForm).filter((key) => key === true);

    if (password === "" || name === "") return toast.error("Llenar todos los campos");

    if (anyTrueStep.length == 0)
      return toast.error("Tiene que colocar al menos un permiso.");

    if (password !== password_confirmation)
      return toast.error("Contraseñas diferentes.");

    if (stateRegex)
      return toast.error(
        "La contraseña debe tener 6 caracteres como mínimo, símbolos, números, letra mayúscula y minúscula."
      );

    const filteredKeysAndObj = Object.keys(filterForm)
      .filter((key) => filterForm[key] === true)
      .reduce((obj, key) => {
        obj[key] = true; /*  */
        return obj;
      }, {});
    const formatKeys = Object.keys(filteredKeysAndObj);

    const modifiedArray = formatKeys.map((item) => {
      const numberPart = item.slice(4); // Obtener el número después de "Paso"
      return `Paso ${numberPart}`;
    });

    const payload = {
      payload: {
        name,
        id: dataUsers[0].id,
        password,
        password_confirmation,
        permissions: modifiedArray,
      },
    };

    try {
      await editUser(payload).unwrap();
      toast.success("Se ha actualizado correctamente!");
      closeModal()
    } catch (e) {
      // if (e.data.message === "User credentials not found or not authorized")
      return toast.error("Hubo un error, vuelve a intentarlo");
    }
  };

  const verificarNivel = (number) => {
    if (compania.nivel === "Avanzado") return false;
    else if (compania.nivel === "Intermedio") {
      const existNumber = nivelMedium.includes(number);
      if (existNumber) return true;
      else return false;
    } else {
      const existNumber = nivelBasic.includes(number);
      if (existNumber) return true;
      else return false;
    }
  };

  useEffect(() => {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
    if (statePassword) {
      if (statePassword.trim() !== "") {
        if (regex.test(statePassword)) {
          setStateRegex(false);
        } else {
          setStateRegex(true);
        }
      }
    }
  }, [statePassword]);

  useEffect(() => {
    if (!isLoadingUsers) {
      setValue("name", dataUsers[0].name);
      setValue("email", dataUsers[0].email);
      dataUsers[0].permissions.map((data) => {
        setValue(`Paso${data.id}`, true);
      });
    }
  }, [isLoadingUsers]);

  if (!isLoadingUsers)
    return (
      <form>
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="font-semibold text-lg">Editar usuario</p>
          </div>
          <FontAwesomeIcon
            icon={faX}
            className="w-5 h-5 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <InputRHF
            type="text"
            label="Nombre del usuario"
            placeholder="Ingrese Usuario"
            {...register("name")}
          />
          <InputRHF
            type="text"
            label="Email"
            disabled
            placeholder="Ingresar Email"
            {...register("email")}
          />
          <InputRHF
            type="password"
            label="Contraseña"
            placeholder="Ingrese Contraseña"
            {...register("password")}
          />
          <InputRHF
            type="password"
            label="Confirmar Contraseña"
            placeholder="Confirmar Contraseña"
            {...register("password_confirmation")}
          />
        </div>
        {/* Esto debe ser una arreglo donde se hace un map y solo usas un input ya que asi seria escalable
        sugiero la const  dataCard donde la prop title es el numero del paso  */}
        <div className="grid grid-cols-4  max-h-52 overflow-y-auto overflow-x-hidden mb-3 mt-3">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ].map((data, key) => {
            return (
              <div className="" key={key}>
                <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 flex items-center">
                  Paso {data}
                  <input
                    type="checkbox"
                    disabled={verificarNivel(data)}
                    {...register(`Paso${data}`)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ml-2"
                  />
                </label>
              </div>
            );
          })}
        </div>
        <ButtonPrimary
          loading={isLoading}
          text="Actualizar"
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    );
  else return <p>Cargando..</p>;
};

export default EditUser;
