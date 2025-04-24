// let num = 23;

// let s_num = String(num);

// console.log("value:", num + " type:", typeof num);
// console.log("value:", s_num + " type:", typeof s_num);

let str = "String";

let n_str = Number(str)

console.log("value:", str + " type:", typeof str);
console.log("value:", n_str + " type:", typeof n_str);  //type will be number but value is NaN.

// NaN :- Not a Number
// whenever we try to convert non-digit in number, then its value will be NaN.

// typeof Operator :-

// 1) Primitive 
// null => object
// number  =>  number
// string => string
// symbol => symbol
// boolean => boolean
// bigint => bigint
// undefined => undefined

// 2) Non-Primitive
// object => object
// function => function
// array => object