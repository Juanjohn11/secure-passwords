// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function passwordSize(){
     var charaLength = window.prompt("Length of password must be between 8 to 128.");{
         while (charaLength < 8 || charaLength > 128){
        charaLength = window.prompt("Please enter a number betwenn 8 to 128.")
             
        }
     }
     
};

function generatePassword() {
     //create vars for each chara type

     var upperCase = ["A", "B", "C", "D", "E", "F", "G",

     "H", "I", "J","K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
     ]; 
     var lowerCase = ["a", "b", "c", "d", "e", "f","g", "h",
     "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y","z",
     ]; 

     var numbers = ["1", "2", "3", "4", "5", "6", "7", "8",
     "9", "0",
     ];

     var symbols = ["!", "#","$", "%", "&", "'", "(", ")",
     "*", "+", ",","-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"
     ];
    // if statments not 8 - 128 alert invaild length and return
    //prompt the user for the length of password
    
   
    //confirm the user for all characters
    var lower = window.confirm("Would you like lowercase letters?");
     
     
    var upper = window.confirm("Would you like uppercase letter?");


    var number = window.confirm("Would you like numbers?");


    var symbol = window.confirm("Would you like symbols?");
         
     
     if (lower === false && upper === false && number === false && symbol === false){
          window.alert("Must choose at least one.") 
          
     } 
    
     

        
    
 
    //if all are false alert must have one and return 
    //else wind.alert must have one at least
    //use if statments and confirm vars to create charas string 
    //for loop to run below multipe times
    //for (var i = 0 < charaLength; i++){} 
    // have math.random to get a random character from charas 
    //return password
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
