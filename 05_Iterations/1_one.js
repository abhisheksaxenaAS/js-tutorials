// //for

// for (let i = 0; i < 10; i++) {
//     const element = i
//     if (element==5) {
//         //console.log("5 is number which falls on 5th number in 1 to 10");

//     }
//     //console.log(element);

// }


// for (let i = 0; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//     console.log(`Table for : ${i}`);

//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and inner loop value : ${i}`);
//         console.log(i + `*` + j + ` = ` + i * j);

//     }

// }



// let myArray = ["flash","superman","batman"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(`${element} is at index number ${i}`);

// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log(`${index} is best `);
//         break
//     }
// console.log(`Value of i is ${index}`);

// }



for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`${index} is best `);
     continue
    }
console.log(`Value of i is ${index}`);

}