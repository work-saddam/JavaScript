const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 success");
  }, 3000);
  //   setTimeout(() => reject("P2 fail"),3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P2 success");
  }, 1000);
  //   setTimeout(() => reject("P2 fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P3 success"), 2000);
  setTimeout(() => reject("P3 fails"), 2000);
});

/* Promise.all  1) If all promises get success then it will return the array of values.
                   Above, It will wait max time(3 sec) to settle all the promises
                2) If any of promises get rejected, it will show error immidiately when error occured.
                   Above, we get error in 2sec. */

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

/* Promise.allSettled  1) It will always return an array whether one/all promises get success/fail.
                       2) It will wait to settle all the promises whether it is success or fail.
                          Above, It will wait 3sec to settle all the promises. */

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

/* Promise.race 1) First settle promise (take the least time) among all the promises whether it is success/fail.
                   It will finish the execution.
                   Above p2 result will display on the console whether it is success or fail. */

// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

/* Promise.any 1) Among all promises, first(takes least time) success result get prints.
                  Above p2 get success in 1 sec.
               2) If all the promises get FAIL it will give an AGGREGATE error */

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
