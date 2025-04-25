/*JavaScript is 
    --high level
    --dynamic
    --syncronous
    --single threaded
    -- interpreted & compiled:- (Just In Time Compile)
*/

/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. */

/*
There are two types of data types in java Script 
    nn bb ss u
1. Primitive = Null, Number, BigInt, Boolean, String, Symbol, Undefined.
    --primitive stores in STACK Memory.
    --whenever we copy variable in another variable, VALUE is passes.(call by value).
    --By default, they are DEEP copy.
    --It means, changes done by copy variable does not affect the original. Because both have different memory space.
2. Non primitive =  Object [array, function...]
    --non-primitive stores in HEAP Memory.
    --whenever we copy variable in another variable, REFERENCE is passes.(call by reference).
    --By default, they are SHALLOW copy
    --It means, changes done by either original or copy variable, it imapct the original. Beacuse both pointing to same memory location.
*/

let a = null;
let b = 123;
let c = true;
let d = BigInt(576);
let e = "Rock";
let f = Symbol("I am Symbol");
let g; // let g = undefined   //Both are same

console.log(a, b, c, d, e, f, g);
console.log(typeof c);

// Objects
const item = {
  name: "Alex",
  id: 23,
  present: true,
  result: undefined,
};
console.log(item);
console.log(item.id);

// Array
var arr = [1, 2, 3, 4, 5];
console.log(arr);
