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

function divide(a,b){
  return a/b
}

// parametes: function definition
// args: function call

// console.log(`addition of 2 numbers is ${addTwoNumbers(10, 20)}`); //args
// console.log(`addition of 2 numbers is ${addTwoNumbers(10, 5)}`);

const result = addTwoNumbers(50, 50);
// console.log("Result: ", result);

// console.log(`multiplication: ${multiply(10, 3)}`);

function loginUserMessage(userName="Sam"){
  if(!userName){ // empty string/undefined = false 
    console.log("please enter username");
    return
  }
  return `${userName} just logged in`
}

// console.log(loginUserMessage("Omkar"))
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("Omkar"));

function calculateCartPrice(val1,val2,...num1){ //means rest operator --> bundle to data those three dots
  return num1
}

console.log(calculateCartPrice(200,400,500,2000));

const user={
  username:"omkar",
  prices:199
}

function handleObject(anyObject){
  console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
  username:"Omkar",
  price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(arr){
  return arr[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,3000,4000]));