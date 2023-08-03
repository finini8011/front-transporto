import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import {
    selectCurrentUser,
  } from "../api/features/auth/authSlice";


export const PublicRoute = ({ children }) => {

    const user = useSelector(selectCurrentUser)
    
    return user
        ? <Navigate to="/home" />
        : children
}