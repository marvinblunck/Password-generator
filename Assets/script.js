// Assignment code here
function generatePassword(){

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
      var arraySelect= [];
      var passwordLength= getPasswordLength();

  // prompt for password length --> stored in a variable
  // chat gpt helped write this code more efficiently 
 do{
  var lowCase= getSelect("lowercase");
  var upperCase= getSelect("uppercase");
  var numeric= getSelect("number");
  var specialChar= getSelect("special");
  
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
    if(arraySelect.length > 0){
      break;
    }else {
      alert("select at least one character type");
    }
 } while (true);

 var password = "";
 for (var i =0; i <passwordLength; i++){
   password += arraySelect[Math.random()*(arraySelect.length)]
 }
 return password;
}
  // Validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then they're going to need to restart OR call the function that prompts for length again
  
  function getPasswordLength(){
    var characterLength= 0;
    characterLength = parseInt(prompt("How many characters do you want your password to be? 8-128?"));

    if(isNan(characterLength) || characterLength < 8 ||characterLength > 128) {
      alert("Character length has to be between 8-128");
      return false;
    }
  }
  
  //
    
  //chat gpt helped me write this user select function that prompts the password.
  function getSelect(currentChoice) {
    var messagePrompt = 'Would you like ' + currentChoice + ' characters (yes/no)?';
  
    while (true) {
      var userSelect = prompt(messagePrompt);
  
      if (userSelect === null) {
        // Handle the case where the user cancels the prompt
        return false;
      }
  
      userSelect = userSelect.toLowerCase();
  
      if (userSelect === 'yes') {
        return true;
      } else if (userSelect === 'no') {
        return false;
      } else {
        // Prompt again if the user enters an invalid response
        alert('Invalid input. Please enter "yes" or "no".');
      }
    }
  }
    


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