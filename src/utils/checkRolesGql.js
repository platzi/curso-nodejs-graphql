const boom = require('@hapi/boom');

function checkRolesGql(user, ...roles) {
  if (!roles.includes(user.role)) {
    throw boom.unauthorized('your role is not allow');
  }
}

module.exports = checkRolesGql;
