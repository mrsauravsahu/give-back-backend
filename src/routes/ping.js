import pingHandler from '../handlers/ping';

export default [
  {
    path: '/ping',
    method: 'GET',
    handler: pingHandler,
  },
];
