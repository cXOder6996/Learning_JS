let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(typeof date);//object

// let myDate = new Date(2025, 0, 23, 7, 54)

let mD = new Date("01-14-2025")
// console.log(mD.toLocaleString());

let timeStamp = Date.now()
// console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate.getMonth());
console.log(NewDate.getDate());

// `${ }` is known as string interpolation

NewDate.toLocaleString('default', {
    weekday:"long",
    
})





