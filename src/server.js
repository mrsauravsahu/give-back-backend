import hapi from 'hapi';

import './env';

import routes from './routes';
import models from './db/models';

const server = new hapi.Server({
  host: process.env.HOST,
  port: process.env.PORT,
});

server.route(routes);

export default server;

(async () => {
  try {
    const sampleQuery = 'SELECT 1 + 1';
    await models.sequelize.query(sampleQuery);
    console.log(`Test db with sample query ${sampleQuery} succeeded.`);

    await server.start();
    console.log(`Server started at: ${server.info.uri}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
})();
