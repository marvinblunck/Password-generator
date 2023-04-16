// Assignment code here
var characterLength = 8;
var arraySelect= []
// Need the following variables:
    // selected length of the password
    // array of lowercase letters
    // array of uppercase letters
    // array of numbers
    // array of special characters
    // to hold the password we're building
    // possibly the mega-array
    
      var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var numbers = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];
      var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
      
       

  // prompt for password length --> stored in a variable
  var passwordLength= getpasswordLength();
  // Validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then they're going to need to restart OR call the function that prompts for length again
  function getPasswordLength(){
    characterLength = parseInt(prompt("How many characters do you want your password to be? 8-128?"));

    if(isNan(characterLength) || characterLength < 8 ||characterLength > 128) {
      alert("Character length has to be between 8-128");
      return false;
    }
  }
  
  // prompt --> Do they want uppercase letters?
  if (confirm("Would you like uppercase letters in your password?")){
  arraySelect=arraySelect.concat(uppercase);
  }
  // prompt --> Do they want lowercase letters?
  if (confirm("Would you like lowercase letters in your password?")){
  arraySelect=arraySelect.concat(lowercase);
  }
  // prompt --> Do they want numbers?
  if (confirm("Would you like numbers letters in your password?")){
  arraySelect=arraySelect.concat(numbers);
  }
  // prompt --> Do they want special characters?
  if (confirm("Would you like special letters in your password?")){
  arraySelect=arraySelect.concat(special);
  }
  return true;

  // Validate that the user has chosen at least one character set --> if not, either have them start over OR recursively call the function that prompts for the character sets
  // With each of those prompts, you need an array of those character types
    // There needs to be at least one of each selected character type included in the password
    // Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)
    // for loop:
      // for (var i = password.length - 1; i < passwordLength; i++)
    // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
      // IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
      // IF pushing to a mega-array randomly generate a number to pull a character from the array
      // IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
  // return the generated password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);