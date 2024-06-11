const database = require("../../../config/db");
const Sequelize = require("sequelize");

const Category = database.sequelize.define(
  "Category",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
      field: "codigo",
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "descricao",
    },
  },
  {
    timestamps: false,
    tableName: "tb_categoria",
  }
);

module.exports = Category;
