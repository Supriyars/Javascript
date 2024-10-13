const eng_Poets= ["Shakespiere","Williamson"];
const kan_Poets = ["Kuvempu","Bendre","Gokak"];
const poets = eng_Poets.concat(kan_Poets);//concat method
console.log(poets);
//flat method 
const array=[1,2,3,[4,5],6,[7,8,[2,35,5]]];
const real_array=array.flat(Infinity);
console.log(real_array);
console.log(Array.isArray("Supriya"));
console.log(Array.from("Supriya"));
console.log(Array.from({name:"Supriya"}));//it will return empty array ,important for interview
const score1 = 100;
const score2 = 200;
const score3 = 400;
console.log(Array.of(score1,score2,score3)) ;
