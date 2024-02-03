function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

function addTwoNumbers(a, b) {
  let result = a + b;
  return result;
}

function multiply(a, b) {
  return a * b;
}

// parametes: function definition
// args: function call

console.log(`addition of 2 numbers is ${addTwoNumbers(10, 20)}`); //args
console.log(`addition of 2 numbers is ${addTwoNumbers(10, 5)}`);

const result = addTwoNumbers(50, 50);
console.log("Result: ", result);

console.log(`multiplication: ${multiply(10, 3)}`);
