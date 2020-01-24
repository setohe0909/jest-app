import { getDataCallback, getDataPromise, getDataPromiseError } from './async';

describe('description', () => {
  
  test('doing test to callback ', (done) => {

    getDataCallback((name) => {
      expect(name).toBe('Sebastian Tobon');
      done();
    })
  })

  test('promise test ', (done) => {
    getDataPromise().then((name) => {
      expect(name).toBe('Sebastian Tobon');
      done();
    })
  })

  test('promise test with expect ', () => {
    return expect(getDataPromise()).resolves.toBe('Sebastian Tobon')
  })

  test('promise test reject', (done) => {
    getDataPromiseError().then((name) => {
      expect(name).toBe('Sebastian Tobon');
      done();
    }).catch((err) => {
      expect(err).toBe('Error');
      done();
    })
  })

  test('promise test with expect reject', () => {
    return expect(getDataPromiseError()).rejects.toBe('Error')
  })

  
});
