import { getAll, postOne } from '../handlers/users';

export default [
  {
    path: '/users',
    method: 'GET',
    handler: getAll,
  },
  {
    path: '/users',
    method: 'POST',
    handler: postOne,
  },
];

