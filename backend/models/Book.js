const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    LibraryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Library",
      required: true,
    },
    LibrarianID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Librarian",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please provide name"],
      trim: true,
    },
    ISBN_13: {
      type: Number,
      required: [true, "isbn"],
    },
    author: {
      type: String,
      required: [true, "author"],
    },
    publisher: {
      type: String,
      required: [true, "publisher"],
    },
    year: {
      type: String,
      required: [true, "year"],
    },
    genre: {
      type: String,
      required: [true, "genre"],
      trim: true,
    },
    mode: {
      type: String,
      required: [true, "mode"],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, "quantity"],
    },
    description: {
        type: String,
        required: [true, "desc"]
    },
    borrowingPrice: {
      type: Number,
      required: [true, "borrowingPrice"],
    },
    penaltyPrice: {
      type: Number,
      required: [true, "penaltyPrice"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
