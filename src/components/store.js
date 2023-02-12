const DEFAULT_STATE = {
  history: [],
}

class Store {
  static isExits = false;
  static instance;
  
  state = DEFAULT_STATE;

  constructor() {
    if (Store.isExits) {
      return Store.instance;
    }
    Store.isExits = true;
    Store.instance = this;
  }

  get History() {
    return this.state.history;
  }

  set History(object) {
    this.state.history.push(object);
  }
}

const store = new Store();

module.exports = store;