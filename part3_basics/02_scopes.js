let c=300 //global scope
let a=300
if (true) { //block scope
  let a = 10;
  const b = 20;
  console.log("INNER: ",a);
}

// console.log("GLOBAL: ",a);
// console.log(b);
// console.log(c);


