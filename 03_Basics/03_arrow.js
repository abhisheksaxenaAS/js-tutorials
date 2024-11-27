// const user = {
//     username: "Abhishek",
//     price: 199,

//     welcomeMessage: function () {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);

//     }
// }
// user.welcomeMessage()
// // user.username = "Random"
// // user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Abhishek"
//     console.log(this.username);

// }
// chai()

// //this works only with object

// const chai = function(){
//     let username = "Abhishek"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "Abhishek"
//     console.log(this.username);

// }
// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(1,2));

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(4,2))

const addTwo = (num1, num2) => ({
    username: "Abhishek"

})

console.log(addTwo(2, 2));
