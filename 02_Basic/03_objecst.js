//Singletone

//Object literals

//Object.create   constructor method

const mySym = Symbol("Key1")
const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek Saxena",
    age: 18,
    city: "GZB",
    email: "abhishek@gmail.com",
    //mySym: "myKey1",
    [mySym]: "myKey1",
    isLoggedIn: false,
    isLoggedIn: ["Sunday", "Wednesday"]
}

// //we can access object like JsUser.---
// console.log(JsUser.email)

// //console.log(JsUser[email]) will give error
// console.log(JsUser["email"])

// //console.log(JsUser.mySym);
// console.log(JsUser[mySym]);

// //update a value
// JsUser.city = "Delhi"
// console.log(JsUser.city)

//freeze a object sothat nooone can change the value 

// Object.freeze(JsUser)

// JsUser.city = "Dubai"
// console.log(JsUser.city)

JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greeting2 = function () {
    console.log(`Hello Js User,${this.name}`);
}

// console.log(JsUser.greeting())
// // console.log(JsUser.greeting)

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

