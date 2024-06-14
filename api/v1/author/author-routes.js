const authorController = require("./author-controller");
const authorSchema = require("./author-schema");

const plugin = {
  name: "author-v2-route",
  version: "1.0.0",
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/v2/authors",
        options: {
          tags: ["api"],
          description: "Get all authors",
          handler: authorController.getAuthors,
          validate: authorSchema.getAuthors,
        },
      },
      {
        method: "GET",
        path: "/v2/authors/{id}",
        options: {
          tags: ["api"],
          description: "Get author by id",
          handler: authorController.findById,
          validate: authorSchema.getById,
        },
      },
      {
        method: "POST",
        path: "/v2/authors",
        options: {
          tags: ["api"],
          description: "Create an author",
          handler: authorController.create,
          validate: authorSchema.createAuthor,
        },
      },
      {
        method: "DELETE",
        path: "/v2/authors/{id}",
        options: {
          tags: ["api"],
          description: "Delete author by id",
          handler: authorController.deleteById,
          validate: authorSchema.deleteById,
        },
      },
    ]);
  },
};

module.exports = plugin;
