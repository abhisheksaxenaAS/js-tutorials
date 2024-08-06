let score = "20abc" //"20", nulll, undefined
console.log(typeof (score))

let scoreinnumber = Number(score)
console.log(typeof (scoreinnumber))
console.log(scoreinnumber);


// "20"=>20(number)
// "20abc"=>NaN(number)   Not a number
// true=>1


let isLoggedIn = 1
let booleanvalue = Boolean(isLoggedIn)
console.log(booleanvalue);