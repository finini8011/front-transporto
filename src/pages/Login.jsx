import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { useLoginUserMutation } from "../api/services/auth/apiSlice";
import { setToken, setUser } from "../api/features/auth/authSlice";
// import Image from "next/image";

import InputLogin from "../components/commons/input/text/InputLogin";
import ButtonForm from "../components/commons/button/ButtonForm";
import ButtonLoading from "../components/commons/button/ButtonLoading";

import Loading from "../components/loading/Loading";
import logo from "/logo.jpg";

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
    if (email === "" || password === "")
      return toast.error("Llenar todos los campos");
    try {
      const { user, token } = await loginUser(data).unwrap();
      dispatch(setToken({ accesstoken: token }));
      dispatch(setUser(user));
      navigate("/home");
    } catch (e) {
      // if (e.data.message === "User credentials not found or not authorized")
      // return toast.error("Usuario no encontrado o no autorizado");
      // return toast.error(e);
      console.log(e);
      return toast.error("Hubo un problema con la sesión");
    }
  };

  return (
    <section className="bg-[#e8ecee] ">
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* {isLoading && <Loading text="Cargando.." />}
      {isTriggerLoading && (
        <Loading text="Obteniendo información de usuario.." />
      )} */}

        <img className="w-96 mb-4" src={logo} alt="logo"></img>
        <div className="flex-col flex items-center gap-10 w-96">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Iniciar sesión
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <InputLogin
                  type="email"
                  label="Email"
                  placeholder="name@company.com"
                  {...register("email")}
                />
                <InputLogin
                  label="Password"
                  type="password"
                  placeholder="°°°°°°°°°"
                  {...register("password")}
                />

                {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}

                {/* <ButtonForm text="Ingresar" onClick={handleSubmit(onSubmit)} /> */}
                {isLoading ? (
                  <ButtonLoading />
                ) : (
                  <ButtonForm
                    text="Ingresar"
                    onClick={handleSubmit(onSubmit)}
                  />
                )}

                {/* <NavLink to="/registro" passHref>
              <ButtonForm text="Registrar" />
            </NavLink> */}
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
