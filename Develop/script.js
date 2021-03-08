
// PASSWORD-GENERATOR

// An array of upper case letters
var uppercaseLettArray = [
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
];

// An array of lowercase letters
var lowercaseLettArray = [
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
];

// An array of numbers 1 - 9
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// An array of special characters
var specialCharArray = [
	'!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@',
];

// Variables that will hold the values of the user input
var passUpper;
var passLower;
var numChar;
var passNum;
var passSpecChar;

var generateBtn = document.querySelector("#generate");

// function generatePassword() {

// };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
