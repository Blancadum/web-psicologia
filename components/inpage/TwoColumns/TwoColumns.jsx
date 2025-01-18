// components/ImageText.js
export default function TwoColumns({ imageSrc, altText, title, text, reverse = false }) {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div>
        <img src={imageSrc} alt={altText} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">{title}</h2>
        <p className="text-base text-gray-600 leading-relaxed">{text}</p>
      </div>
    </section>
  );
}

/*
** Ejemplo 1: Imagen a la izquierda, texto a la derecha 
<TwoColumns
imageSrc="/images/ejemplo1.jpg"
altText="Ejemplo de una imagen relevante"
title="Terapia personalizada"
text="Descubre cómo nuestra terapia puede ayudarte a gestionar tus emociones y alcanzar tus objetivos personales."
/>

** Ejemplo 2: Texto a la izquierda, imagen a la derecha
<TwoColumns
imageSrc="/images/ejemplo2.jpg"
altText="Otra imagen relevante"
title="Atención online"
text="Nuestro servicio online está diseñado para ajustarse a tus necesidades, brindándote comodidad y privacidad."
reverse={true} // Cambia el orden de los elementos
/>

*/
