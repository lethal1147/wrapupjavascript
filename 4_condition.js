//////////////////////////////////////////////////////////////
// Condition

// if else

const checkNum = num => {
    // จะไล่เช็คจากบนลงล่าง และจะ execute code-block แรกสุดที่เป็น true
    if (num >= 5) {
        console.log('num >= 5');
    } else if (num >= 2) {
        console.log('num >= 2');
    } else {
        console.log('ไม่รู้ไม่ชี้ละ');
    }
}

checkNum(5); // num >= 5
checkNum(3); // num >= 3
checkNum(0); // ไม่รู้ไม่ชี้ละ

// ternary
// เป็นการเขียนแบบ shorthand โดยในตัวอย่างก็คือ เหมือนกับ function ข้างบนเลย
const checkNum2 = num => num >= 5 ? console.log('num >= 5') : num >= 3 ? console.log('num >= 3') : console.log('ไม่รู้ไม่ชี้ละ');
checkNum2(5) // num >= 5
checkNum2(3) // num >= 3
checkNum2(0) // ไม่รู้ไม่ชี้ละ

// Logical operator

//            && = and
//           || = or
//           ! = not