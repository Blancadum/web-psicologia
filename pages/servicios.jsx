import Layout from "@/components/layout";
import ServicesCardsGrid from "@/components/Services/ServicesCardsGrid";
import ReservationButton from "@/components/CTA-Button/CtaBanner";
import Head from "next/head";

export default function Servicios() {
  return (
    <>
      {/* Metadata */}
      <Head>
        {/* Título */}
        <title>Servicios de Psicología Online - Blanca de Uña Martín</title>

        {/* Descripción para SEO */}
        <meta
          name="description"
          content="Servicios de psicología online especializados en depresión, ansiedad, TCA, terapia familiar, problemas de pareja y más. Sesiones personalizadas con Blanca de Uña Martín."
        />

        {/* Palabras clave */}
        <meta
          name="keywords"
          content="psicología online, terapia individual, terapia de pareja, coaching bariátrico, trastornos alimentarios, psicóloga Blanca de Uña Martín, terapia familiar, bienestar emocional"
        />

        {/* Autor */}
        <meta name="author" content="Blanca de Uña Martín" />

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="Servicios de Psicología Online - Blanca de Uña Martín" />
        <meta
          property="og:description"
          content="Explora los servicios de psicología online especializados en ansiedad, depresión, TCA y más. Sesiones personalizadas para tu bienestar emocional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tu-sitio-web.com/servicios" />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/servicios-psicologia.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios de Psicología Online - Blanca de Uña Martín" />
        <meta
          name="twitter:description"
          content="Explora los servicios de psicología online especializados en ansiedad, depresión, TCA y más. Sesiones personalizadas para tu bienestar emocional."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/servicios-psicologia.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Contenido principal */}
      <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
      <h1 className="text-h1 text-center">Servicios de Psicología Online</h1>
      <ServicesCardsGrid/>
          {/* Botón de llamada a la acción */}
          <div className="mt-8 text-center">
            <ReservationButton showTitle={false} />
          </div>
        </section>
      </Layout>
    </>
  );
}
