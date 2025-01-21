// pages/index.js
import Head from "next/head";
import Layout from "@/components/layout";
import HeroSection from "../components/HeroSection/HeroSection";
import ReservationButton from "@/components/CTA-Button/CtaBanner";
import ServicesCardsHomeGrid from "@/components/Services/ServicesCardsHomeGrid";
import FAQAccordion from "@/components/faq/faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>Psicología Online | Depresión, Ansiedad y Bienestar Emocional</title>
        <meta
          name="description"
          content="Psicología online para problemas de ansiedad e insomnio, depresión, TCA, anorexia, bulimia, obesidad, fobias, coaching emocional. Atención personalizada para niños, adultos y personas mayores. Terapia familiar sistémica, humanista, cognitivo conductual, psicología centrada en la persona, aceptación y compromiso."
        />
      </Head>

      <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">

      <h1 className="text-h1 text-center">Terapia Online <span className="text-brandPurple">Profesional</span></h1>
      <p className="text-paragraph text-center"> Tener problemas es natural,{" "} <span className="hover:text-brandPurple">atrévete</span> a solucionarlos.</p>
          {/* Hero Section */}
          <HeroSection />

          {/* Servicios Destacados */}
          <h2 className="text-h2">Servicios Destacados</h2>
          <ServicesCardsHomeGrid />

          {/* Sección de CTA adicional */}
          <ReservationButton title={false} />
          <h2 className="text-h2">Preguntas Frecuentes</h2>
          <FAQAccordion />
        </section>
      </Layout>
    </>      
  );
}
