'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // teacher has one user > teachers.js
          model: 'users',
          key: 'id'
        }
      },
      dni: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


    /*     //Foreign key user_id is added
        return queryInterface.addColumn(
          'teachers', // name of Source model
          'user_id', // name of the key we're adding 
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        ); */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('teachers');
  }
};