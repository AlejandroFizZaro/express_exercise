'use strict';
/** @type {import('sequelize-cli').Migration}*/
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('teachers', [
      {
        user_id: 1,
        dni: '1234FZ',
        name: 'John',
        last_name: 'Doe',
        date_of_birth: '1987-04-27',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        dni: '3456S',
        name: 'Joaquin',
        last_name: 'Torres',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { //el hasOne que he establecido no me da error si pongo más de un id igual . Ver con profe
        user_id: 3,
        dni: '45567I',
        name: 'perro',
        last_name: 'gato',
        date_of_birth: '2015-06-17',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        dni: 'TRYD67',
        name: 'marcelo',
        last_name: 'melo',
        date_of_birth: '2016-04-17',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        dni: 'TRYD65',
        name: 'abc',
        last_name: 'def',
        date_of_birth: '2011-03-17',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('teachers', null, {});
  }
};
