// Importar módulos necesarios
const express = require("express");
const path = require("path");
require("dotenv").config(); // Carga las variables de entorno desde el archivo .env

const app = express();

// Sirve los archivos estáticos de la carpeta 'dist'
app.use(express.static(path.join(__dirname, "dist")));

// Maneja todas las rutas con 'index.html'
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// Configura el puerto desde .env o un valor predeterminado
const PORT = process.env.PORT || 4000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
