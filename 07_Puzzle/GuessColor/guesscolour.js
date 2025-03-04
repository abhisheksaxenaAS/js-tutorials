const randomnumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#inputtext')
const previousGuesses = document.querySelector('.previosguess')
const remainingGuesses = document.querySelector('.remainedguess')
const lowOrHi = document.querySelector('.loOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevArray = []
let numGuess = 1