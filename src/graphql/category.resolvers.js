const boom = require('@hapi/boom');
const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const { user } = await context.authenticate('jwt', {session: false});
  if (!user) {
    throw boom.unauthorized('jwt is not valid');
  }
  return service.create(dto);
}

module.exports = { addCategory };
