const models = require('./index');

module.exports = (sequelize) => {
  const users = sequelize.define('users', {
  });

  users.associate = (db) => {
    users.hasOne(db.facebooks);
    users.belongsToMany(users, { as: 'myFriends', through: 'friendships', foreignKey: 'userId' });
    users.belongsToMany(users, { as: 'otherFriends', through: 'friendships', foreignKey: 'friendId' });
  };
  users.newUser = user => users.create(user, {
    include: [{ model: models.facebooks }],
  });

  return users;
};
