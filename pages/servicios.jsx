import Layout from "@/components/layout";
import Head from "next/head";
import ServiceCard from "@/components/Services/ServiceCard";
import ReservationButton from "@/components/CTA-Button/CtaBanner";

export default function Servicios() {
  return (
    <Layout>
      <Head>
        <title>Servicios - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Servicios de psicología online con experiencia en depresión, ansiedad, duelos, TCA y apoyo a familias. Conoce las áreas donde puedo ayudarte."
        />
      </Head>

      <section className="max-w-5xl mx-auto px-4 py-8">
        <h1>
          Servicios de Psicología Online
        </h1>
        <p>
          Ofrezco acompañamiento y orientación en distintas áreas de la salud
          emocional, enfocándome en un trato cercano, seguro y totalmente confidencial.
          Cada proceso es único: trabajaremos con técnicas adaptadas a tus necesidades
          para que avances hacia tu bienestar de manera sostenible.
        </p>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <ReservationButton 
              title={false}/>
      </section>
    </Layout>
  );
}
