////////////////////////////////////////////////////////////////////
// loop


// for loop


// for (let i = 0; i < aliens.length; i++) { // i = 0 ; i < 4 ; i + 1
//     console.log(`index ${i} : alien = ${aliens[i]}`); // จะ log ไปเรื่อยๆ จนกว่า counter ของเราจะมากกว่า aliens.length (4); และทุกครั้งที่ code-block นี้ execute เสร็จ จะอัพเดท counter (i++ = i+1)
// }



// nested for loop

const aliens = [19, 53, 35, 51];
const gods = [19,51];

const kodHodKodUntarai = [];

// for (let i = 0; i < aliens.length; i++) {
//     // console.log(`i ${i}`)
//     for (let j = 0; j < gods.length; j++) {
//         // console.log(`j ${j}`)
//         if (aliens[i] === gods[j]) {
//             console.log(`counter i ${i} : alien = ${aliens[i]} | counter j ${j} : god = ${gods[j]}`)
//             kodHodKodUntarai.push(aliens[i]);
//         }
//     }
// }

// console.log(kodHodKodUntarai) // [19, 51]

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// while loop

const cards = ['diamond','spade','heart','club'];

let currentCard

// while (currentCard !== 'spade') { // run ไปเรื่อยๆ จนกว่า currentCard จะ = cards[1];
//     currentCard = cards[Math.floor(Math.random() * 4)]; // currentCard = cards[0-3]
//     console.log(currentCard);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// do..while loop
// ต่างกันกับ while loop ตรงที่ do..while จะ execute code-block ก่อน แล้วค่อยเช็ค condition | while จะเช็คก่อนแล้วค่อย execute

// const cupsOfSugarNeeded = 4;
// let myCoffee = 0;

// do {
//     myCoffee++
//     console.log(`ใส่น้ำตาลไปแล้ว ${myCoffee} ก้อน`)
// } while (myCoffee < cupsOfSugarNeeded);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Iterators
// อธิบายง่ายๆก็ method ที่ใช้ loop รอบ array

const numArr = [1,2,3,4,5,6,7];

// Map (function)
// const function1 = (num) => {}
// function1(2)
const multi = num => num * 2

const arrMultiple = numArr.map(multi);
console.log(arrMultiple) // [2,4,6,8,10,12,14]

// filter (condition)
const smallNum = numArr.filter((num) => num < 5);
// console.log(smallNum); // [1,2,3,4]
// console.log(numArr)

// reduce (acc, curNum)
const sum = numArr.reduce((acc,curNum) => acc + curNum);
// console.log(sum); // 28