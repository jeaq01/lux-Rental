const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

class User extends Model {
  checkPassword(loginPw) {
    // couldn't quite get bcrypt working properly so we're bypassing it with this for now; passwords are being stored as plaintextbcr
    return loginPw === this.password; // .compareSync(loginPw, this.password);
  }
}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

      }
    }
  },
  {
    hooks: {

    },
    sequelize,
    freezeTableName: true,
    modelName: 'user'
  }
)

module.exports = User