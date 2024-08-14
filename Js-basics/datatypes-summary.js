
//Primitive

//7 types:String,Number,Boolen,null,undefined, Symbol,BigInt



const score = 100
const scoreValue= 100.23
const BigNumber=2343432553253532532533532n

const isLoggedin = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

// Reference(Non-Primitive)

//Array,Objects,Functions 

const heros=["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"Abhishek",
    age: 21,
}

const myFunction= function(){
    console.log("Hello Duniya");
}

//console.log(typeof BigNumber);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),     Heap(Non-primitive)
 let myName = "Abhishek"
 let anotherName="Ankur"
 anotherName="ABC"
//  console.log(myName);
//  console.log(anotherName);
 

let user1 = {
    name:"Abhishek" ,
    upi:"user1@ybl"
}
 let user2 = user1
 user2.upi= "user2@ybl"

 console.log(user1.upi);
 console.log(user2.upi);
 
 
/*stack gives a copy and heap always give reference to the 
changes made in heap change its original value */