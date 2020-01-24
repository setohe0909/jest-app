import { getDataCallback, getDataPromise, getDataPromiseError, getUsers } from './async';

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

  test('promise resolve test with asyn/await', async () => {
    const name = await getDataPromise();
    expect(name).toBe('Sebastian Tobon');
  })

  test('promise reject test with asyn/await', async () => {
    try {
      const name = await getDataPromiseError();
      expect(name).toBe('Sebastian Tobon');
    } catch (err) {
      expect(err).toBe('Error');
    }
  })

  test('promise test with HTTP ', async() => {
    const user = await getUsers();
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('email')
  })
  
});
