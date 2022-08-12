const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);

const createUserDto = Joi.object({
  email: email.required(),
  password: password.required()
});

const updateUserDto = Joi.object({
  email: email,
  role: role,
});

const getUserDto = Joi.object({
  id: id.required(),
});

module.exports = { createUserDto, updateUserDto, getUserDto }
