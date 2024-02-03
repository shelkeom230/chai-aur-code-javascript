// javascript dates 

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

console.log(typeof myDate); //date is an object in js

let myCreatedDate=new Date(2023,0,23) //month starts from 0 to js 
let myCreatedDate2=new Date(2023,0,23,5,3) 
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toString());

let myCreatedDate3=new Date("2023-02-03") //yy-mm-dd
let myCreatedDate4=new Date("03-02-2024")
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

// timestamps 
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})

