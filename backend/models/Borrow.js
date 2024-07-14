const mongoose = require("mongoose");

const BorrowSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bookID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    librarianID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Librarian",
      required: true,
    },
    borrowDate: {
      type: Date,
      required: [true, "borrowDate"],
    },
    dueDate: {
      type: Date,
      required: [true, "duedate"],
    },
    status: {
      type: String,
      default: "Pending checkout",
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Borrow", BorrowSchema);