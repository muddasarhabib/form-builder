const dbConfig = require('../config/db.config');

const { Sequelize } = require('sequelize');
const userModel = require('./User');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    //   operatorsAliases: false,
    port: 3306,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
});

const User = userModel(sequelize, Sequelize);

module.exports = {
    sequelize , 
    Sequelize,
    User
};
