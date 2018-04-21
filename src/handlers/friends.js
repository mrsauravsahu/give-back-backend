import models from '../db/models';

export const getFriendsAsync = userId => models.users.getFriendsAsync(userId);

export default {
  getFriendsAsync,
};
