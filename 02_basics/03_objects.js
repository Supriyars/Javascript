//singleton
//object literals
const mySys = Symbol("key1");

const userId = {
    [mySys] : "key1",
    fullName : "Supriya Sangolli",
    age : 22,
    email : "supriya@google.com",
    isLoggedin : false,

};//creating objects
// console.log(userId["fullName"]);//accessing objects
// console.log(userId[mySys]);
// console.log(userId);
userId.email = "supriya@chatgpt.com";
// Object.freeze(userId);
// console.log(userId);
userId.greeting = function(){
    console.log("Hello welcome to JS");
};
console.log(userId.greeting());
