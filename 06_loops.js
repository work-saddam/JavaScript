const arr = [1,3,5,7,9]
const obj = {
    alex:54,
    arin:32,
    aric:97,
    pri:function (){
        console.log(this.alex)
    }
}

// FOR loop :- Use for loop when the number of iterations is known.
for (let i = 0; i <arr.length; i++) {
//   console.log(arr[i])
}

// WHILE loop:- Use while loop when the condition depends on dynamic factors.
let j = 5;
while (j >= 1) {
  // console.log(j)
  j--;
}

// DO-WHILE loop:- Use do-while loop to ensure the block executes at least once.
let k = 1;
do {
//   console.log(k);
  k++;
} while (k <= 0);


// FOR-IN loop:- Use for…in loop to iterate over object properties.

    //----FOR-IN loop in OBJECTS  --> loop through the KEY of the OBJECT.
for(let key in obj){
    // console.log(key)
    // console.log(obj[key])
}

    //----FOR-IN loop in ARRAY  --> loop through the INDEX of the ARRAY. (Not recommend for ARRAY)
for(let i in arr){
  // console.log(i)
  // console.log(arr[i])
}
/*  Do not use for in over an Array if the index order is important.
It is better to use a FOR loop, FOR-OF loop, or Array.forEach() when the order is important. */


// FOR-OF loop:- for iterating through iterable objects (arrays, strings, maps, sets, and more (NOT OBJECT❌)).

    //----FOR-OF loop in OBJECTS   (https://www.geeksforgeeks.org/javascript-for-of-loop/)
// for(let a of obj){
//     console.log(a)   //Throw Error
// }

    //----FOR-OF loop in ARRAY  --> loop through the ELEMENT(value) of the ARRAY.
for(let item of arr){
    // console.log(item)
}

    //----FOR-OF loop in STRINGS
const str = "string";
for(let ch of str){
    // console.log(ch)
}

    //----FOR-OF loop in SET
const set = new Set([6,5,7,4])
for(let item of set){
    // console.log(item)
}
