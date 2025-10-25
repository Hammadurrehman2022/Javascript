
let a = 300
// var c = 300
if (true) {
    let a = 20
    const b = 40
    // console.log("inner a", a)
}

// console.log(a);

function one(){
    const userName = "hammad"

    function two(){
        const skill = "programmer"
        // console.log(userName);
    }
    two()
    // console.log(skill);
}

// one()

if (true){
    const name = "hammad"
    if(name === "hammad"){
        const score = 10
        // console.log(name + score);
    }
    // console.log(score);
}

// ====== interesting concept ======

console.log(addOne(2));
function addOne(num){
    return num +1
}

console.log(addtwo(2));
var addtwo = function(num){
    return num +2
}



