const User = require('./User')
const Location = require('./Location')
const Car = require('./Car')

Location.hasMany(Car, {
  foreignKey: 'location_id',
  onDelete: ''
})


Car.belongsTo(Location, {
  foreignKey: 'location_id',
})

User.has(Car, {
  foreignKey: 'user_id',
  onDelete: ''
})

Car.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: ''
})

module.exports = { User, Location, Car }