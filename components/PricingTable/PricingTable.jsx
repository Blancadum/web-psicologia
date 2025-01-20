// Componente: PricingTable
import CTABanner from "../CTA-Button/CtaBanner";

// Componente de tabla comparativa con precios y botones "Comprar"
export default function PricingTable() {
  return (
    <section className="container  mx-auto py-section px-6 md:px-12 lg:px-16 animate-fadeInUp">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Plan 1 */}
        <div className="p-6 border rounded-md shadow-sm hover:shadow-md transition duration-300 relative">
          <h3 className="text-lg md:text-xl font-bold text-brandPurple text-center mb-4">
            1 Sesión
          </h3>
          <p className="text-gray-600 text-center text-base md:text-lg font-semibold mb-4">
            $50
          </p>
          <p className="text-gray-500 text-center text-sm md:text-base mb-6">
            Ideal para problemas específicos.
          </p>
          <div className="flex justify-center">
            <button
              className="px-6 py-2 border-2 border-gradient-to-r from-brandPurple to-pink-500 text-brandPurple font-semibold rounded-full transition hover:bg-gradient-to-r hover:text-white focus:outline-none focus:ring-2 focus:ring-brandPurple focus:ring-offset-2"
            >
              Comprar
            </button>
          </div>
        </div>

        {/* Plan 2 */}
        <div className="p-6 border rounded-md shadow-sm hover:shadow-md transition duration-300 relative">
          <h3 className="text-lg md:text-xl font-bold text-brandPurple text-center mb-4">
            Pack 3 Sesiones
          </h3>
          <p className="text-gray-600 text-center text-base md:text-lg font-semibold mb-4">
            $135
          </p>
          <p className="text-gray-500 text-center text-sm md:text-base mb-6">
            Ahorro de $15 en sesiones consecutivas.
          </p>
          <div className="flex justify-center">
            <button
              className="px-6 py-2 border-2 border-gradient-to-r from-brandPurple to-pink-500 text-brandPurple font-semibold rounded-full transition hover:bg-gradient-to-r hover:text-white focus:outline-none focus:ring-2 focus:ring-brandPurple focus:ring-offset-2"
            >
              Comprar
            </button>
          </div>
        </div>

        {/* Plan 3 (Mayor ahorro destacado) */}
        <div className="p-6 border rounded-md shadow-sm hover:shadow-md transition duration-300 relative bg-gray-50 border-2 border-brandPurple">
          <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md">
            Mejor Ahorro
          </span>
          <h3 className="text-lg md:text-xl font-bold text-brandPurple text-center mb-4">
            Pack 5 Sesiones
          </h3>
          <p className="text-gray-600 text-center text-base md:text-lg font-semibold mb-4">
            $200
          </p>
          <p className="text-gray-500 text-center text-sm md:text-base mb-6">
            Máximo ahorro para un tratamiento continuo.
          </p>
          <div className="flex justify-center">
            <button
              className="px-6 py-2 border-2 border-gradient-to-r from-brandPurple to-pink-500 text-brandPurple font-semibold rounded-full transition hover:bg-gradient-to-r hover:text-white focus:outline-none focus:ring-2 focus:ring-brandPurple focus:ring-offset-2"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
      {/* CTA Banner */}
      <CTABanner
        showTitle={true}
        showSubtitle={true}
        showContactButton={true}
        showPricingButton={false}
      />
    </section>
  );
}
