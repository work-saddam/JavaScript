// Event loop is a mechanism that allows JavaScript to execute asynchronous code in a non-blocking manner,
//  despite being single-threaded.

/**
 🔄 What is the Event Loop?
JavaScript runs in a single-threaded environment, meaning it can only do one thing at a time.
But thanks to the event loop, JavaScript can handle asynchronous operations by:

1) Executing synchronous code in the call stack.
2) Delegating async operations (like setTimeout, HTTP requests) to the Web APIs (provided by the browser or Node.js).
3) Putting the callback of those operations into the callback queue (or microtask queue for Promises).
4) The event loop constantly checks if the call stack is empty, and if so, pushes queued callbacks to the call stack for execution.
 */

// Example-1 (setTimeout)--------------------------------------------

// console.log("start")
// setTimeout(() => console.log("Timer"),3000)
// console.log("End")

/**  
 Output:
    Start
    End
    Timer (after 3 sec)
 */

// Example-2 (setTimeout & fetch)----------------------------------------------

// console.log("Start");

// setTimeout(() => console.log("Timer"),3000);

// fetch("https://api.github.com/users/work-saddam")
//   .then((data) => data.json())
//   .then((res) => console.log("Fetch Data"));

// console.log("End")

/**
 Output: fetch returns a promise so, promise go to microtask queue & microtask queue has more priority.
            That's why fetch logs before timer.
    Start
    End
    Fetch Data
    Timer
 */

// Example-3 (Fake delay) to show these callback only execute when call-stack was empty (not after exactly 3s).

console.log("Start");

setTimeout(() => console.log("Timer"),0);

// we don't use fetch, this will cause unexpected output because of network latency.
// fetch("https://api.github.com/users/work-saddam")
//   .then(res => res.json()) 
//   .then(data => console.log("Fetch Data"));

Promise.resolve().then(() => console.log("Promise"))

let start = Date.now()
let end = start + 5000
while(start<end){
    start = Date.now()
}

console.log("End")

/**
Output: Here, we block our main thread using while loop to show all the callbacks whether it is in
         microtask queue or callback queue. It will only execute when our call stack was empty.
    Start
    End
    Promise
    Timer
 */