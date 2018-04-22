import allResolvers from '../resolvers/index';

export const resolvers = () => ({
  Query: {
    me: (root, { id }) => allResolvers.me(id),
  },
});

export default resolvers;
