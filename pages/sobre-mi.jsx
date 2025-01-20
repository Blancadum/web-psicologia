import Layout from "@/components/layout";
import CTABanner from "@/components/CTA-Button/CtaBanner";
import Head from "next/head";

export default function SobreMi() {
  return (
    <>
      {/* Metadata para la página */}
      <Head>
        {/* Título de la página */}
        <title>Sobre mí - Blanca de Uña Martín</title>

        {/* Descripción para SEO */}
        <meta
          name="description"
          content="Conoce a Blanca de Uña Martín, psicóloga especializada en terapias online, depresión, ansiedad y más. Descubre su enfoque profesional y humano en cada sesión."
        />

        {/* Palabras clave */}
        <meta
          name="keywords"
          content="psicología online, terapia, ansiedad, depresión, Blanca de Uña Martín, psicóloga, terapia personalizada, bienestar emocional"
        />

        {/* Autor */}
        <meta name="author" content="Blanca de Uña Martín" />

        {/* Configuración para compartir en redes sociales (Open Graph) */}
        <meta property="og:title" content="Sobre mí - Blanca de Uña Martín" />
        <meta
          property="og:description"
          content="Conoce a Blanca de Uña Martín, psicóloga especializada en terapias online, ansiedad, depresión y bienestar emocional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tu-sitio-web.com/sobre-mi" />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/blanca-de-una-martin.jpg"
        />

        {/* Configuración para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre mí - Blanca de Uña Martín" />
        <meta
          name="twitter:description"
          content="Conoce a Blanca de Uña Martín, psicóloga especializada en terapias online, ansiedad, depresión y bienestar emocional."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/blanca-de-una-martin.jpg"
        />

        {/* Configuración de favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Contenido principal */}
      <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
      <h1 className="text-h1">Sobre mí</h1>
          <p className="text-paragraphSmall text-justify">
            ¡Hola! Soy <strong>Blanca de Uña Martín</strong>, psicóloga especializada en <strong>terapias online</strong> y con amplia experiencia trabajando con personas de habla hispana en diferentes partes del mundo. Mi compromiso es ayudarte a descubrir <strong>herramientas prácticas y efectivas</strong> para gestionar emociones complejas y resolver esos conflictos internos que te frenan.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Creo firmemente en la importancia de una <strong>atención cercana y personalizada</strong>. Por ello, mi prioridad es crear un <em>espacio seguro y libre de juicios</em> donde puedas expresarte con confianza. Además, integro mi experiencia profesional y personal para brindarte <em>consejos auténticos y empáticos</em>, porque –spoiler– incluso los psicólogos somos personas y entendemos lo que es atravesar momentos difíciles.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A lo largo de mi carrera, he tenido el privilegio de trabajar con personas enfrentando desafíos como la <strong>depresión</strong>, la <strong>ansiedad</strong>, procesos de duelo y otros problemas emocionales. También tengo experiencia en áreas más específicas, como el <strong>manejo de Trastornos de la Conducta Alimentaria</strong> (TCA) y el acompañamiento psicológico en <strong>procesos bariátricos</strong>, ayudando a quienes desean superar la obesidad desde una perspectiva integral.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Además, mi formación en <strong>Educación Primaria</strong> por la Universidad de Barcelona me permite ofrecer apoyo a familias y niños/as que enfrentan dificultades escolares relacionadas con aspectos emocionales. Problemas como el <strong>bullying</strong> o la <strong>baja autoestima</strong> son abordados desde un enfoque <em>holístico</em>, trabajando tanto el plano emocional como el académico para garantizar que los más pequeños puedan aprovechar y disfrutar al máximo su infancia o adolescencia.
          </p>

          <CTABanner
            showTitle={true}
            showSubtitle={true}
            showContactButton={true}
            showPricingButton={true}
          />
        </section>
      </Layout>
    </>
  );
}