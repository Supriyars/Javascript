//Primitive datatypes

// 7 types : String,Number,Boolean,Null,undefined,Symbol,BigInt
const score = 100//Number datatype
const name = "Arnav"//String datatype
const isLoggedIn = false//Boolean datattype
const temp = null//Null datatype
let email;//gives undefined as a return value
const id = Symbol("123");
const anotherid = Symbol("123");
console.log(id === anotherid);// gives false because both are not equal gives different ouput values.
const bigNumber = 34446758337538n;//bigint datattype


// Reference (Non primitive) = Arrays,objects,Functions
const heroes = [ "shaktiman", "bheem","Krishna"];//Arrays
let student = {
    fullName : "Krishna",
    Place: "Vrindavan",
    age : 1000,
    isLord: function(){
        console.log("Yes he is lord"); 
    },//function declaration
    ismyFavourite:true

}; //Object declaration
// **********************************************//
// stack(primitive),Heap(Non-primitive)
let myYoutubename = "Apna College";





