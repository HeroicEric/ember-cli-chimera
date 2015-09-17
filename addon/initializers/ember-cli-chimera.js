import Server from '../server';

export function initialize(/* container, application */) {
  const server = new Server;

  server.createRecord('user', {
    'first-name': 'Eric',
    'last-name': 'Kelly'
  });

  server.createRoute('get', '/users/:id', function(store, request) {
    const user = store.peekRecord('user', request.params.id);

    return server.respondWith(200, user);
  });
}

export default {
  name: 'ember-cli-chimera',
  initialize: initialize
};
