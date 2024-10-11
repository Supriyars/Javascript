//array
let myArr = [1,2,3,4,5,6];
console.log(myArr[1]);
const heroes = new Array("Shaktiman","Superman");
 console.log(heroes[1]);
//Array methods
  myArr.push(7);
  console.log(myArr);
myArr.pop(7);
console.log(myArr);
myArr.shift(0,1);
console.log(myArr.includes(2));
console.log(myArr.indexOf(4));
console.log(myArr);
myArr.unshift(1);
const myArr2 = myArr.join();
console.log(myArr);
console.log(myArr2);
console.log(typeof myArr2);
const myn2 = myArr.slice(0,3);
console.log(myn2);
const myn3 = myArr.splice(0,3);
console.log(myn3);
console.log(myArr);
