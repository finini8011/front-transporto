import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
// import Image from "next/image";

import Input from "../../components/commons/input/text/Input";
import ButtonForm from "../../components/commons/button/ButtonForm";
import {
    useCreateUserMutation,
} from "../../api/services/auth/apiSlice";
import { setToken, setUser } from "../../api/features/auth/authSlice";
import Loading from "../../components/loading/Loading";

// import background from "../public/img/bgModal.png";
// import logo from "../public/img/view1/logo.png";

const Register = () => {
  const [stateRegex, setStateRegex] = useState(false);
  const [stateIgualdad, setStateIgualdad] = useState(false);

    const [createUser, { isLoading, error }] = useCreateUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const statePassword = watch(["password"])[0];
  const stateRepeatPass = watch(["password_confirmation"])[0];

  const cleanForm = () => {
    reset({
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
    });
  };

  const onSubmit= async (data) => {
    const { email, password, name, password_confirmation } = data;
    if (
      email === "" ||
      password === "" ||
      name === "" ||
      password_confirmation === ""
    )
      return toast.error("Llenar todos los campos");
    if (password !== password_confirmation)
      return toast.error("Contraseñas diferentes");
    if (stateRegex)
      return toast.error(
        "La contraseña debe tener 6 caracteres como mínimo, símbolos, números, letra mayúscula y minúscula."
      );
    try {
     const response = await createUser({ email, password, name, password_confirmation }).unwrap();
     console.log(response)
    //   cleanForm();
      return toast.success("Cuenta creada con éxito!");
    } catch (error) {
      return toast.error("Ocurrió un error.");
    }
  };

  useEffect(() => {
    if (statePassword && stateRepeatPass) {
      if (statePassword.trim() !== "" && stateRepeatPass.trim() !== "") {
        if (statePassword === stateRepeatPass) {
          setStateIgualdad(false);
        } else {
          setStateIgualdad(true);
        }
      }
    }
  }, [statePassword, stateRepeatPass]);

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

  return (
    <div className="fullvh lg:h-screen flex items-center justify-center bg-gray-200 text-black">
      <Toaster />
      {/* {isLoading && <Loading text="Cargando.." />}
      {isTriggerLoading && (
        <Loading text="Obteniendo información de usuario.." />
      )} */}
      <div className="flex-col flex items-center gap-10">
        <div className="w-10/12 md:w-96 z-10 bg-white rounded-xl py-8 md:py-14 px-5 md:px-10 shadow-md gap-5 md:gap-10 flex flex-col">
          <h1 className="text-center text-2xl md:text-3xl font-semibold first_color ">
            Registrar usuario
          </h1>
          <div>
            <Input type="text" placeholder="Nombre" {...register("name")} />
            <Input type="email" placeholder="Email" {...register("email")} />
            <Input
              type="password"
              placeholder="Contraseña"
              {...register("password")}
            />
            <Input
              type="password"
              placeholder="Confirmar Contraseña"
              {...register("password_confirmation")}
            />
            {stateRegex && (
              <p className="text-sm">
                La contraseña debe tener 6 caracteres, símbolos, números, letra
                mayúscula y minúscula.
              </p>
            )}
            {stateIgualdad && (
              <p className="text-sm">Las contraseñas son diferentes.</p>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <ButtonForm text="Ingresar" onClick={handleSubmit(onSubmit)} />
            <NavLink to="/" >
              <ButtonForm text="Volver al login" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
