const Author = require("../author/author-model");
const database = require("../../../config/db");
const Sequelize = require("sequelize");

const Book = database.sequelize.define(
  "Book",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "codigo",
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "titulo",
    },
    publishedDate: {
      type: Sequelize.DATE,
      field: "data_publicacao",
    },
    isbn: {
      type: Sequelize.STRING,
    },
    summary: {
      type: Sequelize.TEXT,
      field: "resumo",
    },
    authorId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Author",
        key: "id",
      },
      field: "id_autor",
    },
  },
  {
    timestamps: false,
    tableName: "tb_book",
  }
);

Book.belongsTo(Author, { foreignKey: "authorId" });

module.exports = Book;
