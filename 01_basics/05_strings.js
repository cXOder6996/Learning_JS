const name = "krish"
const repoS = 69
// console.log(name + repoS + "Val");

console.log(`Hello my name is ${name} & my repo count is ${repoS}`)

const gameName = new String('Krish-G')

console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('G'));
const newS = gameName.substring(0, 4);
console.log(newS);

const an = gameName.slice(-5 , 4);
console.log(an);

const newS1 = "      Kris  G "
console.log(newS1);
console.log(newS1.trim());

const url = "https://krish.com/krish%20gupta"
console.log(url.replace('%20', '_'));

console.log(url.includes('krish'));

console.log(gameName.split('-'));





