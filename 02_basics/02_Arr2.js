const marvel_heroes = ["thor", "Iron Man"]
const DC_heroes = ["Flash", "Superman"]
marvel_heroes. push(DC_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[2][1]); 

// const allHeroes = marvel_heroes.concat(DC_heroes)
// console.log(allHeroes);
const all_new = [...DC_heroes, ...marvel_heroes]
// console.log(all_new);
const another_arr = [1, 2, 43, [5, 7, 9], 7, [6, 7, [4, 5]]]

const real_arr = another_arr.flat(Infinity)
// console.log(real_arr);

console.log((Array.from("Hitesh")));
console.log(Array.from({name: "Hitesh"}));

let s1 = 
