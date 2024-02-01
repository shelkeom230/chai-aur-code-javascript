// strings 

const name="Omkar"
const repoCount=50

console.log(name+repoCount+" Value"); //not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Omkar-fc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));


const newString=gameName.substring(0,4) //end index exclusive
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="    Omkar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://omkarshelke.in/omkar%20shelke"

console.log(url.replace('%20','-'))

console.log(url.includes('omkar'))
console.log(url.includes('jaybansal'))


console.log(gameName.split('-'));