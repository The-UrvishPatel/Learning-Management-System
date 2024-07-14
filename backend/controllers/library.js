const { StatusCodes } = require("http-status-codes");

const Models = require("../models/index");
const Errors = require("../errors/index");

const create = async (req, res) => {
  let library = await Models.Library.create({ ...req.body });
  const token = library.createJWT();

  library = library.toObject();
  delete library.password;

  return res.status(StatusCodes.CREATED).json({
    ...library,
    token,
    isValid: true,
  });
};

module.exports = {
  create,
};
