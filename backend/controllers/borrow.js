const { StatusCodes } = require("http-status-codes");

const Models = require("../models/index");
const Errors = require("../errors/index");

const borrowList = async (req, res) => {
  try {
    
    let borrowlist = Models.Borrow.find({});

    return res.status(StatusCodes.CREATED).json({
      borrowlist: borrowlist,
      isValid: true
    });
  } catch (error) {
    throw new Errors.CustomAPIError(String(error));
    return;
  }
};



const addBorrow = async (req, res) => {
  let borrow = await Models.Borrow.create({ ...req.body });

  borrow = borrow.toObject();

  return res.status(StatusCodes.CREATED).json({
    ...borrow,
    isValid: true,
  });
};

module.exports = {
  borrowList,
  addBorrow,
};
