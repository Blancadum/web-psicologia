import Layout from "@/components/layout";
import ServiceCard from "@/components/Services/ServiceCard";
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
          {/* Grid de servicios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ServiceCard
              title="Terapia Individual"
              description="Aprende herramientas personalizadas para gestionar tus emociones y recuperar el equilibrio emocional."
              link="/servicios/sesiones-individuales"
            />
            <ServiceCard
              title="Problemas de Pareja"
              description="Si tenéis dificultades de pareja, trabajaremos en mejorar la comunicación y fortalecer el vínculo mediante estrategias adaptadas a vuestras necesidades."
              link="/servicios/terapia-pareja"
            />
            <ServiceCard
              title="Terapia Infantojuvenil"
              description="Si tu hijo/a necesita algún tipo de acompañamiento en su desarrollo debido a alguna dificultad que se resiste."
              link="/servicios/infantojuvenil"
            />
            <ServiceCard
              title="Coaching para Bariátricos"
              description="Preparación psicológica antes y después de una operación bariátrica. Trabajamos autoestima, hábitos saludables y adaptación al cambio."
              link="/servicios/coaching-bariatrico"
            />
            <ServiceCard
              title="Trastornos Alimentarios"
              description="Intervención especializada en trastornos de la conducta alimentaria (TCA) como anorexia o bulimia. Reconstruimos una relación positiva con la comida y el cuerpo."
              link="/servicios/tca"
            />
            <ServiceCard
              title="Fobia Escolar"
              description="Asesoría en rutinas de estudio, organización y manejo de estrés. Ideal para estudiantes y familias en busca de apoyo integral."
              link="/servicios/fobia-escolar"
            />
            <ServiceCard
              title="Acoso Escolar"
              description="Si sospechas que tu hijo/a sufre acoso escolar, es importante intervenir a tiempo."
              link="/servicios/bullying"
            />
            <ServiceCard
              title="Terapia Familiar"
              description="Un plan adaptado a las necesidades específicas de cada familia."
              link="/servicios/familiar"
            />
            <ServiceCard
              title="Habilidades Sociales y Autoestima"
              description="Programas para fortalecer la confianza y mejorar las relaciones interpersonales, promoviendo una autoestima saludable."
              link="/servicios/habilidades-sociales"
            />
            <ServiceCard
              title="Orientación Laboral y Tutoría Vocacional"
              description="Ayuda personalizada para encontrar tu dirección profesional según tus habilidades e intereses."
              link="/servicios/orientacion-laboral"
            />
            <ServiceCard
              title="Atención al TDAH"
              description="Estrategias prácticas para mejorar la atención, organización y manejo emocional en niños y adultos."
              link="/servicios/tdah"
            />
            <ServiceCard
              title="Altas Capacidades y Dobles Excepcionalidades"
              description="Acompañamiento para el desarrollo emocional y social de personas con altas capacidades o necesidades específicas."
              link="/servicios/altas-capacidades"
            />
            <ServiceCard
              title="Infidelidades y Reconstrucción de Pareja"
              description="Procesos para superar las secuelas emocionales y restaurar la confianza en la relación."
              link="/servicios/infidelidades"
            />
            <ServiceCard
              title="Gestión del Estrés y Burnout"
              description="Técnicas efectivas para manejar el estrés laboral y prevenir el agotamiento profesional."
              link="/servicios/estres-burnout"
            />
            <ServiceCard
              title="Duelos y Pérdidas Traumáticas"
              description="Acompañamiento emocional para procesar pérdidas significativas y avanzar hacia la aceptación."
              link="/servicios/duelos"
            />
          </div>

          {/* Botón de llamada a la acción */}
          <div className="mt-8 text-center">
            <ReservationButton showTitle={false} />
          </div>
        </section>
      </Layout>
    </>
  );
}
