const marvelHeroes=["Thor","Ironman","Spiderman"]
const dcHeroes =  ["Superman","Flash","Batman"]
// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes= marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);


// const allNewHeroes = [...marvelHeroes,...dcHeroes]
// console.log(allNewHeroes);

// const anotherArray = [1,2,3,[4,5,6],[7,8,9,[4,5]]]
// const anotherRealArray= anotherArray.flat(Infinity)
// console.log(anotherRealArray);


console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({Name:"Abhishek"})); //Interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

