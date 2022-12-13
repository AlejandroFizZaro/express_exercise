'use strict';
const {
  Model
} = require('sequelize');
//const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //teachers.hasOne(models.users, { foreignKey: 'user_id', as: 'user_fkey' });
      teachers.belongsTo(models.users)
      teachers.hasMany(models.students, { as: 'assigned_students' });
    }
  }
  teachers.init({
    id: {
      type: DataTypes.INTEGER,
      initialAutoIncrement: true,
      primaryKey: true
    },
    user_id: DataTypes.INTEGER,
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'teachers'
  });
  return teachers;
};

