///////////////////////////////////////////////////////////////////////////////
// Object

const jsd4 = {
    learnerNum: 60,
    instructorNum: 3,
    brain: 0,

    god: {
        name: 'touch',
        number: 19,
        skills: ['react','ทำอาหาร','ร้องเพลง']
    },

    crying() { // methods
        return `Number of learner that cry 😭 = ${this.learnerNum}`
    }
}


// { learnerNum: 60 } <-- property
//{ learnerNum } <-- key
//{ 60 } <-- value

// การเข้าถึง value

// console.log(jsd4.learnerNum) // 60
// console.log(jsd4.crying()) // Number of learner that cry 😭 = 60

// // เข้าถึง nested object
// console.log(jsd4.god.name) // touch

// // เข้าถึง array ใน object
// console.log(jsd4.god.skills[2]); // ร้องเพลง https://www.youtube.com/watch?v=K4opgD4-oko ช่วยกันปั้มยอดวิวด้วย

// ///////////////////////////////////////////////////////////////////////////////////////
// // re-assign

// jsd4.learnerNum = 59;
// console.log(jsd4.learnerNum) // = 59 แล้ว

// // ลบ property
// delete jsd4.brain;
// console.log(jsd4) // brain หายไปแล้ว

// //////////////////////////////////////////////////////////////////////////////////////////
// // for in loop
// console.log('============================================================================')

// for (let prop in jsd4 ) {
//     console.log(`${prop} | ${jsd4[prop]}`);
// }

// ///////////////////////////////////////////////////////////////////////////////////////////
// // privacy , getter , setter

// const bankAccount = {
//     _amount: 1000,

//     get amount() { // ใช้เพื่อดักเวลามีคนต้องการเข้าถึง _amount ในกรณีที่เราไม่อยากให้เค้าได้ค่าจริงๆกลับไป อาจจะใส่ condition เพื่อเปลี่ยนค่าที่ส่งออกไป
//         return `มีระดับนึง`;
//     },

//     // set amount(newAmount) {
//     //     this._amount = newAmount
//     // }
// }

// console.log(bankAccount.amount); // 1000
// bankAccount.amount = 2000;
// console.log(bankAccount.amount); // 2000

// ///////////////////////////////////////////////////////////////////////////////////////////
// console.log('============================================================================')
// // Factory function

// ใช้เพื่อสร้าง object ในรูปแบบเดียวกัน กรณีที่อยากได้หลายๆอัน
const movie = (name, director, time) => {
    return {
        name: name,
        director: director,
        time: time,
        showEndCredit() {
            return `directed by ${this.director}`
        }
    }
}

const touchMan = movie('touch man','touch',120);
// console.log(touchMan);
// const brightMan = movie('bright man', 'bright', 200);
// console.log(brightMan)

// Destructured Assignment

// const directorOfTouchMan = touchMan.director
// console.log(directorOfTouchMan)

const { name,director,time } = touchMan;
console.log(name);
console.log(director);
console.log(time);