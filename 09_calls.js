// call by value and call by reference 

// call by value 
function changeValue(x){
    x=5
}

let num=10
changeValue(num)
console.log(num); //output: 10 remains unchanged 

// call by reference 
function changeValue2(obj){
    obj.key="new value"
}

let myObj={key:'old value'}
changeValue2(myObj)
console.log(myObj); //output: {key:'new value'} changed

/*
JavaScript is always "pass by value", in the case of non-primitive data types, what's passed by value is a reference (memory address) to the actual object. This is why it's sometimes confusingly described as "call by sharing" or "pass by sharing"
*/