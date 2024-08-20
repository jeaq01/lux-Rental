const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Car extends Model { }

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: 'location',
  }
)

module.exports = Car