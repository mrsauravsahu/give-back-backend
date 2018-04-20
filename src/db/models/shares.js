module.exports = (sequelize, DataTypes) => {
  const shares = sequelize.define('shares', {
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    transactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transactions',
        key: 'id',
      },
    },
    tripId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'trips',
        key: 'id',
      },
    },
  }, {});

  shares.associate = (models) => {
    shares.belongsTo(models.users, { as: 'user', foreignKey: 'userId' });
    shares.belongsTo(models.transaction, { as: 'transaction', foreignKey: 'transactionId' });
    shares.belongsTo(models.trips, { as: 'trip', foreignKey: 'tripId' });
  };

  return shares;
};
