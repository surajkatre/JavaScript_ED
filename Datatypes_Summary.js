// data category they way data is stored and the way it is access
// premitive and non premitive

/*seven category :
String , Number, Boolean, null, undefined, Symbol, BigInt



2. Reference/ non premitive type
Array, Objects,Functions


*/

// const score  = 21;
// const scoreVal  = 21.2;
// let email ; // undefined

// const isLogged = false
// const outSideTemo = null

// console.log(typeof score);

// const id = Symbol('123')

// const anId = Symbol('123')

// console.log(id ===  anId);




const heroes = ["Ram", "shyam", "honeyPaji"]

// console.log(heroes[1]);

   let mypersonal ={
    name:"Suraj",
    age : 22
}
// console.log(mypersonal);



// function 

const myfun = function() {
    // console.log("mera yeshu");
}

// console.log(myfun);
// console.log(typeof(myfun));




// ******* Stack and Heap Memory*
// stack (premitive ), Heap (Non-premitive)

let myName = "Surya Don"

let Noymyname = myName
Noymyname = "chaipani"
console.log(myName);
console.log(Noymyname);


let user= {
    email:" suraj@abc.com",
    upi: "user@asxix"
}

let user1 = user

user1.email = "Raju@abc.com"
console.log(user.email);
console.log(user1.email);



let sname ="suraj"

console.log(sname);


let secondname = sname;

secondname = "ramu"
console.log(secondname);

let dum= {
    dmail: "aaa@google.com",
    gID: 69
}


//when we change premitive reference then the actual value will be change and
// in premitive only the copies value will change
