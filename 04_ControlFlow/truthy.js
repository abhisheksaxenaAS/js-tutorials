// const userEmail = "Abhi@edu"
 const userEmail= " "      //empty string is false
// const userEmail= []      //empty array is true
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//TruthandFalsyValue----------------------------------------------
// >falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN(NotaNumber)    //""

// >truthy values
// "0",'false',"false", " ", [],{},function(){}                     //" "

// for checking array
// //  if (userEmail.length===0){
// // console.log("Array is empty");
// // }

// // for checking object
// const empObj={

// }
// if (Object.keys(empObj).length===0) {
//     console.log("Obj is empty");
// }

// //Nullish  Coalescring Operator(??):nul undefined

// let val1
// val1= 1??10
// val1 = null?? 10

// val1=undefined??69
// val1=undefined??13??69

// console.log(val1);


//Terniary Operator

//condition ? true:false

const marks = 33
marks>=33?console.log("passed"):console.log("failed");

