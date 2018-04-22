export default {
  ops: {
    interval: 1000,
  },
  reporters: {
    myConsoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }],
    }, {
      module: 'good-console',
    }, 'stdout'],
    myFileReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ ops: '*' }],
    }, {
      module: 'good-squeeze',
      name: 'SafeJson',
    }, {
      module: 'good-file',
      args: ['./logs/giveback.log'],
    }],
    myHTTPReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ error: '*' }],
    }, {
      module: 'good-http',
      args: ['http://prod.logs:3000', {
        wreck: {
          headers: { 'x-api-key': 12345 },
        },
      }],
    }],
  },
};
