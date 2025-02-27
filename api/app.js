const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

// DB init: conectar a la base de datos
require("./config/db.config");

// Middlewares
app.use(express.json()); // Permite leer JSON en 'req.body'
app.use(logger("dev")); //Logs de peticiones en la terminal
app.use(cors()); // Permite peticiones desde otros dominios, como desde el frontend -react-

// Configuración de las rutas
const routes = require("./routes/routes.config");
app.use("/", routes);


//Middleware para manejar rutas no encontradas
app.use((error, req, res, next) => {
    console.error(error);
    res.status(error.status || 500).json({message: error.message || "Error interno del Servidor"});
});

//iniciar el servidor
const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.info(`Application running at port ${port}`));