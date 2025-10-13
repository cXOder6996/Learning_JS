//array

const myArr = [0, 1, 2, 3, 4]
const arr1 = ["KRISH", "HARSH", "KRISHNA", "GAURANG"]

const arr = new Array(1,3,5,7)//creates [arr]

// console.log(myArr[1]);

//Array methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(78)
// myArr.shift()
// console.log(myArr.indexOf(9));

// console.log(myArr);

// const a1 = myArr.join()
// console.log(a1);
// console.log(typeof a1);

//Splice/Slice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


