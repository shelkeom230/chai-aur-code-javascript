// Immediately Invoked Function expressions 

(function chai(){
    //named IIFE
    console.log("DB CONNNECTED");
})();

(function getName()
{
    // named IIFE 
    console.log("Hi Omkar");
}) ();

(function multiply(a,b){
    console.log(`${a} * ${b} = ${a*b}`);
}) (10,11);

( (name)=>{
    //unnamed IIFE
    console.log(`DB connected 2 ${name}`);
}) ("Omkar")


let val1=10
let val2=20

function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result=addNum(val1,val2)
let result2=addNum(10,2)