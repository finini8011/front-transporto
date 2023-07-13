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

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/report" element={<Report />} />
            <Route path="/report-list" element={<ListVerification />} />
            <Route element={<MainAuth />}>
              <Route path="/home" element={<Home />} />
              <Route path="/step" element={<ComplianceCheck />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/step/:id" element={<Steps />} />
              <Route path="/register-company" element={<RegisterCompany/>}/>
              <Route path="/update-company" element={<UpdateCompany/>}/>
              <Route path="/list-verification" element={<ListVerification/>}/>
              <Route path="/informes" element={<Informes/>}/>
              <Route path="/calendar" element={<CalendarPage/>}/>
              <Route path="/guide" element={<Guide/>}/>

              <Route path="/planificacion" element={<Planificacion/>}/>
              <Route path="/mejora" element={<Mejora/>}/>
              <Route path="/implementacion" element={<Implementacion/>}/>
              <Route path="/seguimiento" element={<Seguimiento/>}/>
            </Route>         
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
export default App;
