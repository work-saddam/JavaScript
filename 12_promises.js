// Callbacks are used to perform asynchronous task without blocking our main thread.
// There are two major issues with callback.
// i) Inversion of control.
        //when we passing our function in another function and we giving our control to that function.
        //To overcome this problem, we use Promise Object.
        //  & that promise object will be filled with the result of async operation.
// ii) Callback hell (Pyramid of doom).
        /*when we pass mutiple callback function one inside another,so our code will grow horizontally.
         It will become hard to read, maintain or debug. */
        //To overcome this problem, we use Promise Chaining.
        //Promise chaining is done by using .then().This way our code expands vertically instead of horizontally.
            // A very common mistake that developers do, is not returning a value during chaining of promises.
            // Always remember to return a value. This returned value will be used by the next .then()


// Using fetch : fetch always return Promise object.
const API_URL = "https://api.github.com/users/work-saddam";

const user = fetch(API_URL)
  .then((response) => response.json())
  //   .then((data) => console.log(data))
  .catch((error) => console.error(error));


// PROMISE :--------------------------------------------------------------------------------------------
//* A Promise is an OBJECT representing the eventual completion or failure of an asynchronous operation.
// Promise object resolves only once & they are immutable.
/*
A Promise has three states:
    1. Pending: initial state, neither fulfilled nor rejected.
    2. Fulfilled: meaning that the operation was completed successfully.
    3. Rejected: meaning that the operation failed.
*/

// Basic Structure of a Promise:
const p1 = new Promise((resolve, reject) => {
  if (true /*success condition*/) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});

p1.then((result) => {
  // console.log(result);   // Runs if the promise is resolved
}).catch((error) => {
  console.error(error);   // Runs if the promise is rejected
});
