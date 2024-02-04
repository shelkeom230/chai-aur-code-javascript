let c=300 //global scope
let a=300
if (true) { //block scope
  let a = 10;
  const b = 20;
  console.log("INNER: ",a);
}

// console.log("GLOBAL: ",a);
// console.log(b);
// console.log(c);


function one(){
    const userName="Omkar"

    function two(){
        const website="youtube"
        // console.log(userName);
    }
    // console.log(website); //error due to block scope

    // two()
}

// one()

if(true){
    const userName="Omkar"

    if(userName==="Omkar"){
        const website=" youtube"
        // console.log(userName+website);
    }

    // console.log(website);
}

// console.log(userName);

/***************************interesting***************** */

console.log(addOne(5))
function addOne(num){
    return num+1
}


console.log(addTwo(5))
const addTwo=function(num){ //called as expression also
    return num+2
}


