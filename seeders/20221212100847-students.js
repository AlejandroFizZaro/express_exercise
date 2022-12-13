'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('students', [
      {
        teacher_id: 1,
        dni: '1Z',
        name: 'John',
        last_name: 'Doe',
        date_of_birth: '1987-04-27',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 1,
        dni: '2Z',
        name: 'Monserga',
        last_name: 'Parranda',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 2,
        dni: '3Z',
        name: 'Morrocotonudo',
        last_name: 'Torres',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 2,
        dni: '4Z',
        name: 'El Tío Perete',
        last_name: 'Exacto',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 2,
        dni: '5Z',
        name: 'Astolfo',
        last_name: 'Magan',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 3,
        dni: '6Z',
        name: 'Pipo',
        last_name: 'Jones',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 3,
        dni: '7Z',
        name: 'Tremendo',
        last_name: 'Apellido',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 4,
        dni: '8Z',
        name: 'No sé',
        last_name: 'Tampoco sé',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 4,
        dni: '9Z',
        name: 'Test name',
        last_name: 'Test surname',
        date_of_birth: '2014-09-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teacher_id: 5,
        dni: '10Z',
        name: 'un helicoptero',
        last_name: 'apache',
        date_of_birth: '2014-09-15',
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
    return queryInterface.bulkDelete('students', null, {});
  }
};
