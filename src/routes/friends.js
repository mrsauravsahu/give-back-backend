import * as handlers from '../handlers/friends';

export default [
  {
    path: '/api/friends',
    method: 'GET',
    handler: (request) => {
      const { userId } = request.query;
      return handlers.getFriendsAsync(userId);
    },
  },
];

