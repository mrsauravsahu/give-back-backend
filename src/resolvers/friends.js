import models from '../db/models';

export const friends = async id => models.users.getFriendsAsync(id);

export default { friends };

