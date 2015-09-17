import _find from 'lodash/collection/find';

class Store {
  constructor() {
    this.data = {};
  }

  createRecord(type, attributes) {
    const collection = this.data[type] || [];
    const sequence = (collection.length + 1).toString();
    const record = Object.assign({ id: sequence }, attributes);

    collection.push(record);

    this.data[type] = collection;
  }

  peekRecord(type, id) {
    return _find(this.data[type], { id: id });
  }
}

export default Store;
