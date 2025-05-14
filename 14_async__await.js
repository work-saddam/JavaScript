// async/await is syntactic sugar over Promises in JavaScript.
// "Syntactic sugar" refers to syntax that makes code easier to read and write, but doesn't add new functionality.
//  It's just a nicer way to do the same thing.
// Under the hood, it's still using Promises.

// Async :--------------------------------------------------------------------------------
/* An async function in JavaScript is a special kind of function that always returns a Promise,
and allows you to write asynchronous code that looks and behaves like synchronous code using the await keyword
*/

/* Async function always return a promise.
    a)Either you return a promise inside async function.
    b)Or if you return a value then it will automatically wrap that value in promise and return the promise.
*/

async function getData() {
  return "String/value";
}

const gD = getData();
// console.log(gD)  //get result in form of promise

// gD.then((res) => console.log(res)).catch((err) => console.error(err));

/* Await can only be used inside an async function :--------------------------------------------
    a) Await keyword is used just before promise to resolve it.
    b) Await hold the execution to get the promise result.
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolve");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolve");
  }, 10000);
});

// Using async await
async function handlePromise() {
  console.log("start");

  const val1 = await p1;  //*JS engine appears to waits for promise to settle because of await.
  console.log(val1);      //But behind the scene, Js engine doesn't waits. Then what is happening.
  console.log("mid");     //When Js Engine see await, it will suspend the execution of that function and
                          // goes to the next step(out of the function) to run rest of the script.
  const val2 = await p2;  //And when p1 resolves, js engine execute that function from where it left.
  console.log(val2);
  console.log("End");
}
// handlePromise()

// console.log("out, Js engine suspend the execution of handlePromise function")

// Normally used :--------------
// function pd(){
//     console.log("start")
//     p1.then((res) => console.log(res))   //JS engine Doesn't waits for promise to settle
//     console.log("end")
// }
// pd()

// Fetch using async await:------------
const API_URL = "https://api.github.com/users/work-saddam";

async function userData() {
  try {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}
// userData()
