
//Discovered Event bubbling!! Applies on click to my check switches.
document.addEventListener('click', function (event) {
  if ( event.target.classList.contains( 'form-check-input' ) ) {
      validatePW();
  }
}, false);

// Write password to the #password input
function writePassword() {
  let pwArray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]
  let checkboxes = document.querySelectorAll('input[name=cbVal]');
  for(let i = 0; i < 4; i++) {
    if (checkboxes[i].checked === false) pwArray[i] = "";
  }
  let pwString = pwArray.join('');
  let pwLength = document.querySelector("#pwLength").innerHTML;
  let pwRandNum  = pwString.length;

  let password = "";
  for(let i = 0; i < pwLength ; i++){
    let randNum = Math.floor(Math.random() * pwRandNum);
    password = password + pwString[randNum];
  }  

  let passwordText = document.querySelector("#password");

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