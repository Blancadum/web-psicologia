const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.list = (req, res, next) => {
  const filters = {};
  const { olderThan } = req.query;

  if (olderThan) {
    const d = new Date();
    d.setFullYear(+olderThan);

    filters.birthDate = {
      $lt: d,
    };
  }

  User.find(filters)
    .then((users) => {
      res.json(users);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        Object.assign(user, req.body);

        user
          .save()
          .then((user) => {
            res.json(user);
          })
          .catch(next);
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (user) {
        res.status(204).send();
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};