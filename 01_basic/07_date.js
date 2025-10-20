let todayDate = new Date()
// console.log(todayDate);
// console.log(todayDate.toString());
// console.log(todayDate.toDateString());
// console.log(todayDate.toLocaleString());

// let userDate = new Date(2023, 2 , 2) // arbitrary date
// let userDate = new Date(2023, 2 , 2, 5, 3)
// let userDate = new Date("2025-01-23")
let userDate = new Date("02-12-2023")
// console.log(userDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(userDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // convert ms to s

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));




