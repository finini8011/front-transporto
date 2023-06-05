import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

import { store } from "./api/store";

const persistor = persistStore(store);

import Login from "./pages/Login";
// import Modulos from "./pages/admin/Modulos";
import Modulo from "./pages/admin/Modulo"
import NotFound from "./pages/Notfound"
import Prueba from "./pages/admin/Prueba"
// import HomeWork from "./pages/HomeWork";


function App() {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/modulo" element={<Modulo />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/prueba" element={<Prueba />} />
            {/* <Route path="/homework/:id" element={<HomeWork />} /> */}
          </Routes>
        </BrowserRouter>
         </PersistGate>
      </Provider> 
  );
}
export default App;
