const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: String,
    birthDate: {
      type: Date,
      validate: {
        validator: (birthDate) =>
          new Date().getFullYear() - birthDate.getFullYear() >= 18,
        message: () => "must be older than 18",
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        delete ret._id;
        delete ret.password;
        ret.id = doc.id;
        return ret;
      },
    },
  }
);

schema.pre("save", function (next) {
  if (this.isModified("password")) {
    console.log("password is being modified! encrypt it");

    bcrypt
      .hash(this.password, 10)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch((error) => next(error));
  } else {
    console.log("password not modified, keep current value");
    next();
  }
});

module.exports = mongoose.model("User", schema);