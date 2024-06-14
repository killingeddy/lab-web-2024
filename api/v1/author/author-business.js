const bookRepository = require("../book/book-repository");
const repository = require("./author-repository");

const create = async (author) => {
  return repository.save(author);
};

const list = async () => {
  return repository.findAll();
};

const findById = async (id) => {
  return repository.findById(id);
};

const deleteById = async (id) => {
  const books = await bookRepository.findAll({ authorId: id });
  if (books.length > 0) {
    throw {
      status: 400,
      message: "Não é possível deletar um autor com livros associados",
    };
  }
  return repository.deleteById(id);
};

module.exports = {
  create,
  list,
  findById,
  deleteById,
};
