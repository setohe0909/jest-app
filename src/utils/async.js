export const getDataCallback = (callback) => {
  // Request API
  const name = 'Sebastian Tobon';

  setTimeout(() => {
    callback(name);
  }, 200)
};

// Callback
//getData((name) => {
//   console.log(name);
// });

export const getDataPromise = () => {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve('Sebastian Tobon');
    }, 300)
  });
}

export const getDataPromiseError = () => {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      reject('Error');
    }, 300)
  });
}

// Promise
// getDataPromise()
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


export const getUsers =  async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/5');
  const user = await res.json();

  return user;
}
