const User = require('./User')
const Location = require('./Location')
const Car = require('./Car')

Location.hasMany(Car, {
  foreignKey: '',
  onDelete: ''
})


Car.belongsTo(Location, {
  foreignKey: '',
})

User.has(Car, {
  foreignKey: '',
  onDelete: ''
})

Car.belongsTo(User, {
  foreignKey: '',
  onDelete: ''
})

module.exports = { User, Location, Car }