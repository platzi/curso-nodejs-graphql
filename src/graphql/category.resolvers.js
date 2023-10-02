const CategoryService = require('../services/category.service');
const service = new CategoryService();
const checkRolesGql = require('../utils/checkrolesGql');
const checkJwtGql = require('../utils/checkJWTGql');

const addCategory = async (_, { dto }, context) => {
    const user = await checkJwtGql(context);
    checkRolesGql(user, 'admin');
    return service.create(dto);
};

module.exports = { addCategory };