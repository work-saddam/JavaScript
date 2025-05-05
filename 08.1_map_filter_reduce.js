const radius = [3, 4, 5, 6];

function area(radius) {
  return Math.PI * radius * radius;
}

// General method:----------------------
// function cal(radius){
//     let output =[]
//     for(let i=0; i<radius.length; i++){
//         output.push(area(radius[i]))
//     }
//     return output
// }

// console.log(cal(radius))

// Array.map() :----------------------------------------------------------------------------
// method creates a new array by performing a function on each array element.
//  (It Doesn't change the Original array)

const arr1 = radius.map(area);         //Using map function
// console.log(arr1);

const arr2 = radius.map((ele) => {     //directly define the funtion
  return 2 * Math.PI * ele;
});
// console.log(arr2)

const user = [
    { firstName: "abhi", lastName: "singh", age: 24 },
    { firstName: "rahul", lastName: "das", age: 26 },
    { firstName: "raj", lastName: "vyas", age: 24 },
    { firstName: "ram", lastName: "baba", age: 29 },
];

// Array.filter() :---------------------------------------------------------------------
// method creates a new array with array elements that pass a test.

// Q1. make an array where user age>24
const arr3 = user.filter((ele) => {
    return ele.age > 24
})
// console.log(arr3)

// Q2. make an array od user firstName where user age>24
const arr4 = user.filter( ele => ele.age>24).map( ele => ele.firstName)
// console.log(arr4)

// Using reduce
const arr6 = user.reduce((acc,curr) => {
    if(curr.age>24){
        acc.push(curr.firstName)
    }
    return acc
},[])
// console.log(arr6)

// Array.reduce() :--------------------------------------------------------------------------
// method runs a function on each array element to produce (reduce it to) a single value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// Q3. sum of all the element of the array.
const arra = [1,2,3,4]
const sum = arra.reduce((acc,curr) => {
    return acc+curr
},0)
console.log(sum)