//  Strings are IMMUTABLE *********

let boy1 = "Alex"
console.log(typeof boy1);

// using Constructor
let boy2 = new String("Arin")
console.log(typeof boy2);

// Template Literals (String Interpolation)
let sen= `${boy1} is a friend of ${boy2}`       //using backtick
// console.log(sen)

// console.log(boy1.length)
// console.log(boy1.toUpperCase())
// console.log(boy2.toLowerCase())

// console.log(boy1.concat(boy2))
console.log(boy1.charAt(5))    //if out of index, nothing print.
console.log(boy2.indexOf("x"))   // if given char/word not found,return: -1  

console.log(sen.replace("friend","enemy"))  //replace only first occurence. use "replaceAll()" to replace all occurence.

let t="   as of   now      "
console.log(t.trim())   //remove extra white space from start & end only

let splitString = sen.split(" ")   //returrn the array or sub-string
console.log(splitString)

// https://www.geeksforgeeks.org/difference-between-string-slice-and-string-substring-in-javascript/
console.log(sen.substring(1,6))  //exclude last index
console.log(sen.slice(1,6))   //exclude last index
console.log(sen.length)