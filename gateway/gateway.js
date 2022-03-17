const { ApolloGateway } = require("@apollo/gateway");
const { ApolloServer } = require("apollo-server");

const port = process.env.APOLLO_PORT || 4000;

console.log("Starting Apollo Gateway in managed mode ...");

const gateway = new ApolloGateway({});

const server = new ApolloServer({
  gateway,
  context: ({ req }) => {
    const body = req.body;
    console.log({ body });
    return {};
  },
  debug: true,
  introspection: true,
  // Subscriptions are unsupported but planned for a future Gateway version.
  subscriptions: false,
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Graph Gateway ready at ${url}`);
}).catch(err => {
  console.error(err);
});
