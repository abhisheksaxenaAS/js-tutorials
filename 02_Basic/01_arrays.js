const numbers = [1,2,3,4]
const Heroes = ["hatim","Shaktiman"]

const arr1 = new Array(5,6,7,8)

//console.log(arr1[1]);

arr1.push(9)
//console.log(arr1);

arr1.pop()
//console.log(arr1);
arr1.unshift(10)
//console.log(arr1);
arr1.shift()
// console.log(arr1);


// console.log(arr1.includes(4));
// console.log(arr1.indexOf(7));
// console.log(arr1.indexOf(17));

const newArr = arr1.join()
// console.log(arr1);
// console.log(newArr);

// console.log(typeof(arr1));
// console.log(typeof(newArr));



//slice------------splice

console.log("A ", arr1);
const newArray1 =  arr1.slice(1,3)

console.log(newArray1);
console.log("B ",arr1);

const newArray2= arr1.splice(1,3)
console.log(newArray2);
console.log("C",arr1);


