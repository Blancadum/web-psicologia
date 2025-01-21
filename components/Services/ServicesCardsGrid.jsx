import { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesCardsGrid() {
  const [selectedService, setSelectedService] = useState(null); // Estado inicial: sin servicio seleccionado

  // Lista de servicios
  const services = [
    {
      id: 1,
      title: "Terapia Individual",
      description:
        "Aprende herramientas personalizadas para gestionar tus emociones y recuperar el equilibrio emocional.",
      link: "/servicios/terapia-individual",
    },
    {
      id: 2,
      title: "Problemas de Pareja",
      description:
        "Si tenéis dificultades de pareja, trabajaremos en mejorar la comunicación y fortalecer el vínculo mediante estrategias adaptadas a vuestras necesidades.",
      link: "/servicios/terapia-pareja",
    },
    {
      id: 3,
      title: "Terapia Familiar",
      description:
        "Un plan adaptado a las necesidades específicas de cada familia.",
      link: "/servicios/terapia-familiar",
    },
    {
      id: 4,
      title: "Terapia Infantojuvenil",
      description:
        "Si tu hijo/a necesita algún tipo de acompañamiento en su desarrollo debido a alguna dificultad que se resiste.",
      link: "/servicios/terapia-infantil",
    },
    {
      id: 5,
      title: "Coaching para Bariátricos",
      description:
        "Preparación psicológica antes y después de una operación bariátrica. Trabajamos autoestima, hábitos saludables y adaptación al cambio.",
      link: "/servicios/coaching-bariatrico",
    },
    {
      id: 6,
      title: "Trastornos Alimentarios",
      description:
        "Intervención especializada en trastornos de la conducta alimentaria (TCA) como anorexia o bulimia.",
      link: "/servicios/tca",
    },
    {
      id: 7,
      title: "Fobia Escolar",
      description:
        "Asesoría en rutinas de estudio, organización y manejo de estrés.",
      link: "/servicios/fobia-escolar",
    },
  ];

  // Encontrar el servicio seleccionado
  const selectedCard = selectedService
    ? services.find((service) => service.id === parseInt(selectedService))
    : null;

  return (
    <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
      {/* Desplegable para seleccionar un servicio */}

      <div className="text-center mb-8">
        <label htmlFor="service-select" className="block mb-2 text-lg font-medium text-gray-700">
      <h1>Nuestros servicios</h1>
      <p className="text-paragraph text-center">
            Descubre los servicios que te ayudarán a alcanzar el bienestar emocional y superar los desafíos de la vida diaria.
          </p>
        </label>
        
        <select
          id="service-select"
          onChange={(e) => setSelectedService(e.target.value)}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brandPurple focus:border-brandPurple block w-1/2 mx-auto p-2.5"
        >
          <option value="">-- Selecciona un servicio --</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Mostrar tarjeta seleccionada */}
      {selectedCard && (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          <ServiceCard
            key={selectedCard.id}
            title={selectedCard.title}
            description={selectedCard.description}
            link={selectedCard.link}
          />
        </div>
      )}
    </section>
  );
}
