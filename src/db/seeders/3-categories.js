const { CATEGORY_TABLE } = require('../models/category.model');

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(CATEGORY_TABLE, [
      {
        name: 'Category 1',
        image: 'https://api.lorem.space/image/game?w=150&h=220',
        created_at: new Date()
      },
      {
        name: 'Category 2',
        image: 'https://api.lorem.space/image/game?w=150&h=220',
        created_at: new Date()
      }
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(CATEGORY_TABLE, null, {});
  }
};
