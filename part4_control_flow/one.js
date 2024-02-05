// if statement 

const isUserLoggedIn=true
const temperature=41

if(temperature===40){
    // console.log("less than 50");
}else{
// console.log("temperature greater than 40");
}

// console.log("executed");
// <,>,>=,<=,!=,==,===,!==

const score=200

if (score>100) {
    const power="fly" //var has completely global scope
    // console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);


const balance=1000

// if(balance>500) console.log("test"),
// console.log("test 2"); //don't do this

/*
if (balance<500) {
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
*/

const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true 
if(UserLoggedIn && debitCard && 2==2){
    console.log("allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("welcome user.");
}
