import hapi from 'hapi';

// Hapi plugins
import good from 'good';
import { graphqlHapi } from 'apollo-server-hapi';
import hapiGraphiqlPlugin from 'hapi-plugin-graphiql';

import './env';

// Hapi plugins' options
import goodPluginOptions from './config/good-plugin-options';
import graphqlOptions from './config/graphql-options';


import routes from './routes';
import models from './db/models';

const server = new hapi.Server({
  host: process.env.HOST,
  port: process.env.PORT,
});

server.route(routes);

server.register([
  { plugin: good, options: goodPluginOptions },
  { plugin: graphqlHapi, options: graphqlOptions },
  {
    plugin: hapiGraphiqlPlugin,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointUrl: '/graphql',
      },
    },
  },
]);

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
