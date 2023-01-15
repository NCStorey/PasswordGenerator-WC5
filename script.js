// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
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

// Array of uppercase characters to be included in password
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

let passwordLength = 0
let lowerCaseConfirm = false
let upperCaseConfirm = false
let numericConfirm = false
let specialCharactersConfirm = false
let randomint = 0
let password = 0
let confirmArray = []

// Function to prompt user for password options
function getPasswordOptions() {

//below is a prompt for password length
passwordLength = prompt("please enter desired length of password (10-64)")


//if statement to ensure a number between 10 and 64 is given
if (( passwordLength >= 10) && (passwordLength <= 64)){
  alert("thank you you have chosen a password length of " + passwordLength + " characters.\nNext you will be asked which characters you would like to include. Please confirm to *atleast* one option.")
  
  lowerCaseConfirm = confirm("would you like lower case charaters included?")
  upperCaseConfirm = confirm("would you like upper case charaters included?")
  numericConfirm = confirm("would you like numerical charaters included?")
  specialCharactersConfirm = confirm("would you like special charaters included?")}

  else (alert("You have entered a value outside of the parameter 10-64. Page will now refresh") (location.reload()))

  return;
}

getPasswordOptions()

parseInt(passwordLength)

if ((lowerCaseConfirm === false) && (upperCaseConfirm === false) && (numericConfirm === false) && (specialCharactersConfirm === false)){
  (alert("You need to confirm atleast one option. Page will now refresh") (location.reload()))}
  else (alert ("Thank you. Please see below for your selections.\n" + 
  "password length: " + passwordLength + " characters" + 
  "\nLowercase to be included?: " + lowerCaseConfirm +
  "\nUppercase to be included?: " + upperCaseConfirm +
  "\nNumbers to be included?: " + numericConfirm +
  "\nSpecial Characters to be included?: " + specialCharactersConfirm + 
  "\nPlease click generate buttom below to see your new password."))



//CHECKS
console.log(passwordLength)
console.log(lowerCaseConfirm)
console.log(upperCaseConfirm)
console.log(numericConfirm)
console.log(specialCharactersConfirm)


function createConfirmArray (charaConfirm, arr) {
  if (charaConfirm === true) {
    confirmArray = confirmArray.concat(arr)
  }

}

createConfirmArray (lowerCaseConfirm, lowerCasedCharacters)
createConfirmArray (upperCaseConfirm, upperCasedCharacters)
createConfirmArray (numericConfirm, numericCharacters)
createConfirmArray (specialCharactersConfirm, specialCharacters)

//CHECK
// console.log(confirmArray)


// Function for getting a random element from an array

function getRandom (characonfirm, arr) {

  randomint = Math.floor(Math.random()*arr.length)
  console.log(randomint)

}


confirmArray.forEach(getRandom)


// Function to generate password with user input
function generatePassword() {




}

//dont touch below this line
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);