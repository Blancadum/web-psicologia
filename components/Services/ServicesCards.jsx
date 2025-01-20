import React from "react";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

export default function ServicesCardsHome() {
  return (
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
        <Link href="/servicios" className="text-lg text-brandPurple hover:underline">
          Ver más servicios</Link>
  );
}
