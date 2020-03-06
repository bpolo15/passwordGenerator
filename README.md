# passwordGenerator
A password generator 

link: https://bpolo15.github.io/passwordGenerator/

JavaScript: Password Generator
This program generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


Pseudocode:
1. Clicking the "generate password" button will alert the program to start prompting for password criteria. 
2. There will be an alert asking if I want the following:
  -Uppercase letters
  -lowercase letters
  -numbers
  -special characters
3. There will then be a prompt to input how many characters I would like
  -The password must be 8-128 characters or it will ask to re-enter a number
4. If the user says no (cancel) for all the criteria, it will start over requesting at least one of the options listed above to be chosen
5. The program will then add all the chosen criteria into a single string
6. The program will then begin a loop randomly choosing a character in the string until the loop ends (the loop will end once the number of characters requested has been reached)
The program will then display the password
