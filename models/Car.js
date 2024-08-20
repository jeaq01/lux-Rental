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
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id'
      }
    }
  },

  {
    sequelize,
    modelName: 'car',
  }
)

module.exports = Car