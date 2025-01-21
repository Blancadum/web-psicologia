// components/ServiceCardHome.js
import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function ServicesCardsHomeGrid() {
  return (
    <section className="container mx-auto py-section px-6 md:px-12 lg:px-16 animate-fadeInUp">
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

      <div className="mt-8 text-center">
        <Link href="/servicios" className="text-lg text-brandPurple hover:underline">
          Ver más servicios
        </Link>
      </div>
    </section>
  );
}
