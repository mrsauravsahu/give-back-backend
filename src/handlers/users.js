import models from '../db/models';

export const postOne = async () => {
  try {
    const user1 = {
      facebook: {
        firstName: 'A',
        lastName: 'A',
        pictureUrl: 'https://facebook.com',
        fbId: '12311',
      },
    };

    const user2 = {
      facebook: {
        firstName: 'B',
        lastName: 'B',
        pictureUrl: 'https://facebook.com',
        fbId: '12311',
      },
    };

    const userEntity1 = await models.users.newUser(user1);
    const userEntity2 = await models.users.newUser(user2);

    userEntity1.addUser(userEntity2);

    return await models.users.findAll();
  } catch (err) {
    throw err;
  }
};

export const get = async (id) => {
  try {
    const data = await models.users.getByIdAsync(id);
    return data;
  } catch (err) {
    console.log(err.message);
    return err;
  }
};
