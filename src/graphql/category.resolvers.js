const checkRolesGql = require('./../utils/checkRolesGql');
const checkJwtGql = require('./../utils/checkJwtGql');
const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const user = await checkJwtGql(context);
  checkRolesGql(user, 'admin');
  return service.create({
    ...dto,
    image: dto.image.href
  });
}

const getCategory = (_, { id }) => {
  return service.findOne(id);
}

module.exports = { addCategory, getCategory };
