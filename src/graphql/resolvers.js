const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory} = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory , getCategory} = require('./category.resolvers');
const { RegularExpression} = require('graphql-scalars');

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);

const resolvers = {
    Query: {
        hello: () => 'Hola mundo',
        getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age}, years old!`,
        getInt:(_,args) => args.age,
        getFloat:(_,args) => args.price,
        getString:() => 'palabra',
        getBoolean:() => true,
        getID:() => '123123',
        getNumbers: (_,args) => args.numbers,
        // getProduct: () => {
        //     return {
        //         id: '1212',
        //         name: 'product 1',
        //         price: 100.12,
        //         description: 'bla bla bla',
        //         image: 'http://image.asas',
        //         createdAt: new Date().toISOString()
        //     }
        // }

        // Products
        product: getProduct,
        products: getProducts,
        category: getCategory
    },
    Mutation: {
        login,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory
    },
    CategoryNameType,
    Category: {
        products: getProductsByCategory
    }
}

module.exports = resolvers;