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
console.log(newArr.flat(1));




