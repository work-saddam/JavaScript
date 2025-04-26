/*
| Feature                 | var                             | let                         | const                     |
|-------------------------|---------------------------------|-----------------------------|---------------------------|
| Scope                   | Function-scoped                 | Block-scoped                | Block-scoped              |
| Hoisting                | Yes (initialized as `undefined`)| Yes (TDZ, not initialized)  | Yes (TDZ, not initialized)|
| Reassignable            | Yes                             | Yes                         | No                        |
| Redeclarable            | Yes                             | No                          | No                        |
| Initial Value Required  | No                              | No                          | Yes                       |
| Mutable (Primitive)     | Yes                             | Yes                         | No                        |
| Mutable (Objects/Arrays)| Yes                             | Yes                         | Yes (but can't reassign)  |
| Common Usage            | Avoid in modern JS              | Use when reassignment needed| Use by default            |
*/

// {}   ==>  This is block scope.
// function () {}   ==> This is function Scope

//let & const are block scope and var is function scope
{
  let x = 10;
  const y = 20;
  var z = 30;
  console.log(x); // 10
  console.log(y); // 20
  console.log(z); // 30
}

//   console.log(x); // ReferenceError: x is not defined  || (you can't access let outside)
//   console.log(y); // ReferenceError: y is not defined  || (you can't access const outside)
//   console.log(z); //30

// Redeclaration
//   --using var, you can do this.
var x = "String";
var x = 0;
console.log(x); //0
//   --using let and const, you cannot do this in same scope.

// Reassignable
//   --using var and let, you can do this. But not for const.
let a = 30;
a = 40;
// let a=40  //But you can't do this
console.log(a); //40


/* !!Best Practice
Use const by default.
Use let if you need to reassign.
Avoid var in modern JavaScrip
*/