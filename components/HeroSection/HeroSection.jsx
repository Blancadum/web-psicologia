export default function HeroSection() {
  return (
    <section className="max-w-container mx-auto px-sectionPadding py-sectionPadding text-center animate-fadeInUp">
      {/* Título principal */}
      <h1 className="text-h1 mb-4">
        Terapia Online <span className="text-brandPurple">Profesional</span>
      </h1>
      
      {/* Subtítulo */}
      <p className="text-paragraph mb-8">
        Tener problemas es natural,{" "}
        <span className="hover:text-brandPurple">atrévete</span> a solucionarlos.
      </p>
      
      {/* Imagen */}
      <div className="flex justify-center">
        <img
          src="/images/terapia-online.png"
          alt="Representación gráfica de terapia online, mostrando conexión global"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
        />
      </div>
    </section>
  );
}
