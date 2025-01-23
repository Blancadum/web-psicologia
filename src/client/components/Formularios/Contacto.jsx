import React from "react";

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-h2 font-bold mb-6 text-brandPurple text-center text-gradient">Formulario de Contacto</h2>
        <p className="text-paragraph text-center mb-4">
          Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Campo: Email */}
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Tu mejor correo
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

          {/* Campo: Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block text-gray-600 mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Escribe tu mensaje"
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
