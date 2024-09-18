const accountId = 14453;
let accountEmail = "hitesh@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
/*
prefer not to use var 
bacause of block scope  and functional scope issue
*/
accountEmail="Srs@gmail.com";
accountPassword = "21234";
accountCity = "Banglore";
console.table([accountId,accountEmail,accountPassword,accountCity]);
