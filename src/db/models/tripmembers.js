module.exports = (sequelize, DataTypes) => {
  const tripMembers = sequelize.define('tripMembers', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    tripId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trips',
        key: 'id',
      },
    },
  }, {});
  return tripMembers;
};
