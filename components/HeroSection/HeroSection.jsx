export default function HeroSection() {
  return (
    <div className="">
      <h1 className="h1-text text-center">
        Terapia Online <span className="text-brandPurple">Profesional</span>
      </h1>
      <p className="text-paragraph text-center">
        Tener problemas es natural, <span className="text-brandPurple font-bold">atrévete</span> a solucionarlos.
      </p>
      <div className="flex justify-center">
        <img
          src="/images/terapia-online.png"
          alt="Representación gráfica de terapia online, mostrando conexión global"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-lg mx-auto"
        />
      </div>
    </div>
  );
}