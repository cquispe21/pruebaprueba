import { Routes, Route } from "react-router";
import Inicio from "./componente/Inicio";
import "./App.css";
import Contador from "./componente/Contador";
import Datatable from "./componente/Pagina2";

import ProducPage from "./componente/Producto/producPage";
import Pagina33 from "./componente/pag3";
import UserPage from "./componente/Usuarios";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}>
        <Route path="/contador" element={<Contador />} />
        <Route path="/pagina2" element={<Datatable />} />
        <Route path="/pagina3" element={<Pagina33 />} />
        <Route path="/UserFormularioR" element={<UserPage/>} />
        <Route path="/ProducFroms" element={<ProducPage/>} />
      </Route>
    </Routes>
  );
}
