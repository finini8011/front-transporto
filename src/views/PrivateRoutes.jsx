import { Navigate } from "react-router-dom"

const PrivateRoutes = ({children}) => {
    let auth = {'token': true}
    return (
        auth.token ? children : <Navigate to="/inicio" />
    )
}

export default PrivateRoutes