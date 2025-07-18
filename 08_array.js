// Arrays are a special kind of objects, with numbered indexes.
    //In JavaScript, arrays use numbered indexes.  
    // In JavaScript, objects use named indexes.

// Create Array using Literal
const fruit_bucket = ["apple", "banana", "orange"]

// Create using new Keyword (Constructor)
const veg_bucket = new Array("pumpkin","Spinach","cabbage")

// Both the above methods do exactly the same. 
// Use the array literal method for efficiency, readability, and speed.

let a2 = new Array(5,4)  //this was okay
// console.log(a2)  //[5, 4]
let a1 = new Array(5)  //*But this will create array of 5 EMPTY items
// console.log(a1)  //[ <5 empty items> ]

// console.log(veg_bucket)          //log full array
// console.log(fruit_bucket[1])     //log element in index 1
// console.log(fruit_bucket[-1])     //undefined
// console.log(fruit_bucket.length)  //log length of the array

// Adding Elements to the Array:------------
fruit_bucket.push("water-melon","kiwi")  //push() method ADD the element to the END.
                                         //And if you assign to a variable, it will return the length of array.
// console.log(fruit_bucket)
veg_bucket.unshift("onion")      // unshift() method ADD the element to the STARTNG.
                                //And if you assign to a variable, it will return the length of array.
// console.log(veg_bucket)

// Removing Elements from an Array:---------------
fruit_bucket.pop()              //pop() method REMOVE an element from the last index
                               //And if you assign to a variable, it will return the deleted element.
// console.log(fruit_bucket)
veg_bucket.shift()              //shift() method removes the element from the first index
                               //And if you assign to a variable, it will return the deleted element.
// console.log(veg_bucket)

// slice vs splice:-------------
const a = [8,7,6,5,4,3]

// Slice() method "returns the new array", it (DOESN'T affect the ORIGINAL) 
const sArray = a.slice(1,4)   // End index EXCLUDED
// console.log(sArray)    //[ 7, 6, 5 ]

// Splice() method used to Insert and Remove elements in Original array ***********************
// * use toSpliced() method if you don't want to change the original array.
// (first parameter: starting index),
// (second parameter: how many item should REMOVE).
// (rest of the parameter: ADD the all items)

a.splice(1,3)   // from index 1, remove 3 element
// console.log(a)   //[ 8, 4, 3 ]

a.splice(1,1,9,10,11)   //from index 1, remove 1 element, insert all the argument we passed
// console.log(a)   //[ 8, 9, 10, 11, 3 ]

a.splice(-1,1,98,99)   //*it can also take negative index.(-1 => a.length-1, -2 => a.length-2)
// console.log(a)   //[ 8, 9, 10, 11, 98, 99 ]

// flat() method:---------
const arr = [2, 3, [8,9], [4, 5, [6,7, [3,4]]], 0]
const res1 = arr.flat()       //1 level depth
const res2 = arr.flat(2)     //2 level depth
const res3 = arr.flat(Infinity)  //infinite level depth
// console.log(res1)
// console.log(res2)
// console.log(res3)

// toString() method:- convert array into string (DOESN'T affect the ORIGINAL) -------------
const str1 = veg_bucket.toString()
// console.log(str1)   //pumpkin,Spinach,cabbage

// join() method also convert all array elements into a string. In addition you can specify the separator ---
// it also (DOESN'T affect the ORIGINAL)
const str2 = veg_bucket.join("*")
// console.log(str2)   //pumpkin*Spinach*cabbage


// How to check whether the variable is ARRAY or not:-----------------------------------
// typeof Array is object. ******
// 1) Array.isArray() 
// 2) instanceof 

// console.log(Array.isArray(fruit_bucket))     //true
// console.log(veg_bucket instanceof Array)     //true


// Array concatenation (DOESN'T affect the ORIGINAL):-------------------------------------
// 1) using concat()
// 2) using spread operator

const result1 = fruit_bucket.concat(veg_bucket)
// console.log(result1)
// console.log(fruit_bucket)     //(DOESN'T affect the ORIGINAL)

const result2 = [...fruit_bucket, ...veg_bucket]
// console.log(result2)

// Searching in array:-----------------------------------------------------------------------------------
const arr2 = [10,20,30,40,50]

// indexOf() method gives the index of the matching element.
let p = arr2.indexOf(3)
// console.log(p)   //-1 (because 3 is not in array)

// include() method return true/flase :-----------------
// console.log(arr2.includes(30))      //true
// console.log(arr2.includes("30"))    //false

// find() method  :-----------------------
// give the value of the first element in the array that satisfies the condition.
// to get all element that staisfy the condition use Filter() method.
// findLast() method start iterating from the end, gives the last element that satisfies the condition.

let find = arr2.find((element) => {
    return element>20;
})
// console.log(find)      //30   return only the 1st element that satisfy the condition.

// findIndex() method:--------------------
// findIndex method gives the index of 1st element that passes the conditiion.
// findLastIndex() method start iterating from the end, give the index of last element that passes the conditiion.
let find_index = arr2.findIndex((element) =>{
    return element>20
})
// console.log(find_index)   //2 return the index of first element that passes the condition.

// SORTING in array:--------------------------------------------------------------------------------------
const arrStr = ["ab","zc","fd","ea"]
const arrNum = [25,53,112,9,200]

// sort() method change the original array:---------------
// * use toSorted() method if you don't want to change the original array.

// Alphabatic sort :-------
// By default, the sort() function sorts values as strings.
arrStr.sort()
arrNum.sort()
// console.log(arrStr)
// console.log(arrNum)   //this will fail to sort the numeric array.

// Numeric sort ----------
// By default, the sort() function sorts values as strings.
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// You can fix this by providing a compare function:

arrNum.sort((a,b) => a-b)
// console.log(arrNum)


// reverse() method chanage the original array.:--------------
// It will reverse the array (not sort in decending order)
// * use toReversed() method if you don't want to change the original array.
arrStr.reverse()
// console.log(arrStr)


// Iterating Through Array Elements:---------------------------------------------------------------------
const iarr = [3,5,7,9,0]
// ---for loop
for(let i=0; i<iarr.length; i++){
    // console.log(iarr[i])
}

// ---for of (loop through the values).
//  ------ for-in loop through the index(not recommeded).
for(let e of iarr){
    // console.log(e)
}

// Arrar.forEach() :---------
// forEach does not return a value (i.e., it returns undefined).
iarr.forEach((element) => {
    // console.log(element)
})

// some() method checks if at LEAST ONE element satisfies the condition :-----------------
//* return boolean(true/false).
let bol1 = iarr.some((element) => {
    return element >5
})
// console.log(bol1)    //true

// every() method checks if ALL element satisfies the condition :-------------
//* return boolean(true/false).
let bol2 = iarr.every((element) => {
    return element >5
})
// console.log(bol2)   //false

// Array.of()  vs Array.from() :-----------------------------------------------------------------------

// Array.of() method Creates a new array from the arguments passed to it.
const ofArr1 = Array.of(3,4,5)
const ofArr2 = Array.of(4)
const ofArr3 = Array(4)     //* this create empty array with length 4
// console.log(ofArr1)    //[ 3, 4, 5 ]
// console.log(ofArr2)    //[4]
// console.log(ofArr3)    //[ <4 empty items> ]

// Array.from() method Creates a new array from an array-like or iterable object (e.g. string, Set, arguments, NodeList).
const fromArr1 = Array.from("string")
const fromArr2 = Array.from([1,2,3])
// console.log(fromArr1)   // [ 's', 't', 'r', 'i', 'n', 'g' ]
// console.log(fromArr2)   // [ 1, 2, 3 ]

// Sparse arrays:-----------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays