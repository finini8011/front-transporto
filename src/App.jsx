import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./api/store";

import ComplianceCheck from "./pages/admin/ComplianceCheck"
import MainAuth from "./components/layout/menu/MainAuth";
import Login from "./pages/authenticated/Login";
import Register from "./pages/authenticated/Register";
import NotFound from "./pages/authenticated/Notfound"
import Steps from "./pages/steps/Steps";
import Home from './pages/general-views/Home';
import RegisterCompany from "./pages/general-views/RegisterCompany";

const persistor = persistStore(store);

function App() {
  
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login />} />
        </Routes>
        <MainAuth> 
          <Routes>
            <Route path="/registro" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/step" element={<ComplianceCheck/>} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/step/:id" element={<Steps />} />
            <Route path="/register-company" element={<RegisterCompany/>}/>
          </Routes>
          </MainAuth>
        </BrowserRouter>
         </PersistGate>
      </Provider> 
  );
}
export default App;
