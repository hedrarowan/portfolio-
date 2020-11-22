const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("project", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  completed: {
    type: Sequelize.STRING,

  },
  description: {
    type: Sequelize.STRING,
  },

  mediaUrl: {
    type: Sequelize.STRING,
  },

  longDescription: {
    type: Sequelize.TEXT,
  }
});
