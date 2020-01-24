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
    }, 2000)
  });
}

export const getDataPromiseError = () => {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      reject('Error');
    }, 2000)
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
