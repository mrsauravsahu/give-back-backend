import { Op } from 'sequelize';

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
    trips.belongsToMany(models.users, { as: 'members', through: 'tripMembers', foreignKey: 'tripId' });
  };

  trips.getTripsAsync = async (userId) => {
    const tripIds = await sequelize.models.tripMembers.findAll({
      where: { userId },
      attributes: ['tripId'],
    });

    const tripIdsOred = tripIds.map(p => ({ id: p.tripId }));

    return sequelize.models.trips.findAll({
      where: {
        [Op.or]: tripIdsOred,
      },
    });
  };

  return trips;
};
