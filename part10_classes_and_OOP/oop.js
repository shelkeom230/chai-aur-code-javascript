const user = {
  username: "Omkar",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details from DB");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings=function(){
    console.log(`Welcome ${this.username}`);
  }

  return this;
}

const UserOne = new User("Omkar", 8, true);
const UserTwo = new User("Chai aur code", 11, false);
console.log(UserOne.constructor);
// console.log(UserTwo);

//new-
// step 1- creates empty object 
// step 2- calls constructor function 
//step 3 - injection of args
// step 4 - we get the args 
