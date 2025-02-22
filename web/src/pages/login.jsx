import { auth } from "../../firebase.config";  // Importa la configuración de Firebase
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir al usuario después del login
import LoginForm from "../components/Formularios/LoginForm";  // Asegúrate de importar LoginForm

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();  // Hook para redirigir a otra página

  // Función para manejar el cambio de los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      // Inicia sesión con Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);

      // Limpiar el formulario después de iniciar sesión
      setFormData({ email: "", password: "" });

      // Redirigir a la página principal después del inicio de sesión exitoso
      navigate("/");  // Redirige a la Home
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      setError(error.message); // Muestra el error si ocurre alguno
      console.error("Error al iniciar sesión: ", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}
