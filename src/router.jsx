import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./views/Notfound.jsx";
import Login from "./views/Login.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
