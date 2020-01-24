import { createStore } from './arrays'

describe('arrays test', () => {
  
  test('add new fruit ', () => {
    const store = createStore();
    store.addFruit('Fresa');

    expect(store.getFruits()).toStrictEqual(['Fresa'])
  })

  test('add two fruit ', () => {
    const store = createStore();
    store.addFruit('Fresa');
    store.addFruit('Melon');

    expect(store.getFruits()).toStrictEqual(['Fresa', 'Melon'])
  })

  test('validate is fresa in the array', () => {
    const store = createStore();

    store.addFruit('Manzana');

    expect(store.getFruits()).toContain('Manzana')
    expect(store.getFruits()).not.toContain('banana')
  })


  test('lenght test on array', () => {
    const store = createStore();
    store.addFruit('Fresa');

    expect(store.getFruits()).toHaveLength(1)
  })


  test('add new object with fruit data', () => {
    const store = createStore();
    store.addFruit({
      name: 'fruta',
      price: 10
    });

    expect(store.getFruits()).toContainEqual({name: 'fruta', price: 10})
  })
  
});
