// const coding = ["js", "rb", "python", "java"]
// // coding.forEach((item) => {
// //     console.log(item);

// // })



// // const values = coding.forEach((item) => {
// //     console.log(item);
// // return item
// // })
// // console.log(values); //>>>>>undefined



// const myNums = [1,2,3,4,5,6,7,8]
// const newNums = myNums.filter(  (num)=> num>4)
// console.log(newNums);



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


//11.59


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Science Fiction', publish: 1995, edition: 2001 },
    { title: 'Book Three', genre: 'Fantasy', publish: 2002, edition: 2007 },
    { title: 'Book Four', genre: 'Horror', publish: 1988, edition: 1999 },
    { title: 'Book Five', genre: 'Biography', publish: 2010, edition: 2015 },
    { title: 'Book Six', genre: 'History', publish: 1975, edition: 1980 },
    { title: 'Book Seven', genre: 'Romance', publish: 1999, edition: 2003 },
    { title: 'Book Eight', genre: 'Horror', publish: 2005, edition: 2011 },
    { title: 'Book Nine', genre: 'Thriller', publish: 1990, edition: 1998 },
    { title: 'Book Ten', genre: 'Self-Help', publish: 2015, edition: 2020 }
];

// const userBooks = books.filter((bk) => bk.genre === 'Horror')
// console.log(userBooks);



// const userBooks = books.filter((bk) => bk.publish>2000)
// console.log(userBooks);
const userBooks = books.filter((bk) => { return bk.publish > 2000 })
console.log(userBooks);
