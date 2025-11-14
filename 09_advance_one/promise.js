const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed")
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2 is complete")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise 2 Consumed")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({userName: "abc", gmail: "abac@gmail.com"})
    }, 1000)
})

promiseThree.then(function(data) {
    console.log(data.userName)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({userName: "xyz", passwork: "13412"})
        }else {
            reject("ERROR: something went wrong")
        }
    }, 1000)
})

promiseFour.then(function(data){
    console.log(data)
    return data.userName
}).then(function(userName){
    console.log(userName)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The promise either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({userName: "client", passwork: "13412"})
        }else {
            reject("ERROR: client went wrong")
        }
    }, 1000)
})

async function consumedPromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response)
    }catch (error) {
        console.log(error)
    }
}

consumedPromiseFive()

// async function  getAllUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch((error) => console.log(error))