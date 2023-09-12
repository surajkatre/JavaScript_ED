const name = "suraj"
const myrep0count = 50;
console.log(name +" "+ myrep0count+ " Oh yeah");



console.log(`Hello ${name} and my gitrepo count is ${myrep0count}`);
// console.log(`Hello ${name.toUpperCase} and my gitrepo count is ${myrep0count}`);
//string interpolation


const GameName = new String('suraj')


const Myschool = new String('GNHS')


console.log(GameName[0]);
console.log(GameName.__proto__);

console.log(GameName.charAt(3));
console.log(GameName.indexOf("s"));
console.log(GameName.length);
const newstring =GameName.substring(0,3+1);
console.log(`the new string is ${newstring}`);
// console.log(GameName.substring(0,3));

// const anotherstring = GameName.slice(0,3)
const anotherstring = GameName.slice(-4,3)
console.log(anotherstring);

const fortrim = "     OH YEAH      "
console.log(fortrim.trim()); // works with only /n(blank space ) only

 const rep =GameName.replace("s","a")
 console.log(rep);
 console.log(rep.includes("auraj"));


 const arr = "Suraj-Katre-CEO"
 console.log(arr.split('r'));
 console.log(arr.split('-'));