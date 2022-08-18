const { ORDER_PRODUCT_TABLE } = require('../models/order-product.model');

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(ORDER_PRODUCT_TABLE, [
      {
        amount: 2,
        order_id: 1,
        product_id: 1,
        created_at: new Date()
      },
      {
        amount: 2,
        order_id: 1,
        product_id: 2,
        created_at: new Date()
      },
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(ORDER_PRODUCT_TABLE, null, {});
  }
};
