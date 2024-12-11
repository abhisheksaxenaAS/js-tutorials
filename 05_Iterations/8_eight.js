const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currentVal) {
//     console.log(`acc:${acc} and current value:${currentVal}`);

//     return acc + currentVal
// }, 0)

const myTotal = myNums.reduce((acc, currentValue) => {
    console.log(`acc:${acc} and currentValue:${currentValue}`)
    return acc + currentValue
}, 3)
console.log(myTotal);


const shoppingCart = [
    {
        courseName: "Java",
        price: 2999
    },
    {
        courseName: "JavaScript",
        price: 21999
    },
    {
        courseName: "Python",
        price: 999
    },
    {
        courseName: "Mobile Development",
        price: 5999
    },
]
const PaybleAmmount = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(PaybleAmmount);
