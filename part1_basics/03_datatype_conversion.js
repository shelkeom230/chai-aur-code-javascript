let score="Omkar"
console.log(typeof(score));
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //Not a Number

/*
"33" => 33
"33abc" => NaN
"true" => 1; "false" => 0
*/

let isLoggedIn=""

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false
""=> false; "omkar"=>true
*/

let someNumber=50
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)