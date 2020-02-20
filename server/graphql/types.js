const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString }
	})
});

module.exports = {
	UserType
};