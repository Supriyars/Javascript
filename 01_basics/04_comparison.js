 //console.log(2 > 1);
//console.log(2>=1);

console.log("2" >= 1);// it returns true because it will converts string into number implicitly.
console.log("02" >= 1) // it will returns also true.

console.log(null>0);//returns false.
console.log(null == 0);//returns false.
console.log(null>= 0);//returns true.
//note: The reason is that an equality check ==and > < >= <= these are works differently.
//comparisons converts null to number, treating it as 0.Thats y "null>=0" is true and "null>0" is false.
console.log(undefined>0);//return false
console.log(undefined== 0);//return false
console.log(undefined>= 0);//return false
 //***=== *****/
 console.log("2" === 2); //returns false because it strictly checks the equality amd datatypes of both number
