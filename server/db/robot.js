const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("robot", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  imageUrl: {
    type: Sequelize.STRING,
  },

  fuelType: {
    type: Sequelize.STRING,
    validate: {
      isIn: [["gas", "diesel", "electric"]],
    },
    defaultValue: "electric",
  },

  fuelLevel: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 100,
    },
    defaultValue: 100,
  },
});
