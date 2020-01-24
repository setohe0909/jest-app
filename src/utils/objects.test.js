import { createStore } from './objects'

describe('Objects test', () => {
  
  test('add new item in store ', () => {
    const store = createStore();

    store.addItem({
      name: 'Sebas',
      id: 1,
      country: 'Colombia'
    })

    expect(store.getStore()[0]).toEqual({
      name: 'Sebas',
      id: 1,
      country: 'Colombia'
    })
  })

  test('search item by id ', () => {
    const store = createStore();

    store.addItem({
      name: 'Sebas',
      id: 1,
      country: 'Colombia'
    })

    expect(store.getById(1)).toEqual({
      name: 'Sebas',
      id: 1,
      country: 'Colombia'
    })
  })

  test('search item by id 2', () => {
    const store = createStore();

    store.addItem({
      name: 'Sebas',
      id: 1,
      country: 'Colombia'
    })

    expect(store.getById(1)).toMatchObject({
      name: 'Sebas'
    })
  })

  test('search item by property', () => {
    const store = createStore();

    store.addItem({
      name: 'Sebas',
      id: 1,
      country: 'Colombia'
    })

    expect(store.getById(1)).toHaveProperty('name')
    expect(store.getById(1)).toHaveProperty('name', 'Sebas')
  })
  

});
