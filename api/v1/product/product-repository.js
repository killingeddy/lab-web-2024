const Category = require("../category/category-model");
const productModel = require("./product-model");
const { Op } = require("sequelize");

const save = async (product) => {
  return productModel.create(product);
};

const findAll = async (filter) => {
  const { name, quantity } = filter;

  return productModel.findAll({
    include: [
      {
        model: Category,
        required: true,
      },
    ],
    where: {
      ...(name ? { name: { [Op.iLike]: `${name}%` } } : {}),
      ...(quantity ? { quantity } : {}),
    },
  });
};

const findById = async (id) => {
  return productModel.findOne({
    include: [
      {
        model: Category,
        required: false,
      },
    ],
    where: {
      id: id,
    },
  });
};

const deleteById = async (id) => {
  productModel.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  save,
  findAll,
  findById,
  deleteById,
};
