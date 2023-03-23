/////////////////////////////////////////////////////////////////////////////////////////////////
// Data Type

// Data ที่สามารถเก็บ value

// String
const kimName = 'Kim'
console.log(typeof kimName); // string

// Number
let kimAge = 22;
console.log(typeof kimAge); // number

// Boolean
const confused = true;
console.log(typeof confused); // boolean

// Object
const kim = {
    name: 'kim',
    age: 22,
    smart: false,
}
console.log(typeof kim); // object
// โดยใน Object จะมี property ได้หลายๆอย่าย เช่น name: 'kim' ทั้งหมดนี้คือ property, name คือ key และ 'kim' คือ value ของ name

// Array
const learner = [1,2,3,4,5];
console.log(typeof learner) // object
// Array เป็น Object เหมือนกัน ** เป็น Object ที่มี index เป็น key **

// function
function multiple(num) {
    return num * 2;
}
console.log(typeof multiple); // function

//Data ที่ไม่มี value

// Undefined
let brain
// console.log(typeof brain); // undefined

// Null
let input = null;
// console.log(typeof input); // object <-- ไม่มั่นใจในเรื่อง null เหมือนกัน เอาเป็นว่ามันมี Datatype นี้อยู่ด้วยละกันนะ 555

// ทุก Data type จะมีค่า Truthy value กับ Falsy value
// ค่าที่เป็น Falsy / false
/*

null // null
undefined // undefined
false // boolean
NaN // number ** Not a nunber
0 // number
-0 // number
0n // bigInt
"" // empty string
document.all // Object ตัวเดียวที่เป็น falsy ใน javascript

*/