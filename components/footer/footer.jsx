// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Psicología Online. Todos los derechos reservados.
        </p>
        
        <div className="mt-2 flex justify-center gap-4">
          {/* Ejemplo de enlaces (cámbialos a las rutas que necesites) */}
          <Link 
            href="/politica-privacidad" 
            className="text-sm text-gray-600 hover:text-brandPink transition-colors"
          >
            Política de Privacidad
          </Link>
          <Link 
            href="/terminos-condiciones" 
            className="text-sm text-gray-600 hover:text-brandPink transition-colors"
          >
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}