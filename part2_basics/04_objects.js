const tinderUser=new Object() //singleton
// const tinderuser={} 
// console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Omkar",
            lastName:"Shelke"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName.userFullName.lastName);

const obj1={1:"a", 2:"b"
}
const obj2={3:"c",.4:"d"}
const obj4={5:"a",6:"b"}
// const obj3=Object.assign({},obj1,obj2,obj4) //target and source

const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"o@gmail.com"
    },
    {
        id:2,
        email:"k@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); //object 
console.log(Object.entries(tinderUser)); //as arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
