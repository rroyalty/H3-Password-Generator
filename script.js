
//Discovered Event bubbling!! Applies on click to my check switches.
document.addEventListener('click', function (event) {
  if ( event.target.classList.contains( 'form-check-input' ) ) {
      validatePW();
  }
}, false);

// Assignment Code
// var generateBtn = document.querySelector("#generate");
var pwLength = document.querySelector("#pwLength");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = pwLength.innerHTML;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Checks to verify that at least one selection is made for symbols. On fail, shows warnings on webpage and disables generate button.
function validatePW() {
  let checkboxes = document.querySelectorAll('input[name=cbVal]:checked');
  if(checkboxes.length === 0) {
    let ele = document.querySelectorAll(".hidden");
    ele.forEach(elem => {
      elem.classList.remove("hidden");
      elem.classList.add("show");
    });
    document.getElementById("generateBtn").disabled = true;

  } else {
    let ele = document.querySelectorAll(".show");
    ele.forEach(elem => {
      elem.classList.remove("show");
      elem.classList.add("hidden");
    });
    document.getElementById("generateBtn").disabled = false;
  }
}
//End validation.

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);