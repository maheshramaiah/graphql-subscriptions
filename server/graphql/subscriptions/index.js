const { GraphQLObjectType, GraphQLBoolean } = require('graphql');
const socket = require('../../socket');
const user = require('./user');

module.exports = new GraphQLObjectType({
  name: 'RootSubscriptions',
  fields: {
    userCreated: user
  }
});