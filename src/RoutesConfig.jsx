import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import PageNotFound from "./pages/PageNotFound";

function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/kasa" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:logementId" element={<Logement />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default ConfigRoutes;