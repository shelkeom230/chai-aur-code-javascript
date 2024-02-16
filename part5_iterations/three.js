// for of loop 

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="Hello World";

for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// Maps 

const newMap=new Map()

newMap.set('IN',"India")
newMap.set('USA',"United States of America")
newMap.set('FR',"France")
newMap.set('USA',"United States of America") //only unique values, ordered

// console.log(newMap);

for(const [key,value] of newMap){
    // console.log(key,':', value);
}

const myObject={
    'Game 1':'NFS',
    'Game 2':'Spider man',
    'Game 3':'Football'
}

// for(const [key,value] of myObject){
//     console.log(key," :- ",value);
// } does not work for objects