const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const typeDefs = `
  type Query {
    hello: String
    getPerson(name: String, age: Int): String
  }
`;
// Get = Query
// POST, PUT, DELETE = Mutations
// POST = 201
// POST = CREATE = 201
// GET = GET DATA
// PUT = Update
// DELETE = remove

const resolvers = {
  Query: {
    hello: () => 'hola mundo',
    getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age} years old!`
  }
}

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });
  await server.start();
  server.applyMiddleware({ app });
}

module.exports = useGraphql;
