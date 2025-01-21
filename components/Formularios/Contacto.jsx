import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-center">Contáctanos</h2>
        <p className="text-paragraph text-center"> Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto con nosotros </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-brandPurple"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-brandPurple"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-brandPurple"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brandPurple text-white font-semibold px-6 py-3 rounded-full hover:bg-brandPink transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
