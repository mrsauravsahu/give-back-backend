module.exports = (sequelize) => {
  const users = sequelize.define('users', {
  });

  users.associate = (db) => {
    users.hasOne(db.facebooks);
    users.belongsToMany(users, { as: 'myFriends', through: 'friendships', foreignKey: 'userId' });
    users.belongsToMany(users, { as: 'otherFriends', through: 'friendships', foreignKey: 'friendId' });
    users.hasMany(db.trips, { as: 'trips', foreignKey: 'createdByUserId' });
  };

  users.newUser = user => users.create(user, {
    include: [{ model: sequelize.models.facebooks }],
  });

  users.getById = async (id) => {
    const currentUserEntity = (await users.find({
      where: { id },
      attributes: ['id', 'createdAt', 'updatedAt'],
      include: [
        {
          model: sequelize.models.facebooks,
          attributes: ['firstName', 'lastName', 'pictureUrl', 'fbId'],
        },
        {
          model: sequelize.models.users,
          attributes: ['id'],
          as: 'myFriends',
          through: {
            attributes: [],
          },
          include: [
            {
              model: sequelize.models.facebooks,
              attributes: ['firstName', 'lastName', 'pictureUrl', 'fbId'],
            },
          ],
        },
        {
          model: sequelize.models.users,
          attributes: ['id'],
          as: 'otherFriends',
          through: {
            attributes: [],
          },
          include: [
            {
              model: sequelize.models.facebooks,
              attributes: ['firstName', 'lastName', 'pictureUrl', 'fbId'],
            },
          ],
        },
        {
          model: sequelize.models.trips,
          as: 'trips',
        },
      ],
    })).toJSON();

    const userFriends = {};

    [currentUserEntity.myFriends, currentUserEntity.otherFriends]
      .forEach((friends) => {
        friends.forEach((p) => {
          if (!userFriends[p.id]) { userFriends[p.id] = p; }
        });
      });

    return ({
      ...currentUserEntity,
      friends: Object.values(userFriends),
      myFriends: undefined,
      otherFriends: undefined,
    });
  };
  return users;
};
