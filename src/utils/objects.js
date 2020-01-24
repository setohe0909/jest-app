export const createStore = () => {
  let store = [];

  return {
    addItem: (item) => {
      store.push(item);
    },

    getStore: () => {
      return store;
    },

    getById: (id) => {
      return store.filter((item) => item.id === id)[0];
    }
  };
}

