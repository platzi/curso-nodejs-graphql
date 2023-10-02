const { product, products, addProduct, updateProduct, deleteProduct } = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory } = require('./category.resolvers');

const resolvers = {
    Query: {
        hello: () => 'Hello GraphQL',
        getPerson: (_, { name, age }) => `Hello ${name} you are ${age} years old`,
        // Products
        product,
        products
    },
    Mutation: {
        login,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory
    }
};

module.exports = resolvers;