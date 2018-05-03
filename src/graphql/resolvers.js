import allResolvers from '../resolvers/index';

export const resolvers = () => ({
  Query: {
    me: () => allResolvers.me(1),
    friends: () => allResolvers.friends(1),
    trips: () => allResolvers.trips(1),
  },
});

export default resolvers;
