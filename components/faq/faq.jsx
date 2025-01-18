// Componente para preguntas frecuentes con acordeón desplegable
import { useState } from "react";

export default function FAQAccordion() {
  // Aquí defines tus preguntas y respuestas:
  const faqs = [
    {
      question: "¿Cómo reservo una sesión?",
      answer:
        "Para agendar tu primera sesión, envíanos un mensaje a través del formulario de contacto o WhatsApp. Te brindaremos horarios disponibles y confirmaremos la cita."
    },
    {
      question: "¿Cuánto dura cada sesión?",
      answer:
        "Generalmente, cada sesión dura alrededor de 50 minutos. Sin embargo, el tiempo puede variar según las necesidades del paciente."
    },
    {
      question: "¿Es confidencial?",
      answer:
        "Sí, seguimos un estricto código de confidencialidad profesional. Toda la información que compartas está protegida."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Puedes abonar mediante transferencia bancaria, PayPal o tarjeta de crédito, según tu región. Si requieres otra opción, consúltanos."
    },
    {
      question: "¿Hacen terapias presenciales?",
      answer:
        "En su mayoría son terapias online, para mayor comodidad y alcance. Si en algún caso puntual ofrezco un espacio presencial, se informará en la sección de servicios."
    }
  ];

  // Estado para controlar cuál pregunta está abierta
  const [openIndex, setOpenIndex] = useState(null);

  // Función para abrir/cerrar un ítem
  const toggleFaq = (index) => {
    // Si el índice ya está abierto, ciérralo; si no, ábrelo
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-8 animate-fadeInUp">
      <h1>Preguntas Frecuentes</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border rounded-md shadow-sm transition-all"
          >
            {/* Botón que muestra la pregunta y el ícono + / - */}
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full px-4 py-3 text-left
                         text-brandPurple font-semibold focus:outline-none hover:bg-gray-50"
            >
              {faq.question}
              <span className="text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Contenido desplegable de la respuesta */}
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}