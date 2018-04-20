module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'users', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),
  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
