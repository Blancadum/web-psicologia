import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; // React Router para navegación interna

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo como imagen */}
        <Link to="/" aria-label="Ir al inicio">
          <img
            src="/images/logo.png"
            alt="Logo de la página"
            className="h-12 w-auto"
          />
        </Link>

        {/* Botón de menú hamburguesa */}
        <button
          className="text-3xl focus:outline-none text-brandPurple md:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen} // Mejora de accesibilidad
          aria-label="Abrir o cerrar menú"
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <nav
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
            w-2/3 p-6 flex flex-col gap-4 z-40
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:flex-row md:w-auto md:p-0 md:shadow-none md:flex`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {[
              { to: "/", label: "Inicio" },
              { to: "/servicios", label: "Servicios" },
              { to: "/tarifas", label: "Tarifas" },
              { to: "/sobre-mi", label: "Quién soy" },
              { to: "/videoteca", label: "Videos" },
              { to: "/blog", label: "Blog" },
              { to: "/contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-lg text-gray-700 hover:text-gradient transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
