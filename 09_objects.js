/*
In JavaScript, objects are a fundamental data structure used to store collections of key-value pairs.
Each key is a string (or symbol), and its value can be anything: a number, string, function, array, or even another object.
*/

// Creating object in JS:-----
    // --1. Creating object with a built-in constructor
    // --2. Using object literals/ object initializers
    // --3. Creating object with Object.create() method
    // --4. Creating object with a constructor function
    // --5. Using es6 classes

// --1. Create Object using built-in constructor :------------------
// if we create object using constructor, Singleton object is created.
const obj = new Object()
// console.log(obj) 

// if you want to add symbol as a key in objects
    // 1. define the symbol.
    // 2. add in object, enclosed with square brackets.
    //    if you dont use brackets, it will take as a string not Symbol.

    const mySym = Symbol("key1")

// --2. Create Object using Object literals/ object initializers :--------------------
const user = {
    name : "Alex",
    "full name" : "Alex Jonathan",
    age : 23,
    email : "alex@gmail.com",
    greeting : function () {
        return `hello, ${this.name}`
    },
    [mySym] : "myKey1"
}
// Behind the scene, keys are stored in form of string (or symbol).

// console.log(user)
// console.log(user.name)
// console.log(user["email"])   //you can also access like this
// console.log(user["full name"])    //only option to access this key
// console.log(user[mySym])        //only option to access symbol

user.email = "test@email.com"   //over-write the properties
// console.log(user)

user.address = "Mumbai, Maharastra"  //adding the properties
// console.log(user)

delete user.address;         //deleting the property
// delete user["address"];         //deleting the property
// console.log(user)

// console.log(user.greeting())   //accessing the method
// console.log(user.greeting)   //this will return the function expression

// Looping in objects :-------------------------------
for (let key in user) {
//    console.log(key)  //log only the keys
    // console.log(user[key])  //log the values
    // console.log(user.key)  //log undefined (❌this will not work)
    // console.log(`${key} : ${user[key]}`)
}

// Object concatination :------------------------------------
// 1) Object.assign()
// 2) Spread operator

// 1) Object.assign():----------------------------
//  is used to copy the values and properties from one or more source objects to a target object
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3:"c" , 4: "d"}
// const res = Object.assign(obj1,obj2)   //1st parameter was target object and rest was source.
const res = Object.assign({},obj1,obj2)   //*Better approach, it doesn't modifies the obj1.
// console.log(res)
// console.log(obj1)
// console.log(obj2)

// 2) Spread operator
const res2 = {...obj1, ...obj2}        //we usually use this
// console.log(res2)

// Object.keys()  return the array of all keys(only enumerable) :-------------------------
// If you want to get both enumerable & non-enumerable, use Object.getOwnPropertyNames(obj)
const keys = Object.keys(user)
// console.log(keys)

// Object.values()  return the array of values :-------------------------
const values = Object.values(user)
// console.log(values)

// Object.entries()  return the array of [[key,value], [key,value....]] :--------------
const props = Object.entries(user)
// console.log(props)


// Object.freeze() :----------------------------
// ❌ You cannot add new properties.
// ❌ You cannot delete existing properties.
// ❌ You cannot change existing property values.
// ❌ You cannot reconfigure properties (they become non-writable and non-configurable).

const obj3 = {
    prop1:42
}

Object.freeze(obj3);

obj3.prop1 = 31          // can't changed the value
obj3.prop2 = 67;        // can't add the property
delete obj3.prop1       // can.t delete the property
// No error in non-strict mode,but Throws an error in strict mode.

// console.log(obj3.prop)   // output: 42
// console.log(obj3)
// console.log(Object.isFrozen(obj3))   //Returns true if object is frozen


// Object.seal() :-------------------------------
// ❌ You cannot add new properties.
// ❌ You cannot delete existing properties.
// ✅ You can still change values of writable properties.
// ❌ You cannot reconfigure properties

const obj4 = {
    name : "Alice",
    age : 30
}

Object.seal(obj4);

obj4.city = "New York"   //can't add the property
delete obj4.age;        //can't delete the property
obj4.name = "Bob"       //* we can change the value

// console.log(obj4.city); // undefined
// console.log(obj4.age)    //30
// console.log(obj4.name)   //Bob
// console.log(Object.isSealed(obj4))  //Returns true if object is sealed

/* 🔄 Comparison: preventExtensions() vs seal() vs freeze()

| Feature                    | Object.preventExtensions() | Object.seal()       | Object.freeze() |
| -------------------------- | -------------------------- | ------------------- | --------------- |
| Add new properties         | ❌ No                      | ❌ No               | ❌ No         |
| Delete existing properties | ✅ Yes                     | ❌ No               | ❌ No         |
| Modify existing values     | ✅ Yes (if writable)       | ✅ Yes (if writable)| ❌ No         |
| Reconfigure properties     | ✅ Yes                     | ❌ No               | ❌ No         |
*/

// Object.hasOwn() return boolean(true/false) :------------
const bool1 = Object.hasOwn(user,"name")    //Newer one ( more concise and safer)
const bool2 = user.hasOwnProperty('name')   //Older
// console.log(bool1)
// console.log(bool2)

// --3. Creating object with Object.create() method :-----------------------------------------------
// It creates a new object, using an existing object as the prototype of the newly created object.
const person = {
    isHuman : false,
    printIntro : function(){
        console.log(`My name is ${this.name}. Am i human? ${this.isHuman}`)
    }
}

const alex = Object.create(person)

// console.log(alex)     // {}
// console.log(alex.isHuman)  // false
alex.name = "Alexander"  
alex.isHuman = true
// console.log(alex)     //{ name: 'Alexander', isHuman: true }
// alex.printIntro()       //My name is Alexander. Am i human? true

// --4. Creating object with a constructor function :---------------------------------------------
// Always create constructor function with Capital letter***
function Car(make,model,year){    
    this.make = make
    this.model = model
    this.year = year
} 

const car1 = new Car("Nissan" ,"300zx" , "1992") //create any number of Car objects by using new keyword.
const car2 = new Car("Tesla", "cyber truck", "2023")
// console.log(car1)
// console.log(car2)

//* if you want to add property/method to constructor function
// Car.fullName = function(){           //! you can't add property/method without using 'prototype'
//     return `${this.make} ${this.model}`
// }

Car.prototype.fullName = function(){
    return `${this.make} ${this.model}`
}
// console.log(car1.fullName())



//* Comparing objects :----------------------------------------------------------------------------------
// In JavaScript, objects are a reference type. 
// Two distinct objects are never equal, even if they have the same properties. 
// Only comparing the same object reference with itself yields true.

// Two variables, two distinct objects with the same properties
const fruit1 = { name: "apple" };
const anotherFruit1 = { name: "apple" };

// console.log(fruit1 == anotherFruit1);     // return false
// console.log(fruit1 === anotherFruit1);     // return false

// Two variables, a single object
const fruit = { name: "apple" };
const anotherFruit = fruit; // Assign fruit object reference to anotherFruit

// Here fruit and anotherFruit are pointing to same object
// console.log(fruit == anotherFruit);     // return true
// console.log(fruit === anotherFruit);    // return true

// If you change the value of original/copy object, it will reflect in both, because reference are passed.
fruit.name = "grape";
// console.log(anotherFruit); // { name: "grape" }; not { name: "apple" }