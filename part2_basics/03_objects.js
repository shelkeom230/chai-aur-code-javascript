// objects 

// object literals 
//singleton -> made with constructor

// Object.create() //constructor method
const mySym=Symbol("key1")

const JsUser={
    name:'Hitesh',
    "full name":"Omkar Shelke",
    [mySym]:"mykey1", //square bracket for symbol
    age:18,
    location:'Jaipur',
    email:'Hitesh@google.com',
    isLoggedIn:false,
    lastLoggedIn:['Monday','Saturday']
}

console.log(JsUser.name)
console.log(JsUser['email']);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser);


JsUser.email="cmomkarshelke@gmail.com"
// Object.freeze(JsUser)
JsUser.email="omkarmicrosoft@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js user");
}
JsUser.greeting2=function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());