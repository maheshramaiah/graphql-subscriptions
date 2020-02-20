const { GraphQLID, GraphQLString } = require('graphql');
const store = require('../../store');
const socket = require('../../socket');
const { UserType } = require('../types');

module.exports = {
  type: UserType,
  args: {
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  },
  resolve: (_, { id, name }) => {
    const user = store.addUser({ id, name });

    socket.publish('USER_CREATED', {
      userCreated: user
    });

    return user;
  }
};