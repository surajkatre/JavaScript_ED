// *******DATE*************//

let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate);


let myCreateDate = new Date(2023,0,23)
//months starts from 0 in JS   when there is only one digit  
// console.log(myCreateDate.toDateString());

let myCreateDate1  = new Date(2023,0,23,5,3)
// console.log(myCreateDate1.toLocaleString());
let myCreateDate2  = new Date("2023-01-14")
// console.log(myCreateDate2.toLocaleString());
// console.log(myCreateDate2.toString());
// // months start from 1 in two digit


//timestamp

let mytimestamp =  Date.now()
console.log(mytimestamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let ddate = new Date()
console.log(ddate.getMonth());
console.log(ddate.getDay());


//useful method
 let dom = ddate.toLocaleString('default', {
    weekday: "long"
})
console.log(dom);