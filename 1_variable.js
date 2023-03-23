/////////////////////////////////////////////////////////////////////////////////////////////////
// Declaration

let kimAge = 22;
console.log(kimAge); // 22
// re-assign
kimAge = 23;
// console.log(kimAge); // ตอนนี้ 23 ละ

const praewAge = 26;
// console.log(praewAge) // 26
// praewAge = 25;
// console.log(praewAge) // TypeError : Assignment to constant variable


// var กับ let

{
    // let touchAge = 99;
    var mikeAge = 31;
}

// console.log(touchAge); // ReferenceError : touchAge is not defined
console.log(mikeAge); // 31

// console.log(poohAge) // undefined
// console.log(boomAge) // ReferenceError : Cannot access 'boomAge' before initialization
let boomAge = 26;
var poohAge = 24;

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scope

// Global Scope

const testFunction = () => {
    // function scope
    let brightAge = 50;
}

{
    // block scope
}

// console.log(brightAge); // ReferenceError : touchAge is not defined


