////////////////////////////////////////////////////////////////
// Function

// การประกาศ function

// 1. Function Declarations
function multipleNum(num) {
    return num * 2
}
console.log(multipleNum(5)); // 10

// 2. Function Expressions

const minusNum = function (num) {
    return num - 2;
}
console.log(minusNum(5)); // 3

// 3. Arrow Function

// 3.1 | 2 parameters
const plusNum = (a,b) => a + b;

console.log(plusNum(5,5)) // 10

// 3.2 | 1 parameter
const divNum = num => num / 2;
console.log(divNum(10)) // 5

// 3.3 | no parameter
const helloWorld = () => console.log('Hello world!')
helloWorld();