import { get, postOne } from '../handlers/users';

export default [
  {
    path: '/api/users',
    method: 'GET',
    handler: request => get(request.query.id),
  },
  {
    path: '/users',
    method: 'POST',
    handler: postOne,
  },
];

