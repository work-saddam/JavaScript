// Type Coercion happens when JavaScript automatically changes one type of value into another.

// 1.Number Coercion
// If we use (+) operator:- if one of the operand is string then other will also converted to string.
console.log(5 + 5);
// Answer: 10
console.log("5" + 5);
// Answer: 55
console.log("1" + 2 + 5);       //****
// Answer: 125
console.log(1 + 2 + "5");       //****
// Answer:35

//If we use (-,*,/) operator:- String wil convert to number if possible.
console.log("5" - 3);
// Answer:2
console.log("5" * 3);
// Answer:15
console.log("5" / 3);
// Answer:1.666

// If not possible to convert string into number it will return NaN(Not a Number).
console.log(5 - "str");
// Answer:NaN


// 2.Boolean Coercion
console.log(Boolean("str"));
// Answer: true
console.log(Boolean(""));      //****
// Answer: false
console.log(Boolean({ a: 10 }));
// Answer: true
console.log(Boolean({}));       //****
// Answer: true
console.log(Boolean([1, 2, 3]));
// Answer:true
console.log(Boolean([]));       //****
// Answer:true
console.log(Boolean(0));
// Answer:false
console.log(Boolean(1));
// Answer:true
console.log(Boolean(2));
// Answer:true
console.log(Boolean(null));
// Answer:false
console.log(Boolean(undefined));
// Answer:false


// Corner cases
console.log(0 == "0"); 
// Answer:true
console.log(0 === "0");   //Strictly check:- it also checks the data-type
// Answer:false
console.log(0 == false); 
// Answer:true
console.log(0 === false); 
// Answer:false
console.log(" " + 0 == 0);   //*****
// Answer:true

console.log(null == undefined); 
// Answer:true
console.log(null === undefined); 
// Answer:false
console.log(null + 1);      //*****
// Answer:1

console.log(NaN == NaN);   //*********
// Answer:false
console.log(isNaN(NaN)); 
// Answer:true
