const { StatusCodes } = require("http-status-codes");

const Models = require("../models/index");
const Errors = require("../errors/index");

const signup = async (req, res) => {

    let admin = await Models.Admin.create({ ...req.body });
    const token = admin.createJWT();

    admin = admin.toObject();
    delete admin.password;

    return res.status(StatusCodes.CREATED).json({
      ...admin,
      token,
      isValid: true,
    });
};

module.exports = {
  signup,
};
