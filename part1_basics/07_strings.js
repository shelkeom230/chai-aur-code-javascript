// strings 

const name="Omkar"
const repoCount=50

console.log(name+repoCount+" Value"); //not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Omkar-fc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); //convert to upper case
console.log(gameName.charAt(2)); //get index of first occurence
console.log(gameName.indexOf('m')); //get index value of that char


const newString=gameName.substring(0,4) //end index exclusive
console.log(newString);

const anotherString=gameName.slice(-8,4) //negative indexing
console.log(anotherString);

const newStringOne="    Omkar    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove white spaces from both sides

const url="https://omkarshelke.in/omkar%20shelke"
const collegeUrl="https://sipnaengg.ac.in"

console.log(url.replace('%20','-'))
console.log(collegeUrl.replace('in','edu'));

console.log(url.includes('omkar'))
console.log(url.includes('kylefernandis'))


console.log(gameName.split('-'));