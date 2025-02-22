import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Importar funciones necesarias
import { getStorage } from "firebase/storage";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAtGzcjsYu-6mu75dd4LMwvcyz8zScoqX0",
  authDomain: "webpsicologia-9af22.firebaseapp.com",
  projectId: "webpsicologia-9af22",
  storageBucket: "webpsicologia-9af22.appspot.com",
  messagingSenderId: "600826159930",
  appId: "1:600826159930:web:8b5eb62b31357a29e8bc5e",
  measurementId: "G-XXYYYZZZZZ",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exportar las funciones addDoc y collection junto con auth, db, storage
export { auth, db, storage, addDoc, collection };
