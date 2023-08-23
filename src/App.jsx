import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./api/store";

import Report from "./pages/Report";
import Register from "./pages/authenticated/Register";
import NotFound from "./pages/authenticated/Notfound";
import ComplianceCheck from "./pages/admin/ComplianceCheck";
import MainAuth from "./components/layout/menu/MainAuth";
import Login from "./pages/authenticated/Login";
import StepsList from "./pages/steps/StepsList";
import Home from "./pages/general-views/Home";
import RegisterCompany from "./pages/general-views/RegisterCompany";
import UpdateCompany from "./pages/general-views/UpdateCompany";
import ListVerification from "./pages/general-views/ListVerification";
import Informes from "./pages/general-views/Informes";
import Guide from "./pages/general-views/Guide";

import Implementacion from "./pages/general-views/Fases/Implementacion";
import Mejora from "./pages/general-views/Fases/Mejora";
import Planificacion from "./pages/general-views/Fases/Planificacion";
import Seguimiento from "./pages/general-views/Fases/Seguimiento";
import CalendarPage from "./pages/general-views/CalendarPage";
import Users from "./pages/general-views/Users";

import { PrivateRoute } from "./routers/PrivateRoute";
import { PublicRoute } from "./routers/PublicRoute";
import { AdminRoute } from "./routers/AdminRoute";

const persistor = persistStore(store);

function App() {     


  //funcion para controlar la inactividad del usuario.
/*   const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleLogout, 3000); // 5 minutos de inactividad antes de cerrar sesión (300000 milisegundos)
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
      alert("Tu sesión ha expirado debido a la inactividad.");
    };

    const handleUserActivity = () => {
      resetTimeout();
    };

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    resetTimeout();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
    };
  }, []);  */    

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route exact path="/not-found" element={<NotFound/>} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/report-list" element={ <PrivateRoute><ListVerification /> </PrivateRoute>} /> 
            <Route
              element={
                <PrivateRoute>
                  <MainAuth />
                </PrivateRoute>
              }
            >
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/report" element={<Report />} />
              <Route exact path="/step" element={<ComplianceCheck />} />
              <Route exact path="/step/:id" element={<StepsList />} />
              <Route
                exact
                path="/register-company"
                element={
                  <AdminRoute>
                    <RegisterCompany />
                  </AdminRoute>
                }
              />
              <Route
                exact
                path="/update-company"
                element={
                  <AdminRoute>
                    <UpdateCompany />
                  </AdminRoute>
                }
              />
              <Route
                exact
                path="/list-verification"
                element={<ListVerification />}
              />
              <Route
                exact
                path="/informes"
                element={
                  <AdminRoute>
                    <Informes />
                  </AdminRoute>
                }
              />
              <Route exact path="/calendar" element={<CalendarPage />} />
              <Route exact path="/guide" element={<Guide />} />
              <Route
                exact
                path="/users"
                element={
                  <AdminRoute>
                    <Users />
                  </AdminRoute>
                }
              />
              <Route exact path="/planificacion" element={<Planificacion />} />
              <Route exact path="/mejora" element={<Mejora />} />
              <Route
                exact
                path="/implementacion"
                element={<Implementacion />}
              />
              <Route exact path="/seguimiento" element={<Seguimiento />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
export default App;
