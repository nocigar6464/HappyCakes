import { Routes, Route } from "react-router-dom";
//estilos de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//vistas
import HomePage from "./views/HomePage";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/error" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
