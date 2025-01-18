import Layout from "@/components/layout";
import ContactForm from "@/components/Formularios/Contacto";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes añadir la lógica para enviar datos al servidor o procesar el formulario
  };

  return (
    <Layout>
      <section className="max-w-container mx-auto px-4 py-12">
        <h1>Contáctanos</h1>
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
    </Layout>
  );
}
