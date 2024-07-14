const { StatusCodes } = require("http-status-codes");

const Models = require("../models/index");
const Errors = require("../errors/index");

const signup = async (req, res) => {
  let librarian = await Models.Librarian.create({ ...req.body });
  const token = librarian.createJWT();

  librarian = librarian.toObject();
  delete librarian.password;

  return res.status(StatusCodes.CREATED).json({
    ...librarian,
    token,
    isValid: true,
  });
};

module.exports = {
  signup,
};
