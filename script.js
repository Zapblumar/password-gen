// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword = '';
// Write password to the #password input
function writePassword() {
  var passCode = [""];
  var passwordLength = window.prompt("enter a digit between 8 to 128 number. If outside parameters, or left blank will make random size!", "8");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = (Math.floor(Math.random() * (129 - 8))) + 8;
  }

  // may need more work in the if statement.
  var passwordUppercase = window.confirm("Press OK for uppercase letters?");
  let upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  if (passwordUppercase === true) {
    var upperCase = (Math.floor(Math.random() * (26)))
    passwordUppercase = upperCaseChar[upperCase];
    generatePassword = (generatePassword + passwordUppercase);
    passCode = passCode.concat(upperCaseChar);
    passwordLength = passwordLength - 1;
  }
  var passwordLowercase = window.confirm("Press OK for lowercase numbers?");
  let lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  if (passwordLowercase === true) {
    var lowerCase = (Math.floor(Math.random() * (26)));
    passwordLowercase = lowerCaseChar[lowerCase];
    generatePassword = (generatePassword + passwordLowercase);
    passCode = passCode.concat(lowerCaseChar);
    passwordLength = passwordLength - 1;
  }
  var passwordNumber = window.confirm("Press OK for numbers?");
  let numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  if (passwordNumber === true) {
    var number = (Math.floor(Math.random() * (10)));
    passwordNumber = numericChar[number];
    generatePassword = (generatePassword + passwordNumber);
    passCode = passCode.concat(numericChar);
    passwordLength = passwordLength - 1;
  }
  var passwordCharacter = window.confirm("Press OK for special characters?");
  let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];

  if (passwordCharacter === true) {
    var caseArray = (Math.floor(Math.random() * (30)));
    passwordCharacter = specialChar[caseArray];
    generatePassword = (generatePassword + passwordCharacter);
    passCode = passCode.concat(specialChar);
    passwordLength = passwordLength - 1;
  }
  var middleLength = passwordLength;

  for (var n = 0; n < middleLength; n = n + 1) {
    randomCharactor = (Math.floor(Math.random() * (passCode.length)));
    generatePassword = (generatePassword + passCode[randomCharactor]);
  }

  var password = generatePassword;
  var passwordText = document.querySelector("#password"); {

    passwordText.value = password;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
