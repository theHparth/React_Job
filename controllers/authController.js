import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if ((!name, !email, !password)) {
    throw new BadRequestError("Please provide all value");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already is used");
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
  User.findOne();
};

export { login, updateUser, register };
