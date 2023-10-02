const boom = require('@hapi/boom');

const checkRolesGql = (user, ...roles) => {
    if (!roles.includes(user.role)) {
        throw boom.unauthorized('Role not allowed');
    }
};

module.exports = checkRolesGql;