import React, { useState } from "react";

export default function FAQAccordion({ title, description }) {
  const faqs = [
    {
      question: "¿Qué es la terapia online?",
      answer:
        "La terapia online es una modalidad de atención psicológica que se realiza a través de internet, utilizando herramientas como videollamadas, chats o correos electrónicos. Permite recibir apoyo profesional desde cualquier lugar con conexión a internet.",
    },
    {
      question: "¿Es efectiva la terapia online?",
      answer:
        "Sí, diversos estudios han demostrado que la terapia online puede ser tan efectiva como la presencial para tratar una amplia gama de problemas psicológicos, siempre que se realice con profesionales cualificados.",
    },
    {
      question: "¿Cómo se garantiza la confidencialidad en la terapia online?",
      answer:
        "Se utilizan plataformas seguras y encriptadas para las sesiones, asegurando que la información compartida entre el terapeuta y el paciente permanezca privada y confidencial.",
    },
    {
      question: "¿Qué necesito para realizar una sesión de terapia online?",
      answer:
        "Solo necesitas un dispositivo con cámara y micrófono (como un ordenador, tablet o smartphone) y una conexión estable a internet. Es recomendable encontrar un espacio privado y tranquilo para las sesiones.",
    },
    {
      question: "¿La terapia online es adecuada para todos?",
      answer:
        "La terapia online es adecuada para la mayoría de las personas. Sin embargo, en casos de crisis severas o trastornos que requieren intervención presencial, puede ser más apropiado optar por la terapia tradicional.",
    },
    {
      question: "¿Cuál es la duración y frecuencia de las sesiones online?",
      answer:
        "Generalmente, las sesiones duran entre 45 y 60 minutos. La frecuencia se determina según las necesidades individuales, pero comúnmente es una vez por semana.",
    },
    {
      question: "¿Cómo se realiza el pago de las sesiones de terapia online?",
      answer:
        "Los métodos de pago pueden variar según el profesional o la plataforma, pero comúnmente se aceptan transferencias bancarias, pagos con tarjeta de crédito o plataformas de pago en línea.",
    },
    {
      question: "¿Puedo combinar la terapia online con sesiones presenciales?",
      answer:
        "Sí, es posible combinar ambas modalidades según tus necesidades y la disponibilidad del terapeuta. Esto se conoce como un enfoque híbrido.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
      {/* Título del componente */}
      {title && <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>}

      {/* Lista de preguntas frecuentes */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden"
          >
            {/* Pregunta renderizada como <h3> */}
            <h3
              onClick={() => toggleFaq(index)}
              className="faq-question flex items-center justify-between w-full px-4 py-3 text-left
                         text-brandPurple font-semibold cursor-pointer focus:outline-none hover:bg-gray-50 transition-all"
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span className="text-3xl font-bold text-gray-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>

            {/* Contenido desplegable */}
            {openIndex === index && (
              <div
                className="faq-answer px-4 pb-4 text-gray-600 leading-relaxed transition-all duration-300"
                aria-hidden={openIndex !== index}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
