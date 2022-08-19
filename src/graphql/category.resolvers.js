const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const addCategory = (_, { dto }) => {
  return service.create(dto);
}

module.exports = { addCategory };
