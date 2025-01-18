// pages/index.js
import Head from "next/head";
import Layout from "@/components/layout";
import HeroSection from "../components/HeroSection/HeroSection";
import ReservationButton from "@/components/CTA-Button/CtaBanner";
import ServicesCardsHome from "@/components/Services/ServicesCardsHome";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Psicología Online | Depresión, Ansiedad y Bienestar Emocional</title>
        <meta
          name="description"
          content="Psicología online para problemas de ansiedad e insomnio, depresión, TCA, anorexia, bulimia, obesidad, fobias, coaching emocional. Atención personalizada para niños, adultos y personas mayores. Terapia familiar sistémica, humanista, cognitivo conductual, psicología centrada en la persona, aceptación y compromiso."
        />
      </Head>
      <section className="bg-white text-center py-sectionPadding px-sectionPadding animate-fadeInUp">
      <div className="max-w-section mx-auto">
      {/* Sección Hero */}
      <HeroSection />
      <ServicesCardsHome />

      {/* Sección de CTA adicional (opcional) */}
      <ReservationButton 
      title={false}/>
      </div>
      </section>
    </Layout>
  );
}
