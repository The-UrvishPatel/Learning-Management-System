const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const LibrarySchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "Library",
    },
    name: {
      type: String,
      required: [true, "Please provide name"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Please provide address"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide Email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      trim: true,
    },
  },
  { timestamps: true }
);

LibrarySchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

LibrarySchema.methods.createJWT = function () {
  return jwt.sign(
    { mongoID: this._id, role: this.role },

    process.env.JWT_SECRET,

    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

LibrarySchema.methods.comparePassword = async function (libraryPassword) {
  const isMatch = await bcrypt.compare(libraryPassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("Library", LibrarySchema);
