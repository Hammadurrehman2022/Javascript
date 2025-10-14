        /*Datatypes*/
    //Primitive 
/* 7 types string, number, boolean, bigint, undefined, null, symbol*/

const level = 2;
const distance = 1.4 ;

const isLoggedIn = true;
const direction = null;

const id = Symbol(2321);
const secondId = Symbol(2321);
// console.log(id == secondId, id,secondId);
let userEmail;
const views = 12423n;
// console.log(typeof views, views);

    // Reference (Non-Primitive)
/* object, Array, Function */

const stateInPak = ["Sindh", "Balochistan", "KPK", "Punjab"];
const testObj = {
    name: "abc",
    age: 124,
}
const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction)