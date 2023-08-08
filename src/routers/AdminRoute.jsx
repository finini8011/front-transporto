import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import {
    selectCurrentUser,
  } from "../api/features/auth/authSlice";


export const AdminRoute = ({ children }) => {



    const user = useSelector(selectCurrentUser)
    
    return user?.permissions?.length === 0
        ? children
        : <Navigate to="/home" />
}