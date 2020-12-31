//Checkbox Validation, found solution on StackOverflow. Uses JQuery
(function () {
  'use strict';
  window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      console.log(forms);
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('generate', function (event) {

              var failed = false;

              if ($("[name='select']:checked").length == 0) {
                  $("[name='select']").attr('required', true);
                  failed = true;
              }
              else {
                  $("[name='select']").attr('required', false);
              }

              if (form.checkValidity() === false) {
                  failed = true;
              }

              if (failed == true) {
                  event.preventDefault();
                  event.stopPropagation();
              }

              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();


// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var pwLength = document.querySelector("#pwLength");

// console.log(pwLength)

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
