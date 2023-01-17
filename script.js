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

//Empty variables to store values 
let passwordLength = 0
let lowerCaseConfirm = false
let upperCaseConfirm = false
let numericConfirm = false
let specialCharactersConfirm = false
let randomIntsArray = []
let confirmArray = []
let passwordArray = []


// Defining function to prompt user for password options.
function getPasswordOptions() {

  //below is a prompt for password length - selection stored in passwordLength variable.
  passwordLength = prompt("please enter desired length of password (10-64)")


  //if statement to ensure a number between 10 and 64 is given
  if (( passwordLength >= 10) && (passwordLength <= 64)){
  
    //alert to display to user their choosen password length and also to ask them to choose *atleast* on of the 4 following confirms.
    alert("thank you you have chosen a password length of " + passwordLength + " characters.\nNext you will be asked which characters you would like to include. There are 4 options. Please confirm to *atleast* one option.")
  
    //4 confirms for character selection. result of confirmation overwrites previous empty variables.
    lowerCaseConfirm = confirm("would you like lower case charaters included?")
    upperCaseConfirm = confirm("would you like upper case charaters included?")
    numericConfirm = confirm("would you like numerical charaters included?")
    specialCharactersConfirm = confirm("would you like special charaters included?")}

    //catch to ensure that a viable character length has been selected. if it hasnt a force refresh takes place so that the user can renter.
    else (alert("You have entered a value outside of the parameter 10-64. Page will now refresh") (location.reload()))

  return;
}

//function to trigger password prompts/confirms
getPasswordOptions()

//as the length is entered into a prompt it is a string. this converts it to a number.
parseInt(passwordLength)

//if statement to ensure atleast one of the four options has been choosen. If they are all set to false then an alert will show with a force refresh.
if ((lowerCaseConfirm === false) && (upperCaseConfirm === false) && (numericConfirm === false) && (specialCharactersConfirm === false)){
  (alert("You need to confirm atleast one option. Page will now refresh") (location.reload()))}
  
  //the else statement will run aslong as one confirm comes back as true. it displays and alert to show the user all of their choices.
  else (alert ("Thank you. Please see below for your selections.\n" + 
  "password length: " + passwordLength + " characters" + 
  "\nLowercase to be included?: " + lowerCaseConfirm +
  "\nUppercase to be included?: " + upperCaseConfirm +
  "\nNumbers to be included?: " + numericConfirm +
  "\nSpecial Characters to be included?: " + specialCharactersConfirm + 
  "\nPlease click generate buttom below to see your new password."))


//based on the users selection a new array is made from charater types selected by the user.
function createConfirmArray (charaConfirm, arr) {
  if (charaConfirm === true) {
    confirmArray = confirmArray.concat(arr)
  }
  return;
}

//triggering functions to create the confirm array.
createConfirmArray (lowerCaseConfirm, lowerCasedCharacters)
createConfirmArray (upperCaseConfirm, upperCasedCharacters)
createConfirmArray (numericConfirm, numericCharacters)
createConfirmArray (specialCharactersConfirm, specialCharacters)




// Function for getting a random element from an array
function getRandom () {

  //forloop which will produce a random interger from 0-confirmArray length.
  for (let i = 0; i < passwordLength; i++){
  randomInt = (Math.floor(Math.random()*confirmArray.length))
  
  //the random interger is then used as the index in the confirm array. The corresponding character is pushed to a the passwordArray.
  passwordArray.push(confirmArray[randomInt])

  }
  return;

}

//trigger of function to obtain random intergers and create the paasword array
getRandom ()


// Function to generate password with user input
function generatePassword() {
  
  //password is currently and array. "join" us used to remove the commas and make it one long string.
  password = passwordArray.join("")
  return password;
}

//dont touch below this line - starter code
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

//CHECKS
// console.log(passwordLength)
// console.log(lowerCaseConfirm)
// console.log(upperCaseConfirm)
// console.log(numericConfirm)
// console.log(specialCharactersConfirm)
// console.log(confirmArray)
// console.log(passwordArray)