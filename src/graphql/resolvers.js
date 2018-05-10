import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import allResolvers from './resolvers/index';

export const resolvers = () => ({
  Query: {
    me: () => allResolvers.me(1),
    friends: () => allResolvers.friends(1),
    trips: () => allResolvers.trips(1),
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue: value => new Date(value),
    serialize: value => value,
    parseLiteral: (ast) => {
      switch (ast.kind) {
        case Kind.INT:
          return parseInt(ast.value, 10);
        default:
          return null;
      }
    },
  }),
});

export default resolvers;
