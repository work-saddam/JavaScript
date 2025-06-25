/*JavaScript is 
    - High-level: Abstracts low-level details like memory management.
    - Dynamic: Types are flexible and resolved at runtime.
    - Synchronous (by default): Executes code line by line.
    - Single-threaded: One main call stack, no true parallel execution.
    - Interpreted & Compiled: Uses JIT compilation for speed.
*/

/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
   and you do not need to explicitly declare the type of a variable before using it. */
   
/*
There are two types of data types in java Script 
    nn bb ss u
1. Primitive = Null, Number, BigInt, Boolean, String, Symbol, Undefined.
    --primitive stores in STACK Memory.
    --they are Immutable.
    --whenever we copy variable in another variable, VALUE is passes.(pass by value).
    --By default, they are DEEP copy.
    --It means, changes done by copy variable does not affect the original.
        Because both have different memory space.
    
2. Non primitive =  Object [array, function...]
    --non-primitive stores in HEAP Memory.
    --they are Mutable.
    --whenever we copy variable in another variable, REFERENCE is passes.(pass by reference).
    --By default, they are SHALLOW copy
    --It means, changes done by either original or copy variable, it imapct the original.
        Beacuse both pointing to same memory location.
*/

let a = null;
let b = 123;
let c = true;
let d = BigInt(576);
let e = "Rock";
let f = Symbol("I am Symbol");   //Every Symbol() is unique, even with the same description
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
