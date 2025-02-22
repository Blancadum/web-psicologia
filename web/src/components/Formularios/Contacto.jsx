import React from "react";
import { db, addDoc, collection } from "../../../firebase.config"; // Importa addDoc y collection

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  // Función para manejar el envío del formulario y guardar en Firestore
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      // Accede a la colección "contacto" en Firestore
      const docRef = await addDoc(collection(db, "contacto"), {
        name: formData.name,
        lastName: formData.lastName, // apellido
        phoneNumber: formData.phoneNumber, // número de contacto
        email: formData.email,
        motivoConsulta: formData.motivoConsulta, // motivo de consulta
      });
      console.log("Documento guardado con ID: ", docRef.id); // Mensaje de éxito
    } catch (e) {
      console.error("Error al agregar el documento: ", e); // Manejo de errores
    }
  };

  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-h2 font-bold mb-6 text-brandPurple text-center text-gradient">Formulario de Contacto</h2>
        <p className="text-paragraph text-center mb-4">
          Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        </p>
        <form onSubmit={handleContactSubmit} className="space-y-6">
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Escribe tu nombre"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Campo: Apellido */}
          <div>
            <label htmlFor="lastName" className="block text-gray-600 mb-2">
              Apellido
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Escribe tu apellido"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Campo: Número de contacto */}
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-600 mb-2">
              Número de Contacto
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Escribe tu número de contacto"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Campo: Correo */}
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Escribe tu correo electrónico"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Campo: Motivo de consulta */}
          <div>
            <label htmlFor="motivoConsulta" className="block text-gray-600 mb-2">
              Motivo de la consulta
            </label>
            <input
              id="motivoConsulta"
              type="text"
              name="motivoConsulta"
              value={formData.motivoConsulta}
              onChange={handleChange}
              required
              placeholder="Escribe el motivo de tu consulta"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-brandPurple to-brandPink text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
