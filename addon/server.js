import Pretender from 'pretender';
import Store from './store';
import Ember from 'ember';

class Server {
  constructor(store) {
    this.server = new Pretender;
    this.store = store;

    this.headers = { "Content-Type": "application/json" };
  }

  createRecord(type, attributes) {
    this.store.createRecord(type, attributes);
  }

  createRoute(verb, path, handler) {
    this.server[verb](path, (request) => {
      return handler(this.store, request);
    });
  }

  respondWith(status, data) {
    const body = this.store.serialize(data, { includeId: true });
    return [status, this.headers, JSON.stringify(body)];
  }
}

export default Server;
