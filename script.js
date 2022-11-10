// Assignment Code
var generateBtn = 
document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click",
 writePassword);

function generatePassword(){
  alert("What is the criteria, answer with y or n");

  //get input
  let c1 =prompt("Do you want to include special characters?")
  let c2 =prompt("Do you want to include lowercase letters?")
  let c3 =prompt("Do you want to use uppercase letters?")
  let c4 =prompt("Do you want to use numeric letters")
  let len=prompt("What is the length of the password?")

  //validate input
if(c1=="n" && c2=="n" && c3=="n" && c4=="n"){
  alert("you should select at least one character type");
  return"";
} 

if(len<8  || len>128){
  alert("the length of the password must be between 8-128")
  return"";
}
 
//we have vaild input

const lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"]

const uppercase=["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const number=["0","1","2","3","4","5",
"6","7","8","9"]

const special=[" ",'"','!','#','$','%','&','"','(',')','*','+','-','.','/',
':',';','<' ,'/','=','>','?','@','^','_','`','{','|','}','~',"[","]"
]

// let el=lowercase[Math.floor[Math.random() * lowercase length)]

let output="";
let done=0;
while(done<len){
  let num=Math.random();

if (num<0.25){
  ///select special
   let el=special[Math.floor(Math.random()*
  special.length)]
  if(c1=="y"){
    output +=el;
    done++;
  }
 } else if (num<0.5){
  // select lowercase
  let el=lowercae[Math.floor(Math.random()*
  lowercase.length)]
  if(c2=="y"){
    output +=el;
    done++;
  }
}else if(num<0.75){
  //select uppercase
  let el=uppercase[Math.floor(Math.random()*
   uppercase.length)]
   if (c3=="y"){
    output +=el;
    done++;
   }
}else{
  //select a number
  let el=number[Math.floor(Math.random()*
    number.length)]
    if(c4=="y"){
      output +=el;
      done++;
    }
  
  }

}

  return output

}
