

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

console.log(loginUsermessage());
