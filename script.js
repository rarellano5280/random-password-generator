// Assignment Code
var generateBtn = document.querySelector("#generate");

//created function to generate password 
function generatePassword (){
    console.log("Button has been clicked.");

//prompt the user to choose a number length 
var userEntry = window.prompt("What would you like your password length to be? Your password must be at least 8 charaters long, but no more than 128 characters long."); 

//Checking to see if entry is a number. 
var pswdLength = parseInt(userEntry);

if(isNaN(pswdLength)){
    window.alert("Your entry has to be a number.");
    return;
}
//checking to see if the length is within a specific criteria.
if (pswdLength < 8 || pswdLength > 128 ){
window.alert("Your password must be at least 8 charaters long, but no more than 128 characters long.");
return;
}

//Window confirms for criteria 
var pswdNumbers = window.confirm("Do you want to include numbers in your password?");
var pswdSpecialCharacters = window.confirm("Do you want to include special characters in your password?");
var pswdUppercase = window.confirm("Do you want to include uppercase letters in your password?");
var pswdLowercase = window.confirm("Do you want to include lowercaase letters in your password?");

console.log(pswdNumbers);
console.log(pswdSpecialCharacters);
console.log(pswdUppercase);
console.log(pswdLowercase);

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
