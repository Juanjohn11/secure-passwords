// Get references to the #generate element
function ran(low, high) {
     low = Math.ceil(low);
     high = Math.floor(high);
     
     return Math.floor(Math.random() * (high - low) + low);
}
function passwordSize(){
     var charaLength = window.prompt("Length of password must be between 8 to 128.");
      
     while (charaLength < 8 || charaLength > 128){
        charaLength = window.prompt("Please enter a number betwenn 8 to 128.")
             
     }
     
     return(charaLength)
}

function ranChara(lower, upper, number, symbol) {
     //create vars for each chara type
     var characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f","g", "h",
     "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y","z", "1", "2", "3", "4", "5", "6", "7", "8",
     "9", "0", "!", "#","$", "%", "&", "'", "(", ")",
     "*", "+", ",","-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "//"];

     if(lower == false){
          characters.splice(62 ,(characters.length-62));
          } 
     if (upper == false){
          characters.splice(52, 10)
          }
     if (number == false){
          characters.splice(26, 26)
          }
     if (symbol == false) {
          characters.splice(0, 26)
          }
     return(characters);        
    
}  
function generatePassword(){
     var pass = 0;
     var securePassword = '';
     var length = passwordSize();
     while(pass == 0){
          var lower = window.confirm("Would you like lowercase letters?");
         
          var upper = window.confirm("Would you like uppercase letter?");
   
          var number = window.confirm("Would you like numbers?");

          var symbol = window.confirm("Would you like symbols?");
          
          if (lower === false && upper === false && number === false && symbol === false){
               window.alert("Must choose at least one."); 
          
          }
          else{
               pass++;
          } 
     }
     var characters = ranChara(lower, upper, number, symbol);
     
     for (i = 0; i < length ; i++) {
          var securePassword = securePassword + characters[ran(0, characters.length)]; 
     } 

     return(securePassword);

}

   
//confirm the user for all characters
//if all are false alert must have one and return 
//else wind.alert must have one at least
//use if statments and confirm vars to create charas string 
//for loop to run below multipe times

// have math.random to get a random character from charas 
//return password
    
// if statments not 8 - 128 alert invaild length and return
//prompt the user for the length of password

         
     
var generateBtn = document.querySelector("#generate");    
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
