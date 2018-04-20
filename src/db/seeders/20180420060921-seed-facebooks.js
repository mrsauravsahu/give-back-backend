module.exports = {
  up: queryInterface => queryInterface.bulkInsert('facebooks', [
    {
      fbId: '1223456',
      firstName: 'Saurav',
      lastName: 'Sahu',
      pictureUrl: 'http://facebook.com/1',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
    },
    {
      fbId: '87654334',
      firstName: 'Ravi',
      lastName: 'Hegde',
      pictureUrl: 'http://facebook.com/2',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
    },
    {
      fbId: '1234567',
      firstName: 'Shipra',
      lastName: 'Sahu',
      pictureUrl: 'http://facebook.com/3',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('facebooks', null, {}),
};
