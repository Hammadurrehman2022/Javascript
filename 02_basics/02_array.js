const allLocation =["newYork", "Karachi", "Paris"];
const PakLocation = ["lahore", "Multan", "Islamabad"];

// allLocation.push(PakLocation) 
const newLocation = allLocation.concat(PakLocation)
// console.log(allLocation)
// console.log(newLocation);

// spread operator [...]
const AvailableLocation = [...allLocation, ...PakLocation]
// console.log(AvailableLocation);

const newArr = [1, 2, 3, [4, 5, 6], [7, [8, 9]]]
const flatArr = newArr.flat(Infinity);
// console.log(flatArr);

console.log(Array.isArray("abcd"));
console.log(Array.from("abcd"));
console.log(Array.from({name: "xyz"})); // return empty array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));










