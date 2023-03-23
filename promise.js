// สร้าง promise ใหม่มาอันนึง
// new Promise รับ Argument เป็น function ทั้งคู่


// const promise = new Promise((resolve, reject) => {
//     let sum = 1 + 1;
//     // ถ้า sum เท่ากับ 3 จะ run resolve function (then((message) =>))
//     if (sum === 3) {
//         // นำ 'Success Message' ไปใส่เป็น argument ใน .then((mesaage) => )
//         resolve('Success Message')
//     } else {
//         // นำ 'Fail Message' ไปใส่เป็น argument ใน .catch((mesaage) => )
//         reject('Fail Message')
//     }
// })

// Run function then ในตัว promise และ promise จะส่งค่าใน resolve(message) ไปใส่ใน parameter ใน then(message)
// อันนี้จารย์เขาเรียนเป็น function ใหม่ในการส่ง argument เลยอ่านยาก เราสามารถประกาศ function ใหม่แล้วค่อยส่งทีเดียวได้
// แบบไม่เรียบร้อย

promise.then((message) => {
    console.log('This is work!' + message)
}).catch((message) => {
    console.log('This is not work!' + message)
});
        
        
// แบบเรียบร้อย

const success = message => console.log('This is work! ' + message)
const fail = message => console.log('This is not work! ' + message)
promise.then(success).catch(fail);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// object ทั่วไป ที่มี [array] เป็น value
let stocks = {
    coffee: ["cappuccino", "latte", "mocha"],
    liquid: ["hot","ice","milk"],
    cup: ["small","midium","large"],
    topping: ["chocolate","milk"]
}

// ตั้งให้ร้านเปิดไว้
let is_shop_open = true;


// สร้าง order function ที่มี 2 parameters(1.รับมาเป็น number เพื่อเอาไปใช้คำนวนเป็นวิใน setTimeout function | 2. รับเป็น function จะสร้างในนี้เลยก็ได้ หรือสร้างข้างนอกแล้วค่อยใส่ ก็ได้) ที่ return ออกมาเป็น Promise
let order = (time, work) => {
    return new Promise((resolve,reject) => {
        if (is_shop_open){ // ถ้าร้านเปิด(true) จะ execute code block นี้
            setTimeout(() => { // setTimeout จะรับ2 parameters ตัวแรกจะเป็น function ตัวสองจะเป็น number ที่ใช้หน่วยเป็น millisecond (2000 = 2วิ) function นี้จะทำให้โค้ดไม่ถูก execute ทันที จะทำหลังจากผ่านไปตามเวลาที่เราใส่ไปใน parameters ที่สอง
                resolve(work ()) // resolve(functon()) ซึ่งเรารับมาจากข้างนอก ก็ต้องไปดูรายบรรทัดว่าแต่ละการเรียก เราใช้ function อะไร ให้มันทำอะไร
            }, time) // เวลาที่รอจะถูกปล่อย
        } else { // ถ้าร้านปิด(false) จะ execute code block นี้
            reject(console.log('The shop is closed'))
        };
    })
}

// เราเรียกใช้ order( parameterแรกเป็นเวลา , parameterสองจะเป็นfunction ซึ่งในตัวอย่างนี้เป็น anonymous function ที่ไม่รับ parameter )
order(2000, () => console.log(`${stocks.coffee[0]} was selected`))

// then(parameter นี้จะเป็น function ซึ่งเหมือนเดิม เป็น anonymous function)
.then(() => {
    // แล้วก็เรียกใช้ order function อีก แต่รอบนี้ไม่มีดีเลย์
    return order(0000,() => console.log('started makeing coffee'))
})


// แล้วก็ทำแบบเดิมไปเรื่อยๆ
.then(() => {
    return order(2000,() => console.log('coffee bean in process'))
})

.then(() => {
    return order(2000,() => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`))
})

.then(() => {
    return order(1000, () => console.log('coffee mixed'))
})

.then(() => {
    return order(2000, () => console.log(`${stocks.cup[0]}`))
})

.then(() => {
    return order(3000, () => console.log(`${stocks.topping[0]} was slected`))
})

.then(() => {
    return order(1000, () => console.log('coffee was served'))
})

// ถ้าร้านปิด(false) จะใช้ catch(function => ) ประมาณนี้
.catch(() => {
    console.log('Customer left')
})

// ปิดท้าย then chain
.finally(() => {
    console.log('The shop is closed')
})

///////// result จะเป็นแบบนี้ (ในconsole) //////////
// cappuccino was selected
// started makeing coffee
// coffee bean in process
// hot and ice were selected
// coffee mixed
// small
// chocolate was slected
// coffee was served
// The shop is closed


