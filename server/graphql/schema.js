const { GraphQLSchema } = require('graphql')
const query = require('./query');
const mutation = require('./mutation');
const subscription = require('./subscriptions');

module.exports = new GraphQLSchema({
  query,
  mutation,
  subscription
});