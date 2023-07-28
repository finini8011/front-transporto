import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./api/store";

import Report from "./pages/Report";
import Register from "./pages/authenticated/Register";
import NotFound from "./pages/authenticated/Notfound";
import ComplianceCheck from "./pages/admin/ComplianceCheck"
import MainAuth from "./components/layout/menu/MainAuth";
import Login from "./pages/authenticated/Login";
import Steps from "./pages/steps/Steps";
import Home from './pages/general-views/Home';
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

const persistor = persistStore(store);

function App() {


  const checkLogin = (instanceStore, element) => {
    const { auth } = instanceStore.getState();
    const { authState } = auth;
    console.log(auth.authState.user?.id, "usuario")
    return authState.user?.id ? element : <Login />;
    // Asumiendo que el id esta en null al hacer logauth
  }

  const checkAdmin = (instanceStore, element) => {
    const { auth } = instanceStore.getState();
    const { authState } = auth;
    return authState.user.permissions.length ===0 ? element : <Home />;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route element={checkLogin(store, <MainAuth />)}>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/report" element={<Report />} />
              <Route exact path="/report-list" element={<ListVerification />} />
              <Route exact path="/step" element={<ComplianceCheck />} />
              <Route exact path="/step/:id" element={<Steps />} />
              <Route exact path="/register-company" element={checkAdmin(store, <RegisterCompany />)} />
              <Route exact path="/update-company" element={checkAdmin(store, <UpdateCompany />)} />
              <Route exact path="/list-verification" element={<ListVerification />} />
              <Route exact path="/informes" element={checkAdmin(store, <Informes />)} />
              <Route exact path="/calendar" element={<CalendarPage />} />
              <Route exact path="/guide" element={<Guide />} />
              <Route exact path="/users" element={checkAdmin(store, <Users />)} />
              <Route exact path="/planificacion" element={<Planificacion />} />
              <Route exact path="/mejora" element={<Mejora />} />
              <Route exact path="/implementacion" element={<Implementacion />} />
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
