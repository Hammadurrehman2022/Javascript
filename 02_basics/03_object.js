// singleton
Object.create()

// object literals

const sym = Symbol("key1")

const user = {
    name: "abc", 
    "full name": "abc xyz",
    age: 20,
    [sym]: "mykey1",
    email: "abc@gmail.com",
    location: "Paris",
    isLoggedin: false,
    lastloginDays: ["Tuesday", "Friday"],
}

// console.log(user.name);
// console.log(user["email"])
// console.log(user["full name"]);
// console.log(user[sym]);

user.name = "ere"

// Object.freeze(user)

user.name = "uoo"

// console.log(user);

user.greeting = function(){
    console.log("Welcome user")
}

user.greetingTwo = function(){
    console.log(`Hello user ${this.name} `);
}
user.greeting()
user.greetingTwo()


