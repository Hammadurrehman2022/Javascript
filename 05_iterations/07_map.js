// Map Method

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNum = num.map((item) => item + 10)
// console.log(newNum);

// chaining

const chain = num
            .map((num) => num + 2)
            .map((num) => num - 1)
            .filter((num) => num > 4)
console.log(chain);
