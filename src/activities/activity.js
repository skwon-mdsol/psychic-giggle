const Db = require('../db');
const Sequelize = require('Sequelize');

const Activity = Db.define('activity', {
  category: { type: Sequelize.STRING, allowNull: false },
  start: { type: Sequelize.DATE, allowNull: false },
  end: { type: Sequelize.DATE, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: true }
});

module.exports = Activity;
