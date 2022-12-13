'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  students.init({
    id: {
      type: INTEGER,
      initialAutoIncrement: true,
      primaryKey: true
    },
    teacher_id: DataTypes.INTEGER,
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};

