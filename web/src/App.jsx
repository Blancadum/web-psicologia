import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/blog";
import ContactPage from "./pages/contacto";
import Servicios from "./pages/servicios";
import PricingPage from "./pages/tarifas";
import SobreMi from "./pages/sobre-mi";
import VideosPage from "./pages/videoteca";
import TerapiaFamiliarService from "./pages/servicios/terapia-familiar";
import RegisterPage  from "./pages/registro";
import LoginPage from "./pages/login";
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarifas" element={<PricingPage />} />
          <Route path="/videoteca" element={<VideosPage />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="pages/servicios/terapia-familiar" element={<TerapiaFamiliarService />} />
          <Route path="/registro" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}


