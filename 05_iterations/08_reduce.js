// reduce method

const num = [1, 2, 3, 4, 5]

const total = num.reduce((acc, currVal) => acc + currVal, 0)

console.log(total);

let shoppingCart = [
    {
        item: "shoes",
        price: 2000
    },
    {
        item: "shirt",
        price: 500
    },
    {
        item: "pant",
        price: 780
    },
    {
        item: "watch",
        price: 1500
    },
    {
        item: "glasses",
        price: 389
    }
]

let toPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)
console.log(toPay);
