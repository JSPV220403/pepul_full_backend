const dotenv = require('dotenv');
dotenv.config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "pepul", 
  "root", 
  "jspv", 
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false,
  }
);

const testSequelizeConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, testSequelizeConnection };
