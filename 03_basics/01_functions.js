function myName(){
 console.log("H");
 console.log("a");
 console.log("m");
 console.log("m");
 console.log("a");
 console.log("d");
}

myName()

// function addNumber(num1, num2){
//     console.log(num1 + num2)
// }

function addNumber(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addNumber(1, 2)
// console.log(result);

function UserLoginMessage(name = "newUser"){
    if(!name){
        console.log("Please enter your name");
        return   
    }
    return `${name} just logged in `;
}
UserLoginMessage("Hammad")
console.log(UserLoginMessage("Hammad"));

