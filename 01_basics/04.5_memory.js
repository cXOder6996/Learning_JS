// Memories : Stack(primitive) & Heaps(non - primitive) 

let myYT = "ProYT"
let anotherName = myYT
anotherName = "KxoG"
console.log(myYT);   
console.log(anotherName);

let user1 = {
    email : "user@gmail.com",
    upi : "user@ptsbi"
}

let user2 = user1    

user2.email = "proxo@google.com"
console.log(user1.email)
console.log(user2.email)