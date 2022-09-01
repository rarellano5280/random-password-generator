// Assignment Code
var generateBtn = document.querySelector("#generate");

//create funtion to generate random number
function randomNum(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand * max)
}

function getRandomItem(list) {
    return list[randomNum(list.length)]
}

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
window.alert("Your password must be at least 8 characters long, but no more than 128 characters long.");
return;
}

//Window confirms for criteria 
var pswdNumbers = window.confirm("Do you want to include numbers in your password?");
var pswdSpecialCharacters = window.confirm("Do you want to include special characters in your password?");
var pswdUppercase = window.confirm("Do you want to include uppercase letters in your password?");
var pswdLowercase = window.confirm("Do you want to include lowercase letters in your password?");

console.log(pswdNumbers);
console.log(pswdSpecialCharacters);
console.log(pswdUppercase);
console.log(pswdLowercase);

//array lists for criteria
var numList = ["0" ,"1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specalCharList = ["!", "@", "#", "$", "&", "*"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q","r","s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = []

var userChoices = []

//iteration for uppercass list. This will chnage the lowercase letters to uppercase
for(var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
}

//If statements to push user choices to the userchoice variable
if (pswdNumbers){
    userChoices.push(numList)
    }
    
    if (pswdSpecialCharacters){
        userChoices.push(specalCharList)
    }
    
    if (pswdLowercase){
        userChoices.push(lowercaseList)
    }
    
    if (pswdUppercase){
        userChoices.push(uppercaseList)
     }

     if (userChoices.length === 0){
        userChoices.push(numList)
     }

console.log(userChoices);

var generateRandomPswd = ""

for (var i = 0; i < pswdLength; i++) {
    var randomList = getRandomItem(userChoices)
    var randomChar = getRandomItem(randomList);
    generateRandomPswd += randomChar
    }
    console.log(generateRandomPswd)

    return generateRandomPswd
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
