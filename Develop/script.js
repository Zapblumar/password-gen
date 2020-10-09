// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("enter a digit between 8 to 128 number");
  if (passwordLength < 8 || passwordLength > 128){
  var passwordLength = (Math.floor(Math.random() *(8, 128)));
  parseInt(passwordLength);
  }
  console.log (passwordLength)
  // may need more work in the if statement.
var passwordUppercase = window.confirm("Any uppercase letters?");
let upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

if(passwordUppercase === true){
  var upperCase = (Math.floor(Math.random()*(26)));
  parseInt(upperCase);
  passwordUppercase =  upperCaseChar[upperCase];
}
console.log (passwordUppercase);
var passwordLowercase = window.confirm("Any lowercase numbers?");
let lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

if(passwordLowercase === true){
  var lowerCase = (Math.floor(Math.random()*(26)));
  parseInt(lowerCase);
  passwordLowercase = lowerCaseChar[lowerCase];
}
console.log(passwordLowercase);
var passwordNumber = window.confirm("Need any numbers?");
let numericChar = [ "1","2","3","4","5","6","7","8","9","0"];

if(passwordNumber === true){
  var number = (Math.floor(Math.random()*(10)));
  parseInt(number);
  passwordNumber = numericChar[number];
}
console.log(passwordNumber);
var passwordCharacter = window.confirm("Any special characters?");
let specialChar = [ "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];

if(passwordCharacter === true){
  var caseArray = (Math.floor(Math.random()*(31)));
  parseInt(caseArray);
  passwordCharacter = specialChar[caseArray];
}
console.log(passwordCharacter);
};

push(passwordLength) = passwordLowercase, passwordNumber, passwordUppercase, passwordCharacter;
/* var generatePassword
while (passwordLength > 0){
  shuffle.password.order
  reduse passwordLength (-1)
}; */

/* var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}*/


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
