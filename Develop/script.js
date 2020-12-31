// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = document.querySelector("#pwLength");

console.log(pwLength)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
