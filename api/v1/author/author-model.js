const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Author = database.sequelize.define(
  "Author",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "codigo",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "nome",
    },
    biography: {
      type: Sequelize.TEXT,
      field: "biografia",
    },
    birthDate: {
      type: Sequelize.DATE,
      field: "data_nascimento",
    },
  },
  {
    timestamps: false,
    tableName: "tb_author",
  }
);

module.exports = Author;
