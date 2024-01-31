// camecalCase is more convinient 

const accountId=505050 //cannot be changed

let accountEmail="shelkeom230@gmail.com"
var accountPassword="12345"
accountCity="Amravati"
let accountState

// accountId=2 not allowed

accountEmail="cmomkar@gmail.com"
accountPassword="omkar2005"
accountCity="benguluru"
console.log(accountId);

// print in tabular format 

/*
Prefer not to use var
bcz of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

