import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import {
    selectCurrentUser,
  } from "../api/features/auth/authSlice";


export const PrivateRoute = ({ children }) => {

    const user = useSelector(selectCurrentUser)
    
    return user
        ? children
        : <Navigate to="/" />
}