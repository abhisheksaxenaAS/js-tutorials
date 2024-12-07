//if
const isUserLoggedIn = true
// if (2 === "2") {
//     console.log("Condtion True, Code executed");
// }
// else {
//     console.log("Condition false.");
// }



// const temp = 40
// if (temp < 50) {
//     console.log("Temprature is less than 50");
// }
// // else {
// //     console.log("Temperature is higher than 50");
// // }
// console.log("Temperature is higher than 50");



// const score = 200
// if (score > 100) {
//     const power = "fly"
//     // let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);



// const balance = 1000
// if (balance > 500)console.log("test for balance > 500");    //implicit scoping
// // if (balance > 500)console.log("test for balance > 500"),console.log("test2");   //not a good practice



// const balance = 1000
// if (balance < 500) {
//     console.log("balance is less than 500")
// }
// else if (balance < 750) {
//     console.log("balance is less than 750")
// }
// else if (balance < 900) {
//     console.log("balance is less than 900")
// }
// else {
//     console.log("balance is less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const isloggedInFromGoogle = false
const isloggedInFromEmail = true
if (userLoggedIn && debitCard) {
    console.log("user is allowed to buy course");
}

if (isloggedInFromEmail || isloggedInFromGoogle) {
    console.log("user logged in");
}