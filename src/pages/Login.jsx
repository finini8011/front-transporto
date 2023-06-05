import React, {useEffect} from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Image from "next/image";

import Input from "../../components/commons/input/text/Input";
import ButtonForm from "../../components/commons/button/ButtonForm";
import {
  useLoginUserMutation,
} from "../api/services/auth/apiSlice";
import { setToken, setUser } from "../api/features/auth/authSlice";
import Loading from "../../components/loading/Loading";

// import background from "../public/img/bgModal.png";
// import logo from "../public/img/view1/logo.png";
 
const Login = () => {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register, 
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(data)
    if (email === "" || password === "")
      return toast.error("Llenar todos los campos");
    try {

      const {user, token} = await loginUser(data).unwrap();
      dispatch(setToken({ accesstoken: token })); 
      dispatch(setUser(user));
      navigate("/modulo");
    } catch (e) {
      // if (e.data.message === "User credentials not found or not authorized")
        // return toast.error("Usuario no encontrado o no autorizado");
        // return toast.error(e);
      console.log(e)
      return toast.error("Hubo un problema con la sesión");
    }
  };
  
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
            Login
          </h1>
          <div>
            <Input type="email" placeholder="Email" {...register("email")} />
            <Input
              type="password"
              placeholder="Contraseña"
              {...register("password")}
            />
          </div>
          <div className="flex flex-col gap-5">
            {/* <ButtonForm text="Ingresar" onClick={handleSubmit(onSubmit)} /> */}
            <ButtonForm text="Ingresar" onClick={handleSubmit(onSubmit)}  />
            {/* <Link href="/register"> */}
              {/* <ButtonForm text="Registrar" /> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
