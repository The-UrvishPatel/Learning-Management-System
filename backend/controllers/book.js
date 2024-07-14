const { StatusCodes } = require("http-status-codes");

const Models = require("../models/index");
const Errors = require("../errors/index");

const bookList = async (req, res) => {

  let booklist = Models.Book.find({});



  return res.status(StatusCodes.OK).json({
    booklist: booklist,
    isValid: true,
  });
};

const addBook = async (req, res) => {

    let book = await Models.Book.create({ ...req.body });

    book = book.toObject();

    return res.status(StatusCodes.CREATED).json({
      ...book,
      isValid: true,
    });

};

module.exports = {
  bookList,
  addBook,
};
