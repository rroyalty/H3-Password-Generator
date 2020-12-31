


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
    let ele=document.querySelectorAll(".show");
    ele.forEach(elem => {
      elem.classList.remove("show");
      elem.classList.add("hidden");
    });
    document.getElementById("generateBtn").disabled = false;
  }

}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  pwLC.addEventListener("click", validatePW);
  pwUC.addEventListener("click", validatePW);
  pwNum.addEventListener("click", validatePW);
  pwSpec.addEventListener("click", validatePW);