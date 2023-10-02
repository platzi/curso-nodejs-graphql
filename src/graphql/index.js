const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default');
const { expressMiddleware } = require('@apollo/server/express4');
const { loadFiles } = require('@graphql-tools/load-files');
const { buildContext } = require('graphql-passport');

const resolvers = require('./resolvers');

const useGraphQL = async (app) => {
    const server = new ApolloServer({
        typeDefs: await loadFiles('src/**/*.graphql'),
        resolvers,
        context: ({ req, res }) => buildContext({ req, res }),
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault
        ]
    });
    await server.start();
    app.use(expressMiddleware(server, {
        context: async ({ req, res }) => buildContext({ req, res }),
    }));
};

module.exports = useGraphQL;


// const { ApolloServer } = require('@apollo/server');
// const {
//   ApolloServerPluginLandingPageLocalDefault,
//   ApolloServerPluginLandingPageProductionDefault,
// } = require('@apollo/server/plugin/landingPage/default');
// const { expressMiddleware } = require('@apollo/server/express4');
// const { config } = require('../config');
// const { loadFilesSync } = require('@graphql-tools/load-files');
// const resolvers = require('./resolvers');
// const { buildContext } = require('graphql-passport');

// const useGraphQL = async (app) => {
//   const server = new ApolloServer({
//     typeDefs: loadFilesSync('./**/*.graphql'),
//     resolvers,
//     //context: ({ req, res }) => buildContext({ req, res }),
//     playground: true,
//     plugins: [
//       !config.dev
//         ? ApolloServerPluginLandingPageProductionDefault({
//             graphRef: 'superapp@apollo',
//             footer: false,
//           })
//         : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
//     ],
//   });

//   await server.start();

//   app.use(
//     '/graphql',
//     expressMiddleware(server, {
//       context: async ({ req, res }) => buildContext({ req, res }),
//     })
//   );
// };

// module.exports = useGraphQL;