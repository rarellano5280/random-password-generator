// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//created generate password function
function generatePassword (){
    console.log("Button has been clicked.");

    var pswdLength = window.prompt("What would you like your password length to be? Your password must be at least 8 charaters long, but no more than 128 characters long.");
}