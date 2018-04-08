const hapi = require('hapi');

const routes = require('./routes');

const server = new hapi.Server({
  host: '0.0.0.0',
  port: '8080',
});

server.route(routes);

(async () => {
  try {
    await server.start();
    console.log(`Server started at: ${server.info.uri}`);
  } catch (err) {
    throw err;
  }
})();
