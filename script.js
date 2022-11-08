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

function generatePassword(){
  alert("What is the criteria, answer with y or n");

  //get input
  let c1 =prompt("Do you want to include special characters?")
  let c2 =prompt("Do you want to include lowercase letters?")
  let c3 =prompt("Do you want to use uppercase letters?")
  let c4 =prompt("Do you want to use numeric letters")
  let len=prompt("What is the length of the password?")

}


