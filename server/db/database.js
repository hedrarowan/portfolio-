// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

// We'll need to reset the database many times while we're testing, and
// it'd be a major bummer if we lost all of the data that we made while
// playing aound with the app in the browser. We'll check to see if the node
// node environment is 'test', in which case we'll use the test database.
// Otherwise, the app connects with the normal database.
const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}_test` : pkg.name;
console.log(chalk.yellow(`Opening database connection to ${dbName}`));

const db = new Sequelize(`postgres://jambjpzdmuhrzs:b1c757fb96cbb0593ccdb667bab56cf6a8e6f11930ca9067b0d63781f634f909@ec2-52-45-73-150.compute-1.amazonaws.com:5432/d3t5tesn196aqq`, {
  logging: false,
  "dialect": 'postgres',
  "dialectOptions": {
    "ssl" : true
  }
});

module.exports = db;
