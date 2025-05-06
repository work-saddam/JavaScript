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


