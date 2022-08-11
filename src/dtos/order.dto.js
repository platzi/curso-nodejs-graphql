const Joi = require('joi');

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const getOrderDto = Joi.object({
  id: id.required(),
});

const createOrderDto = Joi.object({
  customerId: customerId.required(),
});

const addItemDto = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
});

module.exports = { getOrderDto, createOrderDto, addItemDto };
