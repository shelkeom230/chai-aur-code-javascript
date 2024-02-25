// let myName="Omkar     "
// let myChannel="chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// myHeros.hitesh();
// myHeros.heyHitesh();

// heroPower.heyHitesh()

// Inheritence

const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssigment: "js assignment",
  fullTime: true,
  __proto__:TeachingSupport
};

Teacher.__proto__=User

// Modern Syntax 
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName="ChaiAurCode        "

String.prototype.trueLength=function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"Omkar".trueLength()
"iceTea".trueLength()
