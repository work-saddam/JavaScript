// Create html file & add the script for better understanding.

"use strict";

// The this keyword refers to the context where a piece of code, is supposed to run.
// The value of this in JavaScript depends on how a function is called (runtime binding), not how it is defined.
// Value of this might be different in strict or non strict mode.

// this in global space :--------------------------------------------------------------
// In global space,this refers to the global object.
//  In case of browsers, this === window object. In case of node, this === global.

// console.log(this)
// console.log(global)      //global is nodejs global object. this wlll throw error in browser.
// console.log(globalThis)  //globalThis is used to target the global object in any javascript runtime environment.
                            // whether you in browser or node or any JRE.

// this inside function :--------------------------------------------------------------
// Non-Strict --> this == window/global object.
// Strict --> this == undefined

function x(){
    console.log(this)
}
// x()          //In strict mode, it will return undefined.
// window.x()  //value of this depends on how a function is called. IN strict mode, it will return window object.

//* Note :- In non-strict mode, whenever the value of 'this' keyword is undefined/null.
//          Then, the value of 'this' keyword will be replaced by global object.

// this inside object's method :-----------------------------------------------------------
// inside Object's method, this == object

const obj = {
    a:21,
    x:function(){
        console.log(this)
    }
}
// obj.x()

// this inside arrow function :--------------------------------------------------------------
//* arrow functions do not have their own 'this' binding. They inherit 'this' from the parent scope.

const obj2 = {
    a:33,
    x:() => {
        console.log(this)   //value of 'this' will be global object.
    }
}
// obj2.x()

const obj3 = {
    a:45,
    x:function(){
        const y = () => {
            console.log(this)  //value of 'this' will be object(obj3).
        }
        y()
    }
}
// obj3.x()

// 'this' inside DOM element => reference to HTML Element itself.