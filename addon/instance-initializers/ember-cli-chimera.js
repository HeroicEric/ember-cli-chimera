import Server from '../server';

export function initialize(instance) {
  const { container } = instance;
  const fakeStore = container.lookup('service:fake-store');

  const server = new Server(fakeStore);
}

export default {
  name: 'ember-cli-chimera',
  initialize: initialize
};
