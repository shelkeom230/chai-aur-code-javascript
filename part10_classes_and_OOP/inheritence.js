class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, passkey) {
    super(username);
    this.email = email;
    this.passkey = passkey;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const chai=new Teacher("chai","chai@teacher.com","123")
chai.addCourse()

const masalaChai=new User("masalaChai")
masalaChai.logMe()


console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(chai===masalaChai);
