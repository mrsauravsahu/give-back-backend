import { Op } from 'sequelize';

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

  tripMembers.getTripMembersAsync = async (tripId) => {
    const memberUserIds = await sequelize.models.tripMembers.findAll({
      where: { tripId },
      attributes: ['userId'],
    });

    const userIdsOred = memberUserIds.map(p => ({ id: p.userId }));

    return sequelize.models.users.findAll({
      where: {
        [Op.or]: userIdsOred,
      },
      include: [
        { model: sequelize.models.facebooks, as: 'facebook' },
      ],
    });
  };

  return tripMembers;
};
