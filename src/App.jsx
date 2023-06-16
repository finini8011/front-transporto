import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import { store } from "./api/store";

const persistor = persistStore(store);

import Login from "./pages/Login";
import Report from "./pages/Report";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ComplianceCheck from "./pages/admin/ComplianceCheck";
import NotFound from "./pages/Notfound";
import MainAuth from "./components/layout/menu/MainAuth";
import Steps from "./pages/steps/Steps";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/report" element={<Report />} />

            <Route element={<MainAuth />}>
              <Route path="/home" element={<Home />} />
              <Route path="/step" element={<ComplianceCheck />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/step/:id" element={<Steps />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
export default App;
