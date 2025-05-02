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
// console.log(fruit_bucket.length)  //log length of the array

// Adding Elements to the Array:------------
fruit_bucket.push("water-melon","kiwi")  //push() method ADD the element to the END.
// console.log(fruit_bucket)
veg_bucket.unshift("onion")      // unshift() method ADD the element to the STARTNG.
// console.log(veg_bucket)

// Removing Elements from an Array:---------------
fruit_bucket.pop()              //pop() method REMOVE an element from the last index
// console.log(fruit_bucket)
veg_bucket.shift()              //shift() method removes the element from the first index
// console.log(veg_bucket)

// slice vs splice:-------------
const a = [8,7,6,5,4,3]

// Slice() method returns the new array, it (DOESN'T affect the ORIGINAL) 
const sArray = a.slice(1,4)   // End index EXCLUDED
// console.log(sArray)

// Splice() method used to Insert and Remove elements in Original array ***********************
// * use toSpliced() method if you don't want to change the original array.
// (first parameter: starting index),
// (second parameter: how many item should REMOVE).
// (rest of the parameter: ADD the all items)

a.splice(1,3)   // from index 1, remove 3 element
// console.log(a)

a.splice(1,1,9,10,11)   //from index 1, remove 1 element, insert all the argument we passed
// console.log(a)

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
// console.log(str1)

// join() method also joins all array elements into a string. In addition you can specify the separator ---
// it also (DOESN'T affect the ORIGINAL)
const str2 = veg_bucket.join("*")
// console.log(str2)


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

arrNum.sort(function (a,b){
    return a-b
})
// console.log(arrNum)


// reverse() method chanage the original array.:--------------
// It will reverse the array (not sort in decending order)
// * use toReversed() method if you don't want to change the original array.
arrStr.reverse()
// console.log(arrStr)


