module.exports = (sequelize, DataTypes) => {
  const facebooks = sequelize.define('facebooks', {
    fbId: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    pictureUrl: DataTypes.STRING,
  });

  return facebooks;
};
