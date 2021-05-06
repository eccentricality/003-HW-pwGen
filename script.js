//variables created to represent elements grabbed by Id in order to sync with html
const formElement = document.getElementById("passwordForm");
//targets upperCase element to check for option to include upperCase, same for numbers and symbols on lines 5 and 6
const upperElement = document.getElementById("upperCaseInclusion");
const numbersElement = document.getElementById("numbersInclusion");
const symbolsElement = document.getElementById("symbolsInclusion");

//final generatedPass linked by id, ultimate generated password is obtained by event listener that triggers the function from line 46
const generatedPass = document.getElementById("generatedPass");

//stores ASCII based letters, numbers, and symbols into their own var, the ranges represent low and high end of the entirety of each existing dictionary with numbered keys defined by its letter/number/symbol counterpart
const lowerCharsIndex = charCodeRange(97, 122)
const upperCharsIndex = charCodeRange(65, 90)
const numberCharsIndex = charCodeRange(48, 57)
const symbolCharsIndex = charCodeRange(33, 47)

//on click, prevents form from resetting to default and passes through to check for password length + any options selected
formElement.addEventListener("submit", e => {
    e.preventDefault()
    //sets variable to carry over password length chosen by calling for the value of 
    const passLength = passLengthCount.value
    //calls for each optional elements for their checked values to see their truthiness, in which case gets concatenated by the if statements within function on lines 50-52
    const includeUpper = upperElement.checked
    const includeNumber = numbersElement.checked
    const includeSymbol = symbolsElement.checked
    //password = concatenated final password taking into factor the variables provided to be used for the function as activated lines 46-65
    const password = passwordGenerate(passLength, includeUpper, includeNumber, includeSymbol)
    //calls for the generatedPass variable linked to generatedPass id in order to alter via innerText and plug in the final password
    generatedPass.innerText = password
})

//checks low end and high end array of specific letter, number, or symbol sets designated by existing dictionary as explained on line 11
function charCodeRange(low, high) {
    //empty array to store generated array
    const array = []
    //runs through "i" from given low value to up to and including high value in increments of 1
    for (let i = low; i <= high; i++){
        //pushes generated array to be stored on line 35
        array.push(i)
    }
    //returns the generated array as per line 35 based on the bracket of low to high sets of letters, numbers, and symbols
    return array;
}

//instead of generating multiple arrays to choose from and assigning individually randomized character, checks ASCII character code to generate a letter, number, or symbol based on arrays created to store all codes
function passwordGenerate(passLength, includeUpper, includeNumber, includeSymbol) {
    //charCodes to store base level lowercase characters as the starting point for password generation
    let charCodes = lowerCharsIndex 
    //runs conditionals and concatenates optional elements as defined on lines 12-15 calculated by function below line 60
    if (includeUpper) charCodes = charCodes.concat(upperCharsIndex)
    if (includeNumber) charCodes = charCodes.concat(numberCharsIndex)
    if (includeSymbol) charCodes = charCodes.concat(symbolCharsIndex)

    //empty array to store generated characters
    const generatedChars = []

    //loops through and adds 1 character at a time until passLength is reached
    for (let i = 0; i < passLength; i++) {
        //generates random number with Math.random between 0 and charCodes length and converts to int with Math.floor to determine which ASCII code the generated integer belongs to
        const charCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        //converts randomly generated ASCII charCode into its string counterpart before being pushed and stored into empty array
        generatedChars.push(String.fromCharCode(charCode))
    }
    //returns the array as stored on line 55 and joins it into string to be printed
    return generatedChars.join('')
}