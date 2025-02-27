const express = require("express");
const router = express.Router();
const createError = require("http-errors");

const users = require("../controllers/users.controller");

router.post("/users", users.create);
router.get("/users", users.list);
router.get("/users/:id", users.detail);
router.patch("/users/:id", users.update);
router.delete("/users/:id", users.delete);

// Middleware de manejo de errores
router.use((error, req, res, next) => {
  console.error(error);

  let status = error.status || 500;
  let message = "Error Interno de Servidor";

  // Personalizar mensajes de error
  if (error.name === "ValidationError") {
    status = 400;
    message = "Invalid request data";
  } else if (error.name === "CastError") {
    status = 404;
    message = "No se encuentra el usuario";
  } else if (error.message?.includes("E11000")) {
    status = 409;
    message = "Ups, este usuario ya existe. Prueba con otro.";
  }

  res.status(status).json({ message });
});

module.exports = router;