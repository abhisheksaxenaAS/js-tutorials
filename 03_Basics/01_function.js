

function MyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}
//MyName()

// function addtwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addtwoNumbers(5,"7")

function addtwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addtwoNumbers(2, 1)
//console.log("Result is", result)

function loginUsermessage(username) {
    // if(username===undefined){
    //     console.log("Please enter a valid username");
    //     return username
    //     }
    if (!username) {
        console.log("Please enter a valid username");
        return username
    }
    return `${username} just logged in.`
}
// const message = loginUsermessage("Abhishek")
// console.log(message);

// console.log(loginUsermessage("Abhishek"))

// console.log(loginUsermessage());


function calculateCartPrice(price1,price2,...prices){
return prices
}
console.log(calculateCartPrice(100,50,150,300,400))



const user={
username:"Abhishek",
price:499
}
function objectHandle(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
// objectHandle(user)

objectHandle({
    username:"Abhi",
    price:599
})

const newArray=[100,200,300]

function returnSecondValue(getArray){
return getArray[1]

}
console.log(returnSecondValue(newArray))
