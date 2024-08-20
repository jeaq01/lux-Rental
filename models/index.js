const User = require('/User')
const Location = require('./Location')
const Car = require('./Car')

Location.hasMany(Car, {
  foreignKey: '',
  onDelete: '',
})

User.has(Car, {
  foreignKey: '',
})

Car.belongsTo(Location, {
  foreignKey: '',
})

module.exports = { User, Location, Car }