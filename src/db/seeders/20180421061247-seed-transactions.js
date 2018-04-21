module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'transactions',
    [
      {
        amount: 1000,
        tripId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: 2500,
        tripId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {},
  ),

  down: queryInterface => queryInterface.bulkDelete('transactions', null, {}),
};
