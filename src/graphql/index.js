const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers');
const { buildContext } = require('graphql-passport');
const {typeDefs: scalarsTypeDefs, resolvers: scalarsResolvers} = require('graphql-scalars');


/*const typeDefs = `
    type Query {
        hello: String!
        getPerson(name:String, age: Int): String
        getInt(age: Int!): Int
        getFloat(price: Float): Float
        getString: String
        getBoolean: Boolean
        getID: ID
        getNumbers(numbers: [Int]): [Int]
        getProduct: Product
    }
    type Product {
        id: ID!
        name: String!
        price: Float!
        description: String!
        image: String!
        createdAt: String!
    }
`;*/
// Listas
// [String]
// [Int]



// query obtener, consultar datos

// Get = query
// POST, PUT, DELETE= Mutations
// POST = 201
// POST = CREATE = 201
// GET  = GET DATA
// PUT  = UPDATE
// DELETE = REMOVE



const useGraphql = async (app) => {
    const typeDefs = [
        ...await loadFiles('./src/**/*.graphql'),
        scalarsTypeDefs
    ];
    const allResolvers = [
        resolvers,
        scalarsResolvers
    ];
    const server = new ApolloServer({
        typeDefs,
        resolvers : allResolvers,
        context: ({req, res}) =>  buildContext({req, res}),
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground
        ]
    });
    await server.start();
    server.applyMiddleware({ app} );
}


module.exports = useGraphql;