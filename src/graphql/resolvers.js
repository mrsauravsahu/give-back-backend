import allResolvers from '../resolvers/index';

export const resolvers = () => ({
  Query: {
    me: (root, { id }) => allResolvers.me(id),
    friends: (root, { id }) => allResolvers.friends(id),
  },
});

export default resolvers;
