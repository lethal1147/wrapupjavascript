////////////////////////////////////////////////////////////
// Array


// การเข้าถึง
// console.log(number[0]); // 3
// console.log(number[3]); // 6
// console.log(number[number.length - 1]); // ตัวสุดท้ายของ array = 8

// console.log(number.length); // 6 <-- จำนวน element ใน object

const number = [3,4,5,6,7,8]
// methods
// Non-mutating ไม่เปลี่ยนค่า array ที่เราใช้ method ใส่
const sliced = number.slice(1,3) // ตัดค่าของจุดเริ่ม index: 1 , จนถึง index: 3
console.log(sliced); // [4, 5]

const indexEight = number.indexOf(8); // หา index ของเลข 8
console.log(indexEight); // 5
console.log(number) // [3,4,5,6,7,8] จะเห็นว่า array number เราก็ยังอยู่ดี


// Mutating เปลี่ยนค่า array ที่เราใช้ method ใส่
number.push(9); // เพิ่มข้างหลัง
console.log(number) // [3,4,5,6,7,8,9];

number.unshift(2); // เพิ่มข้างหน้า
console.log(number); // [2,3,4,5,6,7,8,9];

const poped = number.pop(); // ลบตัวท้าย
console.log(number); // [2,3,4,5,6,7,8]
console.log(poped)