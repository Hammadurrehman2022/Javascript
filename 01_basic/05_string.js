    //concatenation
const userName = "Hammad "
const score = 12
// console.log(userName + "score " + score);  // old way

// string interpolation
console.log(`Player ${userName.trim()} score ${score} `) // modern way

// another way of string decleration
const newUser = new String("abcd-efg");
console.log(newUser)
console.log(newUser[3])
console.log(newUser.__proto__)

console.log(newUser.length)
console.log(newUser.toUpperCase());
console.log(newUser.charAt(2));
console.log(newUser.indexOf("c"));

const subString = newUser.substring(0, 4)
console.log(subString);

const anotherString = newUser.slice(-6, 4)
console.log(anotherString);

const clientName = "  hello ";
console.log(clientName.trim());

const url = "https://hur.com/about%20project"
console.log(url.replace("%20", " "));

console.log(url.includes("about"));

console.log(url.split("/"));


