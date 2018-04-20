module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'trips',
    [
      {
        name: 'Wonderla!',
        description: 'Wonderla 2017 trip!',
        endDate: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdByUserId: 1,
      },
    ], {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Person', null, {}),
};
