const { GraphQLList } = require('graphql');
const store = require('../../store');
const { UserType } = require('../types');

module.exports = {
  type: GraphQLList(UserType),
  resolve: () => {
    return store.getUsers();
  }
};

