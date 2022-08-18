const { CUSTOMER_TABLE } = require('./../models/customer.model');

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(CUSTOMER_TABLE, [
      {
        name: 'Juanita',
        last_name: 'Perez',
        phone: '7830601',
        user_id: 2,
        created_at: new Date()
      },
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(CUSTOMER_TABLE, null, {});
  }
};
