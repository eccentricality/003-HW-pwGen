//grabs form by id to sync with event listener below
const form = document.getElementById("passwordForm");
//targets upperCase element to check for option to include upperCase, same for numbers and symbols
const upperElement = document.getElementById("upperCaseInclusion");
const numbersElement = document.getElementById("numbersInclusion");
const symbolsElement = document.getElementById("symbolsInclusion");

//final generatedPass linked by id
const generatedPass = document.getElementById("generatedPass");

//stores ASCII based letters, numbers, and symbols into their own var
const lowerCharsIndex = charCodeRange(97, 122)
const upperCharsIndex = charCodeRange(65, 90)
const numberCharsIndex = charCodeRange(48, 57)
const symbolCharsIndex = charCodeRange(33, 47)

//on click, prevents form from resetting to default and passes through to check for password length + any options selected
form.addEventListener("submit", e => {
    e.preventDefault()
    //sets variable to carry over password length chosen
    const passLength = passLengthCount.value
    //unlike passLength, the option variables checks for truthiness of whether options are selected
    const includeUpper = upperElement.checked
    const includeNumber = numbersElement.checked
    const includeSymbol = symbolsElement.checked
    //puts all of it together and stores it in variable
    const password = passwordGenerate(passLength, includeUpper, includeNumber, includeSymbol)
    generatedPass.innerText = password
})

//checks low end and high end bracket of specific letter, number, or symbol sets
function charCodeRange(low, high) {
    //stores generated array
    const array = []
    //runs through "i" from given low value to up to and including high value in increments of 1
    for (let i = low; i <= high; i++){
        //pushes generated array to be stored above
        array.push(i)
    }
    //returns the generated array as above based on the bracket of low to high sets of letters, numbers, and symbols
    return array;
}

//instead of generating multiple arrays to choose from and assigning individually randomized character, checks ASCII character code to generate a letter, number, or symbol based on arrays created to store all codes
function passwordGenerate(passLength, includeUpper, includeNumber, includeSymbol) {
    //starts with base lower case
    let charCodes = lowerCharsIndex 
    //concatenates selected options by checking ifs
    if (includeUpper) charCodes = charCodes.concat(upperCharsIndex)
    if (includeNumber) charCodes = charCodes.concat(numberCharsIndex)
    if (includeSymbol) charCodes = charCodes.concat(symbolCharsIndex)

    //empty array to store generated characters
    const generatedChars = []

    //loops through and adds 1 character at a time until passLength is reached
    for (let i = 0; i < passLength; i++) {
        //generates random number with Math.random between 0 and charCodes length and converts to int with Math.floor to determine corresponding ASCII code
        const charCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        //converts randomly generated ASCII charCode into its string counterpart before being pushed and stored into empty array
        generatedChars.push(String.fromCharCode(charCode))
    }
    //returns and joins strings
    return generatedChars.join('')
}