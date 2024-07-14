const { StatusCodes } = require("http-status-codes");

const Models = require("../models/index");
const Errors = require("../errors/index");

const signup = async (req, res) => {

    let user = await Models.User.create({ ...req.body });
    const token = user.createJWT();

    user = user.toObject();
    delete user.password;

    return res.status(StatusCodes.CREATED).json({
      ...user,
      token,
      isValid: true,
    });
};


const health = async (req, res) => {

    console.log("user health")

    return res.status(StatusCodes.OK).json({"health": "okay"});
}



module.exports = {
  signup,
  health,
};
