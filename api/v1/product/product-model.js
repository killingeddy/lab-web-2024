const Category = require("../category/category-model");
const database = require("../../../config/db");
const Sequelize = require("sequelize");

const Product = database.sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
      field: "codigo",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "desc_prod",
    },
    value: {
      type: Sequelize.DECIMAL(15, 2),
      field: "vl_unit",
    },
    quantity: {
      type: Sequelize.INTEGER,
      field: "qtd",
    },
    categoryId: {
      type: Sequelize.INTEGER,
      field: "cod_cat",
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "tb_produto",
  }
);

Product.belongsTo(Category, { foreignKey: "categoryId" });

module.exports = Product;
