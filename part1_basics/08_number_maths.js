// number and maths

const score = 400;
console.log(score);

const balance = new Number(100.5);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;

console.log(hundreds.toLocaleString("en-IN"));

// *************Maths********************

console.log(Math);
console.log(Math.abs(-4)); //-ve to +ve

console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //top value
console.log(Math.floor(4.3)); //lower int value
console.log(Math.min(3, 4, 5, 6));
console.log(Math.max(3, 4, 5, 6));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random()*20)+1);
console.log(Math.floor(Math.random()*(20-10+1)+10)); //random number in between range

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+min);
