console.log(2 > 3);
console.log("2" === 2)

//Some more on datatypes
//Primitive
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

//JS is dynamically typed language(the type is determined at runtime)

// Reference type(NON - Primitive)
// Array, Objects, Functions

let myObj = function(){
    console.log("Hey there!");
}

console.log(typeof myObj); //gives function
console.log(typeof null); //gives object

//****************************************** */
// Memories : Stack(primitive) & Heaps(non - primitive) 

let myYT = "ProYT"
let anotherName = myYT
anotherName = "KxoG"
console.log(myYT);   
console.log(anotherName);

let user = {
    email : "user@gmail.com"
    upi : "user@tpsbi"
}

let user2 = user
