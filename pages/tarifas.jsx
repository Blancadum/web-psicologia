import Layout from "@/components/layout";
import PricingTable from "@/components/PricingTable/PricingTable";

export default function PricingPage() {
  return (
    <Layout>
      <section>
        <h1>Nuestras Tarifas</h1>
        <PricingTable />
      </section>
    </Layout>
  );
}
