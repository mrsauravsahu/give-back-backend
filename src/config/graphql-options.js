import { makeExecutableSchema } from 'graphql-tools';

import graphqlSchema from '../graphql/schema.graphql';
import createResolvers from '../graphql/resolvers';

const executableSchema = makeExecutableSchema({
  typeDefs: [
    graphqlSchema,
  ],
  resolvers: createResolvers(),
});

export default {
  path: '/graphql',
  graphqlOptions: {
    pretty: true,
    schema: executableSchema,
  },
};
