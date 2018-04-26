import models from '../db/models';

export const me = id => models.users.find({
  where: { id },
  include: [
    {
      model: models.facebooks,
    },
  ],
});

export default { me };
