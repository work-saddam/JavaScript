// JavaScript has classes—introduced in ES6 (ECMAScript 2015)—but
// they are  syntactic sugar over the existing prototype-based inheritance.

// 4 pillar of OOP:-----------
// Abstraction :- Hiding complex implementation details and exposing only essential features.
// Incapsulation :- Bundling data (properties) and methods (functions) into a single unit (class) and restricting direct access.
// Inheritance :- Creating new classes based on existing ones. A class that inherits from another class can reuse the methods and fields of that class.
// Polymorphism :- Same method name behaves differently in different classes.

// Class :- class is a blueprint for creating objects with shared properties and methods.
// Object:- Object is an instance of a class. & object is often referred to as a real-time or real-world entity.
// Constructor:- constructor() method is a special method that is automatically called when an instance of the class is created.
                // It’s used to initialize properties of the new object.
                // There can only be one constructor per class. (Having multiple will cause a syntax error.)
                // A constructor can use the super keyword to call the constructor of the super class.

/* 🧠 What Is a Prototype?
Prototypes are a fundamental mechanism that enables inheritance and property sharing between objects. 
Every JavaScript object has an internal link to another object called its prototype (except the base object).

Prototype Chain:  When you try to access a property/method on an object, JavaScript first looks for it on the object itself.
If not found, it looks up the prototype chain until it finds the property or reaches the end of the chain. */

// __proto__ :-__proto__ is a property in JavaScript that refers to the prototype of an object.
                // __proto__ is a getter/setter for [[Prototype]].
                // It is deprecated in favor of Object.getPrototypeOf(obj) and Object.setPrototypeOf(obj, proto).

//* 'new' keyword is used to create new object from a constructor function or class. 
//    --1. Creates a new empty object.
//    --2. Sets the prototype of that object to the constructor’s prototype.
//    --3. Binds this inside the constructor to the new object.
//    --4. Executes the constructor function or class body.
//    --5. Returns the new object.

// Using class (ES6+):-------------------------------------------------------------------------
class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    getDetail(){
        return `my name is ${this.name} and my age is ${this.age}`
    }
}

const person1 = new Person("Alice",32)
// console.log(person1)
// console.log(person1.getDetail())


// Behind the scene:-----------------------------------------------------
// Constructor function :------------------------------------------------------------------------
const User = function (name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
};

//with new keyword, we can create multiple distinct instances from the same "blueprint" (function or class).
const user1 = new User("Alex", 21, "alex@email.com"); 
const user2 = new User("bob", 43, "bob@email.com")
// console.log(user1);
// console.log(user2);

//* if you want to add property/method to constructor function or class.
    //! you can't add property/method without using 'prototype' keyword.
// User.getDetail = function(){
//     return `My name is ${this.username} and my age is ${this.age}`
// }

User.prototype.getDetail = function(){
    return `My name is ${this.username} and my age is ${this.age}`
}
// console.log(user1.getDetail())




