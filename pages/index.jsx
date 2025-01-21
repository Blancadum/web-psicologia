import PageLayout from "@/components/inpage/PageLayout";
import HeroSection from "../components/HeroSection/HeroSection";
import FAQAccordion from "@/components/faq/faq";
import ContactForm from "@/components/Formularios/Contacto";
import ServicesCardsHomeGrid from "@/components/Services/ServicesCardsHomeGrid";

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Servicios destacados */}
      <section className="container mx-auto py-section px-6 md:px-8 lg:px-12">
        <ServicesCardsHomeGrid />
      </section>

      {/* Preguntas Frecuentes */}
      <section className="section">
        <FAQAccordion
          title="Preguntas Frecuentes"
          description="Encuentra aquí las respuestas a las dudas más frecuentes sobre nuestros servicios."
        />
      </section>

      {/* Formulario de Contacto */}
      <section className="section bg-gray-50 rounded-lg shadow-md">
        <ContactForm />
      </section>
    </PageLayout>
  );
}
