let score = true

console.log(typeof score);
console.log(typeof (score));

let valInNum = Number(score)
console.log(typeof valInNum);
console.log(valInNum);

//"33" => 33
// "33abc"=> NaN
//true => 1 lly false => 0

let flag = 0
let boolF = Boolean(flag)
console.log(boolF);

// 1 or any number except 0 => T
// 0 gives F
// "" => F & "String" => T

let someNum = 69
let someStr = String(someNum)
console.log(typeof someStr);
