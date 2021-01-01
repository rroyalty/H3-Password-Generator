
//Discovered Event bubbling!! Applies 'on click' to my check switches.
document.addEventListener('click', function (event) {
  if ( event.target.classList.contains( 'form-check-input' ) ) {
      validatePW();
  }
}, false);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Generation function.
function writePassword() {

  // Static Password Array: Upper - Lower - Num - Symb
  let pwArray = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

  // Password Checkbox Array
  let checkboxes = document.querySelectorAll('input[name=cbVal]');

  // If checkbox unchecked, sets corresponding array element to "".
  for(let i = 0; i < 4; i++) {
    if (checkboxes[i].checked === false) pwArray[i] = "";
  }

  // Variables for calculations. pwArray as String - Length of that String - User Selected Password Length
  let pwString = pwArray.join('');
  let pwRandNum  = pwString.length;
  let pwLength = document.querySelector("#pwLength").innerHTML;

  // For User Selected PW length, select random element from pwString.
  let password = "";
  for(let i = 0; i < pwLength ; i++){
    let randNum = Math.floor(Math.random() * pwRandNum);
    password = password + pwString[randNum];
  }  

  // Insert password onto HTML document.
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//End Password Generation Function

// Checks to verify that at least one selection is made for PW symbols. On fail, shows warnings on webpage and disables generate button. Was looking into using jQuery for this, but we haven't covered that yet and figured out a way to do it with regular JS.
function validatePW() {

  //Array of checked checkboxes.
  let checkboxes = document.querySelectorAll('input[name=cbVal]:checked');

  //If length of array = 0, Show validation warnings and disable button.
  if(checkboxes.length === 0) {
    let hidden = document.querySelectorAll(".hidden");
    hidden.forEach(elem => {
      elem.classList.remove("hidden");
      elem.classList.add("show");
    });
    document.getElementById("generateBtn").disabled = true;
  
  //If Length of array != 0, Hide validation warnings and enable button.
  } else {
    let show = document.querySelectorAll(".show");
    show.forEach(elem => {
      elem.classList.remove("show");
      elem.classList.add("hidden");
    });
    document.getElementById("generateBtn").disabled = false;
  }
}
//End validation.