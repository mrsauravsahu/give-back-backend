import models from '../db/models';

export const postOne = async () => {
  try {
    const newUser = {
      facebook: {
        firstName: 'Saurav',
        lastName: 'Sahu',
        pictureUrl: 'https://facebook.com',
        fbId: '123456789',
      },
    };
    const user = await models.users.newUser(newUser);
    return user;
  } catch (err) {
    throw err;
    console.log(err);
  }
};

export const getAll = async () => {
  try {
    return await models.users.findAll({
      include: [{ model: models.facebooks }],
    });
  } catch (err) {
    return err;
  }
};
