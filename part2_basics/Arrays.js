// arrays 


const myArr=[0,1,2,3,4,5] //mixing allowed
const myHeros=["Shaktiman","Spiderman","Batman"]


const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);

// array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //add value to first place
myArr.shift()

console.log(myArr.includes(1));
console.log(myArr.indexOf(9)); //not present then return -1
// console.log(myArr.indexOf(3)); 

const newArr=myArr.join()
console.log(myArr);
console.log(newArr);
// console.log(typeof newArr);

// slice and splice 
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

