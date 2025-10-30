const arr = [1, 2, 3, 4 ,5]
for (const values of arr) {
    console.log(values); 
}

let userName = "Hammad "
for (const char of userName) {
    // console.log(char);
}


// Maps

const map = new Map()
map.set("IN", "India")
map.set("Pak", "Pakistan")
map.set("US", "United States")

for (const prop of map) {
    // console.log(prop);  
}
for (const [key, value] of map) {
    console.log(key);  
}

const obj = {
    clothType: "cotton",
    price: 2321
}

// for (const element of obj) {
//     console.log(element);  //obj is not iterable
// }


