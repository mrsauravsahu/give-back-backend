module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'shares',
    [
      {
        amount: 500,
        userId: 1,
        transactionId: 1,
        tripId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: -500,
        userId: 2,
        transactionId: 1,
        tripId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: 1250,
        userId: 1,
        transactionId: 2,
        tripId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: -1250,
        userId: 1,
        transactionId: 2,
        tripId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {},
  ),

  down: queryInterface => queryInterface.bulkDelete('shares', null, {}),
};
