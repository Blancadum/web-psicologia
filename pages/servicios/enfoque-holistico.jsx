// pages/blog/enfoque-holistico.js
import BlogPost from "@/components/BlogPost";

export default function EnfoqueHolisticoPost() {
  return (
    <section className="max-w-container mx-auto px-4 py-8">
      <BlogPost
        title="Enfoque Holístico en Psicología: Cuerpo, Mente y Alma"
        date="25 de enero de 2025"
        author="Blanca de Uña Martín"
        imageSrc="/images/enfoque-holistico.jpg"
        tags={["psicología", "bienestar", "holístico"]}
        content={
          <>
            {/* Introducción */}
            <p>
              El enfoque holístico en psicología trata al individuo como un ser
              completo, integrando cuerpo, mente y alma en el proceso terapéutico.
              Este modelo reconoce que todos los aspectos de nuestra vida están
              conectados y que el bienestar verdadero surge del equilibrio entre
              ellos.
            </p>

            {/* Sección 1 */}
            <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
              ¿Qué es el enfoque holístico?
            </h2>
            <p>
              Este enfoque terapéutico considera que nuestras emociones, pensamientos
              y comportamientos están influenciados por factores físicos, sociales y
              espirituales. En lugar de tratar un síntoma aislado, se busca entender
              y abordar la raíz del problema, promoviendo un bienestar integral.
            </p>
            <p>
              El enfoque holístico se centra en la persona, utilizando las mejores
              herramientas de cada escuela de psicología para abordar los problemas
              de forma personalizada. Esto requiere un conocimiento profundo de las
              distintas corrientes psicológicas y sus posibilidades terapéuticas.
            </p>

            {/* Sección 2 */}
            <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
              Principales escuelas en psicología
            </h2>
            <p>
              Para ofrecer un enfoque realmente holístico, es fundamental conocer las
              principales escuelas de psicología y sus aportes. Algunas de las más
              relevantes incluyen:
            </p>
            <ul className="list-disc pl-5">
              <li className="mb-2">
                <strong>Psicología Cognitivo-Conductual:</strong> Centrada en identificar y
                modificar patrones de pensamiento y comportamiento disfuncionales.
              </li>
              <li className="mb-2">
                <strong>Psicología Humanista:</strong> Enfocada en el desarrollo personal,
                la autorrealización y el crecimiento emocional.
              </li>
              <li className="mb-2">
                <strong>Psicoanálisis:</strong> Explora el inconsciente y cómo las
                experiencias pasadas influyen en el presente.
              </li>
              <li className="mb-2">
                <strong>Psicología Sistémica:</strong> Aborda las relaciones y dinámicas
                familiares como clave para entender el comportamiento individual.
              </li>
              <li className="mb-2">
                <strong>Psicología Gestalt:</strong> Centrada en la percepción y la
                experiencia del "aquí y ahora" para promover la integración emocional.
              </li>
            </ul>

            {/* Sección 3 */}
            <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
              Beneficios del enfoque holístico en psicología
            </h2>

            {/* Subtítulo 3.1 */}
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
              1. Bienestar integral
            </h3>
            <p>
              Al tratar al individuo como un todo, este enfoque fomenta la armonía
              entre cuerpo, mente y emociones, reduciendo el estrés y mejorando la
              calidad de vida.
            </p>

            {/* Subtítulo 3.2 */}
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
              2. Conexión emocional profunda
            </h3>
            <p>
              Facilita la exploración de emociones y experiencias pasadas, ayudando
              a las personas a procesarlas y encontrar mayor paz interior.
            </p>

            {/* Subtítulo 3.3 */}
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
              3. Adaptación personalizada
            </h3>
            <p>
              Las estrategias terapéuticas se adaptan a las necesidades únicas de
              cada persona, respetando su historia, creencias y valores.
            </p>

            {/* Sección 4 */}
            <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
              Técnicas utilizadas en el enfoque holístico
            </h2>
            <ul className="list-disc pl-5">
              <li className="mb-2">Mindfulness y meditación para conectar con el presente.</li>
              <li className="mb-2">Terapia cognitivo-conductual para reestructurar patrones de pensamiento.</li>
              <li className="mb-2">Técnicas de respiración para reducir el estrés físico y emocional.</li>
              <li className="mb-2">Acompañamiento espiritual, según las creencias de cada persona.</li>
            </ul>

            {/* Conclusión */}
            <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
              Conclusión
            </h2>
            <p>
              El enfoque holístico en psicología ofrece una perspectiva integradora
              que permite abordar las complejidades del ser humano. Al combinar lo
              mejor de cada escuela terapéutica, proporciona herramientas efectivas
              para alcanzar un bienestar pleno y sostenible.
            </p>
          </>
        }
      />
    </section>
  );
}
