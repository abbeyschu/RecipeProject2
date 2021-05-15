const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//change database if we need to
if (process.env.JAWSDB_URL) {
    //change database if we need to
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'us-cdbr-east-03.cleardb.com',
        dialect: 'mysql',
        port: 3306,
      }
    );
  }
  
  module.exports = sequelize;
  