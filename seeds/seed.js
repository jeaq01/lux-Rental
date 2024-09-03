const sequelize = require('../config/connection')
const { User, Location, Car } = require('../models')

const userData = require('./UserData.json')
const locationData = require('./LocationData.json')
const carData = require('./CarData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })


  // below this line is all placeholder code that probably doesn't function correctly yet
  for (const location of locationData) {
    await Location.create({
      ...location
    })
  }

  // below this line is all placeholder code that probably doesn't function correctly yet
  for (const car of carData) {
    await Car.create({
      ...car
    })
  }

  process.exit(0)
}

seedDatabase()