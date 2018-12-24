const Sequelize = require('sequelize');
// TODO: use env variables
const sequelize = new Sequelize('graphql_prac', 'skwon', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// use authenticate to check if connection is working
/*
const testDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    return;
  }
}
*/

module.exports = sequelize;
