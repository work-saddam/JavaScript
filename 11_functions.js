// Function Statement aka Function Decleration:----------------------------------- 
// f1()   //✅ Works — can call before it's defined
function f1() {
    console.log("This is a function Statement")
}

// Function Expression:------------------------------------------------------------
// f2()    //❌ ReferenceError: Cannot access 'f2' before initialization
const f2 = function(){
    console.log("This is a function Expression")
}

// Main difference between function Statement and function Expression is Hoisting.
// If you make function using function Statement, you can call it before define.
// In function Expression, you can't call it before define. It will throw Error.

// Anonymous function : function without name-------------------------------------
// function () {
//     console.log("Anonymous function")
// }

// This will through error. Then what will be the use of anonymous function.
// Anonymous function is used where the function used as values.
// It means, you assign it to a variable or pass it as an argument

// Named Function expression :--------------------------------------------------
const f4 = function x(){
    console.log("Named function expression")
}
// f4()
// x()   //❌ ReferenceError: x is not defined (we can't access this local function outside.)

// Arrow function :--------------------------------------------------------------
const f3 = () => {
    console.log("This is Arrow function")
}
// f3()

// IIFE (Immediately Invoked Function Expression) :-----------------------------------
(function (){
    console.log("This is IIFE")
})()

// Need for IIFE:-
    // --Avoid polluting the global namespace:
        // This prevents conflicts between variable names in large scripts or when combining multiple scripts.
    // --Create a private scope:
        // Useful for creating private variables or functions that cannot be accessed from outside.

/* First Class Function aka  First Class Citizens :----------------------------------
    1) a function can be passed as an argument to other functions,
    2) can be returned by another function
    3) can be assigned as a value to a variable.
*/

// 1) Function passed as arguments
function greet(name, func){
    console.log(`Hello ${name}`)
    func()
}

// greet("Alex", function(){
//     console.log("Good Morning")
// })

// 2) Function return by another function
function f5(){
    console.log("f5 called")
    return function(){
        console.log("return call")
    }
}
// f5()
// f5()()

// 3) Function assigned to variable
const sayHi = function() {
    console.log("Hi!")
}
// sayHi()


// Callback Function :--------------------------------------------------------------------------------
// Callback => A callback is a function that is passed as an argument to another function
// Callbacks are used to perform asynchronous tasks without blocking the program’s execution.

function greet(name, callback){
    console.log(`Hello ${name}`)
    callback()
}

// greet("Arin", function(){
//     console.log("Good Evening")
// })


/* Higher-order functions => functions that can take other functions as arguments 
   or return functions as results.
*/