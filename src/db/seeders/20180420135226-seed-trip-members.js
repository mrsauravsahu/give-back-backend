module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'tripMembers',
    [
      {
        userId: 1,
        tripId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        tripId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Person', null, {}),
};
