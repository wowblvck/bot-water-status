const DEFAULT_STATE = {
  history: [],
  status: false,
  lastTime: "",
};

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

  get Status() {
    return this.state.status;
  }

  set Status(value) {
    this.state.status = value;
  }

  get LastTime() {
    return this.state.lastTime;
  }

  set LastTime(time) {
    this.state.lastTime = time;
  }
}

const store = new Store();

module.exports = store;
