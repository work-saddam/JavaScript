// SCOPE:- refer to the area where varaible can be accessed or used.

// Scope Chain:- It is a process used to find a variable. It starts by looking in the current scope.
// If the variable isn’t found there, JavaScript moves up through the chain of parent scopes, all the way to the global scope.
// if it's not found ReferenceError: variable is not defined.

// clousers:-------------------------------------------
// A closure is the combination of a function bundled together along with its lexical environment.
// In other words, a closure gives a function access to its outer scope.
// In JavaScript, closures are created every time a function is created.

// LEXICAL ENVIRONMENT:- means local memory along with the reference of lexical environment of its parent.
// lexical means in hierarchy or you can say, physically present in the code not dynamcally or run time.
// Lexical Environment is created when the global execution context is created.

function outer() {
  let a = 43;
  function inner() {
    // console.log(a);
  }
  inner();
}
outer();

// better example for explanation
function x() {
  let a = 11;
  function y() {
    console.log(a);
  }
  return y;
}

let z = x();
// console.log(z)  //function was return
// ....100 line of code
// z()
// x()()    //same thing

// Even though the execution context of x() is removed from the call stack after it finishes,
// the function y() still remembers the variable a.
//That’s because of a closure.
// When you return the function y(), JavaScript doesn't just return the function — it returns the function along with its lexical environment(clouser).
//So y() still has access to 'a' because it was lexically inside x() when it was defined.

// USES of clousers
// --Data hiding / Encapsulation
// --Callbacks
// --setTimeout

// disadvantage od clousers
//  --over consumnption of memory


// setTimeout :-------------------------------------------------------------------

// function a() {
//   var i = 10;
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
//   console.log("hello world");
// }
// a();

function a() {
  for (let i = 1; i <= 5; i++) {  //We don't use var, instead we use let Because let has block level scope,
    setTimeout(() => {         // every time when setTimeout occurs a new i variable is attached in case of let.
      console.log(i);
    }, i * 1000);               //In case of var, i refers to the same reference.
  }
}
// a();
