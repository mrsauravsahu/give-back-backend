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

  users.getByIdAsync = id => users.find({
    where: { id },
    attributes: ['id', 'createdAt', 'updatedAt'],
    include: [
      {
        model: sequelize.models.facebooks,
        attributes: ['firstName', 'lastName', 'pictureUrl', 'fbId'],
      },
    ],
  });

  users.getFriendsAsync = async (id) => {
    // Generates the friends include object
    const friendsInclude = alias => ({
      model: sequelize.models.users,
      attributes: ['id'],
      as: alias,
      through: {
        attributes: [],
      },
      include: [
        {
          model: sequelize.models.facebooks,
          attributes: ['firstName', 'lastName', 'pictureUrl', 'fbId'],
        },
      ],
    });

    const userEntity = (await users.findOne({
      where: {
        id,
      },
      attributes: [],
      include: [
        friendsInclude('myFriends'),
        friendsInclude('otherFriends'),
        {
          model: sequelize.models.trips,
          as: 'trips',
        },
      ],
    })).toJSON();

    const userFriends = {};

    [userEntity.myFriends, userEntity.otherFriends]
      .forEach((friends) => {
        friends.forEach((p) => {
          if (!userFriends[p.id]) { userFriends[p.id] = p; }
        });
      });

    return Object.values(userFriends);
  };

  return users;
};
