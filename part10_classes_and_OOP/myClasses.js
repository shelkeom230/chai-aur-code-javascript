//ES6 after

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encrypPassword(){
    return `${this.password}abc`
  }

  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}

const chai=new User("omkar","omkar@om.com","123omkar")

console.log(chai.encrypPassword());
console.log(chai.changeUsername());

//behind the scene 

function user(username,email,password){
    this.username=username
    this.email=email 
    this.password=password
}

user.prototype.encrypPassword=function(){
    return `${this.password}abc`
}
user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new user("tea","tea@gmail.com","123")

console.log(tea.encrypPassword());
console.log(tea.changeUsername());