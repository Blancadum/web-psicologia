import React, { useState } from "react";
import RegisterForm from "../components/Formularios/registerForm"; // Asegúrate de que el componente esté correctamente importado
import { auth, db, storage } from"../../firebase.config"; // Si necesitas Firebase Database o Storage
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage"; // Para cargar la foto de perfil

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    dni: "",
    birthdate: "",
    profilePicture: null, // Para la foto de perfil
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejo de cambios para la foto de perfil
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, name, surname, phone, dni, birthdate, profilePicture } = formData;

    setLoading(true);
    setError("");

    try {
      // Crear el usuario con email y contraseña en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Subir la foto de perfil si se ha seleccionado una
      let photoUrl = "";
      if (profilePicture) {
        const profilePicRef = ref(storage, `profilePictures/${userCredential.user.uid}`);
        await uploadBytes(profilePicRef, profilePicture);
        photoUrl = `profilePictures/${userCredential.user.uid}`;
      }

      // Guardar los datos del usuario en Firebase Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: `${name} ${surname}`,
        email,
        phone,
        dni,
        birthdate,
        profilePicture: photoUrl,
      });

      // Limpiar el formulario
      setFormData({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        dni: "",
        birthdate: "",
        profilePicture: null,
      });

      console.log("Usuario registrado exitosamente.");
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar usuario: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <RegisterForm
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        handleFileChange={handleFileChange}  // Asegúrate de pasar la función para manejar archivos
        error={error}
        loading={loading}
      />
    </div>
  );
}
