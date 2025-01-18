// pages/sobre-mi.jsx
import Layout from "@/components/layout";
import Head from "next/head";
import CTABanner from "@/components/CTA-Button/CtaBanner";

export default function SobreMi() {
  return (
    <Layout>
      <Head>
        <title>Sobre mí - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Conoce a Blanca de Uña Martín, psicóloga especializada en terapias online, depresión, ansiedad y más."
        />
      </Head>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h1>
          Sobre mí
        </h1>
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
  );
}
