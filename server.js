const { createServer } = require('http');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { subscribe, execute } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const schema = require('./server/graphql/schema');

const PORT = 3000;
const app = express();
const httpServer = createServer(app);
const server = new ApolloServer({
  schema,
  subscriptions: {
    path: `ws://localhost:${PORT}/subscriptions`
  }
});

server.applyMiddleware({ app });
httpServer.listen(PORT, (args1) => {
  new SubscriptionServer(
    {
      schema,
      subscribe,
      execute,
      onConnect: (...args) => {
        console.log('Client connected')
      }
    },
    {
      server: httpServer,
      path: '/subscriptions'
    }
  );
  console.log(`Server listening on port ${PORT}`);
});