import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import NotFound from "./views/Notfound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import UserForm from "./views/UserForm.jsx";
import Preparacion from "./views/Preparacion.jsx";
import Planificacion from "./views/Planificacion.jsx";
import Implementacion from "./views/Implementacion.jsx";
import Seguimiento from "./views/Seguimiento.jsx";
import Mejora from "./views/Mejora.jsx";
import Informes from "./views/Informes.jsx";
import Calendario from "./views/Calendario.jsx";
import Inicio from "./views/Inicio.jsx";
import Registrarempresa from "./views/Registrarempresa.jsx";
import Steps from "./views/Steps.jsx";
import Colaboradores from "./views/Colaboradores.jsx";
import ListaVerificacion from "./views/ListaVerificacion.jsx";
import Test from "./views/Test.jsx";
import Usuarios from "./views/Usuarios.jsx";
import PrivateRoutes from "./views/PrivateRoutes.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/login" />
            },
            {
                path: '/login',
                element: <Login />
            }, 
            {
                path: '/signup',
                element: <Signup />
            }, 
            {
                path: '/test',
                element: <Test />
            }
        ]
    },
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/inicio" />
            },
            {
                path: '/inicio',
                element: <Inicio />
            },
            {
                path: '/steps/:id',
                element: <Steps />
            },
            {
                path: '/preparacion',
                element: <Preparacion />
            },
            {
                path: '/planificacion',
                element: <Planificacion />
            },
            {
                path: '/implementacion',
                element: <Implementacion />
            },
            {
                path: '/seguimiento',
                element: <Seguimiento />
            },
            {
                path: '/mejora',
                element: <Mejora />
            },
            {
                path: '/informes',
                element: <Informes />
            },
            {
                path: '/calendario',
                element: <Calendario />
            },
            {
                path: '/inicio',
                element: <Inicio />
            },
            {
                path: '/registrarempresa',
                element: <Registrarempresa />
            },
            {
                path: '/colaboradores',
                element: <Colaboradores />
            },
            {
                path: '/listaverificacion',
                element: <ListaVerificacion />
            },
            {
                path: '/usuarios',
                element: <PrivateRoutes><Usuarios /></PrivateRoutes> 
                
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
