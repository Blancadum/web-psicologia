// components/ServiceCardHome.js
import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function ServicesCardsHome() {
  return (
    <section className="bg-white text-center py-sectionPadding px-sectionPadding animate-fadeInUp">
 
        {/* Título de la sección */}
        <h2>Servicios Destacados</h2>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Terapia Individual"
            description="Sesiones online personalizadas para manejar ansiedad, depresión o duelos. Aprende herramientas únicas para gestionar tus emociones y recuperar el equilibrio emocional."
          />
          <ServiceCard
            title="Terapia Familiar"
            description="Apoyo integral para superar conflictos familiares o problemas escolares. Un enfoque que combina lo emocional y lo académico para fortalecer los lazos."
          />
          <ServiceCard
            title="Enfoque holístico"
            description="La psicología enfocada en la persona (no al revés). Intervención 100% personalizada a tus necesidades."
            link="/blog/enfoque-holistico"
          />
          <ServiceCard
            title="Problemas emocionales"
            description="Intervención especializada en cualquier problema emocional que te impida alcanzar la autorrealización."
            link="/blog/problemas-emocionales"
          />
          <ServiceCard
            title="Terapia online"
            description="Intervención especializada en cualquier problema emocional que te impida alcanzar la autorrealización."
            link="/blog/terapia-online"
          />
        </div>

        {/* Enlace a más servicios */}
        <div className="mt-8">
          <Link href="/servicios" className="text-lg text-brandPurple hover:underline">
            Ver más servicios
          </Link>
        </div>
    </section>
  );
}
