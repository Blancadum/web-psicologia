const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const createError = require("http-errors");

const users = require("../controllers/users.controller");

router.post("/users", users.create);
router.get("/users", users.list);
router.get("/users/:id", users.detail);
router.patch("/users/:id", users.update);
router.delete("/users/:id", users.delete);

// 404, exec this function if not previous route match
router.use((req, res, next) => {
  next(createError(404, `Route ${req.method} ${req.path} not found`));
});

// common error handle, exec this code if next(error) called from controller
router.use((error, req, res, next) => {
  if (
    error instanceof mongoose.Error.CastError &&
    error.message.includes("_id")
  )
    error = createError(404, "Resource not found");
  else if (error instanceof mongoose.Error.ValidationError)
    error = createError(400, error);
  else if (error.message?.includes("E11000"))
    error = createError(409, "already exists");
  else if (!error.status) error = createError(500, error.message);

  console.error(error);

  const data = {};
  data.message = error.message;
  if (error.errors) {
    data.errors = Object.keys(error.errors).reduce((errors, errorKey) => {
      errors[errorKey] =
        error.errors[errorKey]?.message || error.errors[errorKey];
      return errors;
    }, {});
  }
  res.status(error.status).json(data);
});

module.exports = router;