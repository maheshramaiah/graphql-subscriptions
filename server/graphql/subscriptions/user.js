const { withFilter } = require('graphql-subscriptions');
const socket = require('../../socket');
const { UserType } = require('../types');

module.exports = {
  type: UserType,
  subscribe: withFilter(
    () => socket.asyncIterator('USER_CREATED'),
    (payload, variables, context, info) => {
      return true;
    }
  )
  // subscribe: () => socket.asyncIterator('USER_CREATED')
};