// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword = '';
// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("enter a digit between 8 to 128 number. If outside parameters, or left blank will make random size!","8");
  if (passwordLength < 8 || passwordLength > 128){
  var passwordLength =(Math.floor(Math.random() *(129 - 8))) + 8;
  parseInt(passwordLength);
  }
  console.log (passwordLength)
  // may need more work in the if statement.
var passwordUppercase = window.confirm("Press OK for uppercase letters?");
let upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

if(passwordUppercase === true){
  var upperCase = (Math.floor(Math.random()*(26)))
  parseInt(upperCase);
  passwordUppercase =  upperCaseChar[upperCase];
  generatePassword = (generatePassword + passwordUppercase);
}
else{
  passwordLength = passwordLength + 1;
}
console.log (passwordUppercase);
var passwordLowercase = window.confirm("Press OK for lowercase numbers?");
let lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

if(passwordLowercase === true){
  var lowerCase = (Math.floor(Math.random()*(26)));
  parseInt(lowerCase);
  passwordLowercase = lowerCaseChar[lowerCase];
  generatePassword = (generatePassword + passwordLowercase);
}
else{
  passwordLength = passwordLength + 1;
}
console.log(passwordLowercase);
var passwordNumber = window.confirm("Press OK for numbers?");
let numericChar = [ "1","2","3","4","5","6","7","8","9","0"];

if(passwordNumber === true){
  var number = (Math.floor(Math.random()*(10)));
  parseInt(number);
  passwordNumber = numericChar[number];
  generatePassword = (generatePassword + passwordNumber); 
}
else{
  passwordLength = passwordLength + 1;
}
console.log(passwordNumber);
var passwordCharacter = window.confirm("Press OK for special characters?");
let specialChar = [ "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];

if(passwordCharacter === true){
  var caseArray = (Math.floor(Math.random()*(31)));
  parseInt(caseArray);
  passwordCharacter = specialChar[caseArray];
  generatePassword = (generatePassword + passwordCharacter);
}
else{
  passwordLength = passwordLength + 1;
}
  var middleLength = passwordLength - 4;
    for (var n = 0; n < middleLength; n = n + 1) {
    var passCode = (Math.floor(Math.random()*(9)));
    parseInt(passCode)
    generatePassword = (generatePassword + numericChar[passCode]);
  
}
//console.log(passwordCharacter);
console.log(generatePassword);



 var password = generatePassword;
  var passwordText = document.querySelector("#password");{

  passwordText.value = password;
  
} 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
