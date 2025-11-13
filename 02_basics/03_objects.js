//object literals
const myS = Symbol("k1")

const jsUser = {
    name: "Krish",
    "f_name": "Krish Gupta",
    [myS]: "myK1",
    age: 21,
    location: "Kanpur",
    email: "hi@amazon.com",
    isLoggedIn: false,
    lastLogOn: ["M", "S"] 
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["f_name"]);
// console.log(jsUser[myS]);

jsUser.email = "krish@OpenAI.com"
// Object.freeze(jsUser)
jsUser.email = "krish@MS.com"//not updated since we had freezed the object which blocks any further updates
// console.log(jsUser);

// myArray =["h", "i", "m"]

jsUser.greeting = function(){
    console.log(`Hey There FELLAS!, ${this.f_name}`);   
}
jsUser.greeting();

