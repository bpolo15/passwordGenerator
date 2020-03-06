// Assignment Code
var generateBtn = document.querySelector("#generate");
var passUpperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var passLowerCase ='abcdefghijklmnopqrstuvwxyz';
var passNumbers ='1234567890';
var passSpecialCharacters='!@#$%^&*()_+=/?';


function generatePassword(){
 var passwordComplete=[];
 var active='';
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
    if(upperCase===true)
    {
      active+=passUpperCase;
    }
    if(lowerCase===true)
    {
        active+=passLowerCase;
    }
    if(specialCharacters===true)
    {
        active+=passSpecialCharacters;
    }
    if(numbers===true)
    {
        active+=passNumbers;
    }
    if(upperCase===false&&lowerCase===false&&numbers===false&&specialCharacters===false)
    {
        alert("Must include one of the following: Uppercase Letter, Lowercase Letter, Number, or Special Character. Please try again.")
    }
      console.log(active)

      for(i=0; i<lengthOfPassword; i++)
      {
        var selector=active[Math.floor(Math.random()*active.length)];
        console.log(selector)
        passwordComplete.push(selector)
        console.log(passwordComplete)
      }
      password=(passwordComplete.join(''))
     console.log(password)
     return password;
    }
    




    // Write password to the #password input
function writePassword() {
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);