console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

// bit tricky 
console.log("2" > 1);
console.log("02" > 1); //automatically converted to number

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
//null treated as 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// avoid above conversions , write clean code 

// strict check => ===
console.log("2"===2);