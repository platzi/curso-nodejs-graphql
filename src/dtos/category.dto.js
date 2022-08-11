const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createCategoryDto = Joi.object({
  name: name.required(),
  image: image.required()
});

const updateCategoryDto = Joi.object({
  name: name,
  image: image
});

const getCategoryDto = Joi.object({
  id: id.required(),
});

module.exports = { createCategoryDto, updateCategoryDto, getCategoryDto }
