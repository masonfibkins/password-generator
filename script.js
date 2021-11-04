// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays of character choices
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// function to get input from user
function userInput()  {
  var isValid = false;
  //loops when input is not valid to get accurate user input
  do{
  //THEN I choose a length of at least 8 characters and no more than 128 characters
  var length = prompt("Choose from 8 to 128");
  //WHEN asked for character types to include in the password
  var lowerInput = confirm("Include lowercase?"); //lowercase, uppercase, numeric, and/or special characters
  var upperInput = confirm("Include uppercase?");
  var numbersInput = confirm("Include numbers?");
  var char = confirm("Include special characters?");

  //store user input
  var input = {
    length: length,
    lowerInput: lowerInput,
    upperInput: upperInput,
    numbersInput: numbersInput,
    char, char
  }
  //check if length input is valid greater than or equal to 8 less than or equal to 128
  if((length < 8)||(length > 128))
    alert("Choose from 8 to 128");
    else if((!numbersInput)&&(!lowerInput)&&(!upperInput)&&(!char)) //ask for other inputs
    alert("At least one character type should be selected"); //at least one character type should be selected
    else
    isValid = true;
  }while(!isValid); //if the input is valid it is returned
  return input;
};

//function to take inputs and generate the password
//WHEN all prompts are answered THEN a password is generated that matches the selected criteria
function genPassword() {
  var options = userInput();
  var combinations = [];
  var password = "";

  if (options.numbersInput) { //if user chose numbers adds numbers
    for (var i of numbers)
      combinations.push(i);
  }
  if (options.lowerInput) { //if user chose lowercase adds lowercase
    for (var i of lowerCase)
      combinations.push(i);
  }
  if (options.upperInput) { //if user chose uppercase adds uppercase
    for (var i of upperCase)
      combinations.push(i);
  }
  if (options.char) { //if user chose special characters adds special characters
    for (var i of special)
      combinations.push(i);
  }

  console.log(combinations);


  for (var i = 0; i < options.length; i++) {
    password += combinations[Math.floor(Math.random() * combinations.length)];
    
  }
  console.log(finalPassword);

  return password;
};