module.exports = (sequelize, DataTypes) => {
  const trips = sequelize.define('trips', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endDate: DataTypes.DATE,
    createdByUserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  }, {});

  trips.associate = (models) => {
    trips.belongsTo(models.users, { as: 'createdBy', foreignKey: 'createdByUserId' });
  };
  return trips;
};
