// Assignment code here
function generatePassword() {
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var arraySelect = [];
  var passwordLength = getPasswordLength();

  if (passwordLength === null) {
    // Handle the case where the user cancels the password length prompt
    return '';
  }
//chat gpt helped create a break switch to run the code
  do {
    var lowCase = getSelect("lowercase");
    var upperCase = getSelect("uppercase");
    var numeric = getSelect("number");
    var specialChar = getSelect("special");

    if (lowCase) {
      arraySelect = arraySelect.concat(lowercase);
    }
    if (upperCase) {
      arraySelect = arraySelect.concat(uppercase);
    }
    if (numeric) {
      arraySelect = arraySelect.concat(numbers);
    }
    if (specialChar) {
      arraySelect = arraySelect.concat(special);
    }

    if (arraySelect.length > 0) {
      break;
    } else {
      alert("Select at least one character type");
    }
  } while (true);

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += arraySelect[Math.floor(Math.random() * arraySelect.length)];
  }
  return password;
}

function getPasswordLength() {
  var characterLength = parseInt(prompt("How many characters do you want your password to be? (8-128)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be between 8-128");
    return null;
  }

  return characterLength;
}
//chat gpt did most of this function
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