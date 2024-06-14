const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const { version } = require("./package.json");

const server = Hapi.server({
  port: 5000,
  host: "localhost",
});

const swaggerPlugin = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      documentationPath: "/docs",
      schemes: ["http", "https"],
      info: {
        title: "API Aula Laboratório Web",
        version: version,
      },
    },
  },
];

const plugins = [
  {
    plugin: routes,
    options: {
      routesBaseDir: "./api",
    },
  },
  ...swaggerPlugin,
];

module.exports = { server, plugins };
