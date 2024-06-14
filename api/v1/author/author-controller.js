const business = require("./author-business");

const getAuthors = async (req, h) => {
  const result = await business.list();
  return h.response(result).code(200);
};

const create = async (req, h) => {
  const { payload } = req;
  try {
    const result = await business.create(payload);
    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
    return h.response({ error: error.message }).code(400);
  }
};

const findById = async (req, h) => {
  const authorId = req.params.id;
  const author = await business.findById(authorId);
  if (!author) {
    return h.response().code(404);
  }
  return h.response(author).code(200);
};

const deleteById = async (req, h) => {
  const authorId = req.params.id;
  try {
    await business.deleteById(authorId);
    return h.response({}).code(204);
  } catch (error) {
    console.log(error);
    return h.response({ error: error.message }).code(400);
  }
};

module.exports = {
  getAuthors,
  create,
  findById,
  deleteById,
};
