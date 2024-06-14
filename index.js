const { server, plugins } = require("./server");

(async () => {
  try {
    await server.register(plugins);
    await server.start();
    console.log("Server listening: " + server.info.uri);
    console.log(`Swagger documentation at: ${server.info.uri}/docs`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
