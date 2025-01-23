/* App.jsx: Se encarga del enrutamiento y estructura principal */
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
import "./index.css"; // Cambia según la ubicación de tu CSS principal



export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */} 
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/tarifas" element={<PricingPage />} />
          <Route path="/videoteca" element={<VideosPage />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
