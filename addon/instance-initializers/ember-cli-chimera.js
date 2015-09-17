import Server from '../server';

export function initialize(instance) {
  const { container } = instance;
  const fakeStore = container.lookup('service:fake-store');

  fakeStore.createRecord('user', {
    id: 1,
    firstName: 'Eric',
    lastName: 'Kelly'
  });

  const server = new Server(fakeStore);

  server.createRoute('get', '/users/:id', function(store, request) {
    const user = store.peekRecord('user', request.params.id);

    return server.respondWith(200, user);
  });
}

export default {
  name: 'ember-cli-chimera',
  initialize: initialize
};
