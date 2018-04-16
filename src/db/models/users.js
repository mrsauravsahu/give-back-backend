const models = require('./index');

module.exports = (sequelize) => {
  const users = sequelize.define('users', {
  });

  users.associate = (db) => {
    users.hasOne(db.facebooks);
  };
  users.newUser = user => users.create(user, {
    include: [{ model: models.facebooks }],
  });

  return users;
};
