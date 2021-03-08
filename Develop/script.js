
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

var passUserChoice;

var generateBtn = document.querySelector("#generate");

//click event that generates a password
generateBtn.addEventListener('click', function() {
  var pswd = generatePassword();
  document.getElementById('password').placeholder = pswd;
});

// function that generates a new password with certain criteria
function generatePassword() {
  // Ask the user for numerical input on the length of the password. Parse to make type an interger.
  numChar = parseInt(window.prompt("How many Characters Long Would You Like your Password to Be?\nChoose Between 8 and 128 Characters."));
  
  //if statment that checks for user validation if not a number, not between 8 and 128, or null
  if (!numChar) {
    window.alert("ERROR: You Cannot Leave This Field Blank.\nPlease Enter a Number Between 8 and 128 Characters.");
  }
  else if (numChar < 8 || numChar > 128) {
    numChar = parseInt(window.prompt("ERROR: You Must Enter a Value Between 8 and 128.\nPlease Try Again."));
  }
  //else ask user for password criteria.
  else {
    passNum = window.confirm("Does This Password Contain Numbers?");
    passSpecChar = window.confirm("Does This Password Contain Special Characters?");
    passUpper = window.confirm("Does This Password Contain Upper Case Characters");
    passLower = window.confirm("Does This Password Contain Lower Case Characters");
  };

  // Now organize the true and false values of the user input for the password criteria with an if statement
  // Make flag values for events to triggar if ALL values are false.
  if (!passNum && passSpecChar && passUpper && passLower) {
    passUserChoice = window.alert("ERROR: You Must Select at Least 1 of the Promted Critira for Your Password.\nPlease Try Again!");
  }
  //if ALL values are true
  else if (passNum && passSpecChar && passUpper && passLower) {
    passUserChoice = specialCharArray.concat(numbersArray, uppercaseLettArray, lowercaseLettArray);
  }
  else if (passNum && passSpecChar && passUpper) {
    passUserChoice = specialCharArray.concat(numbersArray, uppercaseLettArray);
  }
  else if (passNum && passSpecChar && passLower) {
    passUserChoice = specialCharArray.concat(numbersArray, lowercaseLettArray);
  }
  else if (passSpecChar && passSpecChar && passLower) {
    passUserChoice = specialCharArray.concat(uppercaseLettArray, lowercaseLettArray);
  }
  else if (passNum && passUpper && passLower) {
    passUserChoice = numbersArray.concat(uppercaseLettArray, lowercaseLettArray);
  }
  else if (passSpecChar && passNum) {
    passUserChoice = specialCharArray.concat(numbersArray);
  }
  else if  (passSpecChar && passLower) {
    passUserChoice = specialCharArray.concat(lowercaseLettArray);
  }
  else if (passSpecChar && passUpper) {
    passUserChoice = specialCharArray.concat(uppercaseLettArray);
  }
  else if (passLower && passNum) {
    passUserChoice = lowercaseLettArray.concat(numbersArray);
  }
  else if (passLower && passUpper) {
    passUserChoice = lowercaseLettArray.concat(uppercaseLettArray);
  }
  else if (passNum && passUpper) {
    passUserChoice = numbersArray.concat(uppercaseLettArray);
  }
  else if (passSpecChar) {
    passUserChoice = specialCharArray;
  }
  else if (passNum) {
    passUserChoice = numbersArray;
  }
  else if (passLower) {
    passUserChoice = lowercaseLettArray;
  }
  else if (passUpper) {
    passUserChoice = uppercaseLettArray;
  };

  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
