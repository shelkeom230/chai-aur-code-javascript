const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

// for in loop 
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=["js","cpp","c","java","python","swift","ruby","mojo","php"]

for(const key in programming){
    console.log(programming[key]);
}

/*
const newMap=new Map()

newMap.set('IN',"India")
newMap.set('USA',"United States of America")
newMap.set('FR',"France") //map is not iterable

for(const key in newMap){
    console.log(key);
}
*/

