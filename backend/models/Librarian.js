const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const LibrarianSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "Librarian",
    },
    name: {
      type: String,
      required: [true, "Please provide Full name"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide Phone Number"],
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
    gender: {
      type: String,
      required: [true, "Please provide Gender"],
      trim: true,
    },
    LibraryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Library",
      required: [true, "Please assign a library"],
    },
  },
  { timestamps: true }
);

LibrarianSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

LibrarianSchema.methods.createJWT = function () {
  return jwt.sign(
    { mongoID: this._id, role: this.role },

    process.env.JWT_SECRET,

    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

LibrarianSchema.methods.comparePassword = async function (librarianPassword) {
  const isMatch = await bcrypt.compare(librarianPassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("Librarian", LibrarianSchema);
