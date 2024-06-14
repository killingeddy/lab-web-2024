const Author = require("../author/author-model");
const bookModel = require("./book-model");
const { Op } = require("sequelize");

const save = async (book) => {
  return bookModel.create(book);
};

const findAll = async (filter) => {
  const { authorId, title, author } = filter;

  return bookModel.findAll({
    include: [
      {
        model: Author,
        required: true,
      },
    ],
    where: {
      ...(authorId ? { authorId } : {}),
      ...(title ? { title: { [Op.iLike]: `${title}%` } } : {}),
      ...(author && author.name
        ? { "$Author.name$": { [Op.iLike]: `${author.name}%` } }
        : {}),
    },
  });
};

const findById = async (id) => {
  return bookModel.findOne({
    include: [
      {
        model: Author,
        required: false,
      },
    ],
    where: { id },
  });
};

const deleteById = async (id) => {
  return bookModel.destroy({ where: { id } });
};

module.exports = {
  save,
  findAll,
  findById,
  deleteById,
};
