import { makeExecutableSchema } from 'graphql-tools';

import graphqlSchema from '../graphql/schema.graphql';
import createResolvers from '../graphql/resolvers';
import models from '../db/models';

const executableSchema = makeExecutableSchema({
  typeDefs: [
    graphqlSchema,
  ],
  resolvers: createResolvers(models),
});

export default {
  path: '/graphql',
  graphqlOptions: {
    pretty: true,
    schema: executableSchema,
  },
};
