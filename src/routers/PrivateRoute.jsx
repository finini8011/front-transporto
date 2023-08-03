import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import {
    selectCurrentUser,
  } from "../api/features/auth/authSlice";


export const PrivateRoute = ({ children }) => {

    const user = useSelector(selectCurrentUser)
    console.log(user)
    return user
        ? children
        : <Navigate to="/" />
}