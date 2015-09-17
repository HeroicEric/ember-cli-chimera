import Pretender from 'pretender';
import Store from './store';
import Ember from 'ember';
import DS from 'ember-data';

const { copy } = Ember;

function serializeSingle(object) {
  let attributes = copy(object, true);

  delete attributes.id;

  return {
    data: {
      type: 'users',
      id: object.id,
      attributes: attributes
    }
  };
};

class Server {
  constructor() {
    this.server = new Pretender;
    this.store = new Store;

    debugger;

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
    const body = serializeSingle(data);
    return [status, this.headers, JSON.stringify(body)];
  }
}

export default Server;
