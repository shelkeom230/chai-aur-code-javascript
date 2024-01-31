/*
important datatypes : primitive and
non-primitive
*/

// Primitive - call by value

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail; //undefined value

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
const bigNumber = 33454345543443n;

//Reference types/Non-primitive types: Arrays, objects, functions

// Arrays
const heros = ["shaktiman", "spiderman", "naagraj", "doga"];

// object
let myobj = {
  name: "Omkar",
  Age: 22,
};

// function
const myFunction = function () {
  console.log("Hello World");
};


console.log(typeof outSideTemp);
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myFunction);
