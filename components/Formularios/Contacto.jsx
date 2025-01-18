import React from "react";

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="max-w-lg mx-auto px-4 py-8 bg-white shadow-lg rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-brandPurple"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-brandPurple"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border rounded-md px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-brandPurple"
          />
        </div>
        <button
          type="submit"
          className="btn-gradient px-6 py-3 rounded-full font-semibold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;