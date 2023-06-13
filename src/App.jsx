import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import { store } from "./api/store";

const persistor = persistStore(store);

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/admin/Home";
import ComplianceCheck from "./pages/admin/ComplianceCheck"
import NotFound from "./pages/Notfound"
import MainAuth from "./components/layout/menu/MainAuth";
import Step3 from "./pages/steps/step3";
// import HomeWork from "./pages/HomeWork";





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
            <Route path="/step3" element={<Step3 />} />

            {/* <Route path="/homework/:id" element={<HomeWork />} /> */}
          </Routes>
          </MainAuth>
        </BrowserRouter>
         </PersistGate>
      </Provider> 
  );
}
export default App;
