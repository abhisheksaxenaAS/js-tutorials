// let a = 10
// const b = 20
// var c = 30


// var c = 300
let a = 200
if (true) {
    let a = 10
    const b = 20
    var c = 30
    //console.log(a);

}
//console.log(a)
//console.log(b)
//console.log(c)

//>> outside of { } -> global scope
//>> inside of { } -> block scope
//in terms of object { } is simply object declaration and for like for or if { } is scope


function one() {
    const username1 = "Abhishek"
    console.log(username1);


    function two() {
        const username2 = "Saxena"
        console.log(username1);

        console.log(username2)
    }

    // console.log(username1)
    // console.log(username2)
    //two()
}
//one()

// Closure -> when we have nested function then the child function can access the variable of parent function can


if (true) {
    const username = "Abhishek"

    if (username === "Abhishek") {
        const website = "@youtube"
        // console.log(username + website);
        //console.log(website)
    }
    // console.log(website)
    // console.log(username);
}
//console.log(username);

function addOne(num){
    return num+1
}
console.log(addOne(14))


addTwo(5);
const addTwo = function(num){           // this is called expression
    return num+2
}
// addTwo(5);

