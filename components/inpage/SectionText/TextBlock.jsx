// components/TextBlock.js
export default function TextBlock({ title, subtitle, text }) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-8">
        {title && (
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg font-semibold text-brandPurple mb-4">{subtitle}</p>
        )}
        <p className="text-base text-gray-600 leading-relaxed">{text}</p>
      </section>
    );
  }

  /* 

  <TextBlock
        title="Bienvenidos a nuestro espacio"
        subtitle="Un enfoque personalizado para tu bienestar"
        text="En nuestro espacio encontrarás herramientas efectivas para superar tus retos emocionales y alcanzar un equilibrio mental saludable."
      />
  */