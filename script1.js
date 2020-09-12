// Assignment Code
console.log("JS page is connected");

var generateBtn = document.querySelector("#generate");

var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];


var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

var numbers = "0123456789".split("");
  
var specialCharacters = [
    '@',
    '%',
    '+',
    '/',
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];


// prompt("How many numbers in your password?") 
// confirm("Do you want special characters?")
  
function getPassOptions () {
    var length = parseInt(prompt("How many characters do you want in your password?"));   

    if (length<8) {
        alert("Sorry password must be at least 8 characters.");
        return;
    }

    if (length>128) {
        alert("Sorry password must be less than 128 characters.");
        return;
    }
        
    if (isNaN(length)===true) {
        alert("Must be a number.");
        return;
    }

    var hasLowerCase = confirm("Do you want lowercase character?");

    var hasUpperCase = confirm("Do you want uppercase characters?");
    
    var hasNumbers = confirm("Do you want numbers?");

    var hasSpecial = confirm("Do you want special characters?");

    if (
        hasLowerCase === false &&
        hasUpperCase === false &&
        hasNumbers === false &&
        hasSpecial === false

    ){
        alert("You must select at least one");
        return;
    }


    var passwordOptions = {
        keyLength: length,
        keyHasLower: hasLowerCase,
        keyHasUpper: hasUpperCase,


        keyHasNumber: hasNumbers,
        keyHasSpecial: hasSpecial
    };

    return passwordOptions;
        
}


function getRandom (array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
  
    return randomElement;
}

function generatePassword () {
    var options = getPassOptions();
    var result = [];
    var possibleChar = [];
    var guaranteedChar = [];

    
    if (options.keyHasLower){
        possibleChar = possibleChar.concat(lowerCasedCharacters)
        guaranteedChar.push(getRandom(lowerCasedCharacters))
    }
    
    //validate uppercase

    if (options.keyHasUpper){
        possibleChar = possibleChar.concat(upperCasedCharacters)
        guaranteedChar.push(getRandom(upperCasedCharacters))
    }
    
    // validate hasNumbers


    if (options.keyHasNumber){
        possibleChar = possibleChar.concat(numbers)
        guaranteedChar.push(getRandom(numbers))
    }


    // //validate hasspecial
    if (options.keyHasSpecial){
        possibleChar = possibleChar.concat(specialCharacters)
        guaranteedChar.push(getRandom(specialCharacters))
    }


    for (var i = 0; i < options.keyLength; i++){
        var randomChar = getRandom(possibleChar);
        result.push(randomChar);
    }


    for (var i = 0; i < guaranteedChar.length ;i++){
        result[i] = guaranteedChar[i];
    }

    //return the value of result
    return result.join('');

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);