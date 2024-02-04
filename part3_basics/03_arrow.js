const user = {
  userName: "Omkar",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} ,welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()

// console.log(this); //empty object
// this -> current context

// function coffee(){
//     let userName="Hitesh"
//     console.log(this.userName); //cannot use this here
// }
// coffee()

// const chai = function () {
//     let username="Omkar"
//     console.log(this.username);
// };
// chai()

const chai = () => {
    let username="Omkar"
    console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2 explicit return
// }
// const addTwo=(num1,num2) => num1+num2

// const addTwo=(num1,num2)=>(num1+num2) //implicit return
const addTwo=(num1,num2)=>({username:"omkar"})


// console.log(addTwo(3,4))

const myArray=[4,5,6,7,8]

// myArray.forEach(() => {})
