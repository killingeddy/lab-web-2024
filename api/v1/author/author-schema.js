const Joi = require("joi");

const createAuthor = {
  payload: Joi.object({
    name: Joi.string().required(),
    biography: Joi.string().optional(),
    birthDate: Joi.date().optional(),
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

const getAuthors = {};

module.exports = {
  createAuthor,
  getById,
  deleteById,
  getAuthors,
};
