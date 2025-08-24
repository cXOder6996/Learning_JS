const accountId = 19284
let accountEmail = "him@gmail.com"
var accountPass = "58347"
accountCity = "Dhanbad"
let accountState;

// accountId = 1 //not allowed
accountEmail = "hdfc@gmail.com"
accountPass = "2343"
accountCity = "Kanpur"
console.log(accountId);

/*
Prefer not to use var 
because of issues in block &
functional scope
*/
console.table([accountEmail, accountId, accountPass, accountCity, accountState])