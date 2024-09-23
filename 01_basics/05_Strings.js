let name ="Ruthik"
console.log(name);
let myName = "Yashas"
let age = 22;
console.log(`Hello This is ${myName} and ${age} year old`);//Best method to use in nowdays
const gameName= new String("tictactoe");
console.log(gameName[0]);//for accessing single characters
console.log(gameName.length);//for accessing the total length of the string.
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//for accessing characters at specific position 
console.log(gameName.indexOf("t"));//for accessing the index of a characters
let newString =  gameName.substring(0,3);//method for accessing the substrings.
 console.log(newString);
let sliceName = gameName.slice(3,6);
console.log(sliceName);
let herName = "   Barbie   ";
console.log(herName);
console.log(herName.trim());//This method is used to delete the extraspaces.
let myEmail = "XYZ@email.com";
console.log(myEmail.replace("e","g"));//this method is used to replace the characters in string.
console.log(gameName.split("-"));//This method is used to convert String into array elements.