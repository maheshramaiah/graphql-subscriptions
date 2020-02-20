const { GraphQLObjectType } = require('graphql');
const user = require('./user');

module.exports = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    createUser: user
  }
});