let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleTimeString());
let createDate = new Date(2024,4,24);
console.log(createDate.toISOString());
let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(createDate.getTime());
console.log(typeof myDate);