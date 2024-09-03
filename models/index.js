const User = require('./User')
const Location = require('./Location')
const Car = require('./Car')

Location.hasMany(Car, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
})


Car.belongsTo(Location, {
  foreignKey: 'location_id',
})

User.hasOne(Car, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Car.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, Location, Car }