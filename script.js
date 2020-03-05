// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLetters=["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
"S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerCaseLetters=["a","b", "e", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z"]

var passwordNumbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var passwordSpecialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", ",", "[", "]"]

var passwordArrayAll=["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
"S", "T", "U", "V", "W", "X", "Y", "Z","a","b", "e", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z",1, 2, 3, 4, 5, 6, 7, 8, 9, 0,"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ".", ",", "[", "]"]



function generatePassword(){
  
  
  var upperCase =confirm("Do you want uppercase letters?")
  var lowerCase=confirm("Do you want lowercase letters?")
  var numbers=confirm("Do you want numbers?")
  var specialCharacters=confirm("Do you want special characters? (Ex. # $ !)")
  var lengthOfPassword=prompt("How many characters do you want? (Must be between 8 and 128)")
   while(lengthOfPassword<8||lengthOfPassword>128)
   {
     alert("Number must be between 8 and 128")
     lengthOfPassword=prompt("How many characters do you want? (Must be between 8 and 128)")
   }
   
console.log("Step1")
    if(upperCase===true&&lowerCase==true&&numbers==true&&specialCharacters==true)
    {
      passwordComplete=[];
      for(i=0; i<lengthOfPassword; i++)
      {
        var selector=passwordArrayAll[Math.floor(Math.random()*passwordArrayAll.length)];
        console.log(selector)
        passwordComplete.push(selector)
        console.log(passwordComplete)
      }
      password=(passwordComplete.join(''))
     console.log(password)
     return password;
    }

















}

// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


