module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'friendships',
    [
      {
        userId: 1,
        friendId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        friendId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {},
  ),
  down: queryInterface => queryInterface.bulkDelete('Person', null, {}),
};
