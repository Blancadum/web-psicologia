import Layout from "@/components/layout";
import PricingTable from "@/components/PricingTable/PricingTable";

export default function PricingPage() {
  return (
    <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
      <h1 className="text-h1 text-center">Nuestras Tarifas</h1>
      <h2 className="text-h2 text-center">Sesiones de Psicología económicas</h2>
        <PricingTable />
      <h2 className="text-h2 text-center">Preguntas Frecuentes</h2>
      </section>
    </Layout>
  );
}
