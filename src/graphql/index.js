const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default');
const { expressMiddleware } = require('@apollo/server/express4');

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String!, age: Int!): String
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
`;

const resolvers = {
    Query: {
        hello: () => 'Hello GraphQL',
        getPerson: (_, { name, age }) => `Hello ${name} you are ${age} years old`,
        getProduct: () => {
            return {
                id: '123',
                name: 'Product 1',
                price: 12.5,
                description: 'Description product 1',
                image: 'https://picsum.photos/200/300',
                createdAt: new Date().toISOString()
            };
        }
    }
};

const useGraphQL = async (app) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault
        ]
    });
    await server.start()
    // Uso del middleware en Express
    app.use(expressMiddleware(server, {
        context: async ({ req }) => ({
            token: req.headers.token
        })
    }));
};

module.exports = useGraphQL;