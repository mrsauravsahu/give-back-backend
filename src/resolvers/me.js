import models from '../db/models';

export const me = id => models.users.find({
  where: { id },
  attributes: ['id', 'createdAt', 'updatedAt'],
  include: [
    {
      model: models.facebooks,
      attributes: ['firstName', 'lastName', 'pictureUrl', 'fbId'],
    },
  ],
});

export default { me };
