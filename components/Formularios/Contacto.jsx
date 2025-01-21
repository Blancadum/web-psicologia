import React from "react";

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <p className="text-paragraph text-center">
          Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-1">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-brandPurple"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-brandPurple"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-600 mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-brandPurple"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-brandPurple to-brandPink text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
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
