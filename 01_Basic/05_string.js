const name="Abhishek"
const repoCount= 5
console.log(name + repoCount+ "value");

console.log(`Hello my name is ${name} and my repository number is ${repoCount}`);

const gameName = new String('AbhishekAS')
console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.charAt(5));
console.log(gameName.indexOf("ish"));

const newString= gameName.substring(0,6)
const anotherString = gameName.slice(-10,4)
console.log(newString);     //cant use -value
console.log(anotherString);

const newString1 = "   aLotOfSpaces"
console.log(newString1);
console.log(newString1.trim()); //.trim() remove all the spaces

const url = "http://abhishek.com/abhishek20%era"
console.log(url.replace("20%", "-"))

console.log(url.includes("abhishek"))
console.log(url.includes("hcverma"));

const newStr = "AbhishekSaxena-Cse-FinalYear"
console.log(newStr.split("-",5));

