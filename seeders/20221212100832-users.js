'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        email: 'emailnumero1@gmail.com',
        password: 'contraseña1',
        //active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'emailnumero2@gmail.com',
        password: 'contraseña2',
        //active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'emailnumero3@gmail.com',
        password: 'contraseña3',
        //active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'emailnumero4@gmail.com',
        password: 'contraseña4',
        //active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'emailnumero5@gmail.com',
        password: 'contraseña5',
        //active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('users', null, {});
  }
};
