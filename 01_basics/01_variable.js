const accountId = 101010
let accoutEmail = "suraj@gmail.com"
var accountPass = "12345"
accountCity = "Nagpur"
let accountState;


// accountId = 1;

accoutEmail = "sura@gmail.com"


console.log(accountId)
console.table([accountId,accountPass,accoutEmail,accountCity])
console.group(accountId,accountPass,accoutEmail, accountState)


/*
Prefer not to use var 
coz of issue in block scope and functional scope


we'll use let and const only in modular JS
*/