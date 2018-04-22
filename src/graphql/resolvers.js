export const resolvers = models => ({
  Query: {
    me: (root, { id }) => models.users.find({
      where: { id },
      attributes: ['id', 'createdAt', 'updatedAt'],
      include: [
        {
          model: models.facebooks,
          attributes: ['firstName', 'lastName', 'pictureUrl', 'fbId'],
        },
      ],
    }),
  },
});

export default resolvers;
