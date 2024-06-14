const Joi = require("joi");

const createBook = {
  payload: Joi.object({
    title: Joi.string().required(),
    authorId: Joi.number().integer().required(),
    publishedDate: Joi.date().optional(),
    isbn: Joi.string().optional(),
    summary: Joi.string().optional(),
  }),
};

const getById = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const deleteById = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const getBooks = {
  query: Joi.object({
    title: Joi.string().optional(),
    "author.name": Joi.string().optional(),
  }),
};

module.exports = {
  createBook,
  getById,
  deleteById,
  getBooks,
};
