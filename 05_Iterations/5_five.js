const coding = ["js", "rb", "python", "java"]

// coding.forEach(function (items) {
// // console.log(items);

// })


// coding.forEach( (items)=>{
//     console.log(items)
// } )



// function printMe(item){
//     console.log(item);

// }

// coding.forEach(printMe)


coding.forEach((item, index, arr) => {
console.log(item,index,arr);

})


const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:".js",
        
    },
    {
        languageName:"Java",
        languageFileName:".java",

    },
    {
        languageName:"C++",
        languageFileName:".cpp",

    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})