// const user = new Object()  // singleton 

const user = {}

user.id = "123abc"
user.email = "abc@gmail.com"
user.isLoggedIn = true

// console.log(user);

const userDetaile = {
    email: "xyz@google.com",
    userName: {
        userFullName: {
            firstName: "abcd",
            lastName: "cbd"
        }
    }
}
// console.log(userDetaile.userName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = { 5: "a", 6: "b"}

const objCom = { obj1, obj2}
const objNewCom = Object.assign({}, obj1, obj2, obj3)
// console.log(objNewCom);
// console.log(obj1);
// console.log(obj2);
const obj5 = {...obj1, ...obj3}
// console.log(obj5);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("id"));
console.log(user);


const fromDatabase = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    }
]
// console.log(fromDatabase[0].id);





