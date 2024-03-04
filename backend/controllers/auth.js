const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  console.log(req.body);
  const user = await User.create({ ...req.body });
  const token = await user.createJWT();
  console.log(token);
  res.status(StatusCodes.CREATED).json({ token, name: user.name });
};

const login = async (req, res) => {
  console.log(req.body);
  const user = await User.create({ ...req.body });
  const token = await user.createJWT();
  console.log(token);
  res.status(StatusCodes.CREATED).json({ token, name: user.name });
};

module.exports = {register,login};
