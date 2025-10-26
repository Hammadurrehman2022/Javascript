const userName = "Hammad"

const user = {
    userName: "Ebad",
    welcomeMessage: function(){
        console.log(this.userName)
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.userName = "Wadood"
// user.welcomeMessage()

// console.log(this);

// this is used to reffer current context

// function checkThis(){
//     let userName = "Hammad"
//     console.log(this);   
// }

// const checkThis = function (){
//     let userName = "Hammad"
//     console.log(this.userName);   
// }

const checkThis = () => {
    let userName = "Hammad"
    console.log(this);   
}
// checkThis()

// explicit return
// const addtow = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// const addtwo = (num1, num2) => num1+num2
const addtwo = (num1, num2) => (num1+num2)
const obj = () => ({userName: "Hammad"})
console.log(obj());

