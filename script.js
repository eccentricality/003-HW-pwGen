const form = document.getElementById("passwordGenerator");
const upperCaseElement = document.getElementById("upperCaseInclusion");
const numbersElement = document.getElementById("numbersInclusion");
const symbolsElement = document.getElementById("symbolsInclusion");

const charIndex = {
    lowerChars: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperChars: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numberChars: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbolChars: ["!", "#", "$", "%", "&", "*", "+", "-", ":", ";", "<", "=", ">", 
    "?", "@", "^"]
}

for (var i = 0 <= charIndex.lowerChars){
    const lowerLettersCharIndex = charIndex.lowerChars;
}



const lowerLettersCharIndex = arrayLowToHigh()
const upperLettersCharIndex = arrayLowToHigh()
const numbersCharIndex = arrayLowToHigh()
const symbolsCharIndex = arrayLowToHigh()

console.log(lowerLettersCharIndex)

function arrayLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function generatePassword(characterCount, upperCase, numbers, symbols) {}

form.addEventListener("click", e => {
    e.preventDefault()
    const characterCount = passLengthCount.value
    const upperCase = upperCaseElement.checked
    const numbers = numbersElement.checked
    const symbols = symbolsElement.checked
    const password = generatePassword(characterCount, upperCase, numbers, symbols)
})