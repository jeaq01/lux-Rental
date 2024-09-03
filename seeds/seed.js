const sequelize = require('../config/connection')
const { User, Location, Car } = require('../models')

const userData = require('./userData.json')
const locationData = require('./locationData.json')
const carData = require('./carData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })


  // below this line is all placeholder code that probably doesn't function correctly yet
  for (const location of locationData) {
    await Location.create({
      ...location,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    })
  }

  // below this line is all placeholder code that probably doesn't function correctly yet
  for (const car of carData) {
    await Car.create({
      ...car,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    })
  }

  process.exit(0)
}

seedDatabase()