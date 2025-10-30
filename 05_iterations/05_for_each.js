const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (element){
//     console.log(element);  
// })

// coding.forEach((element) => {
//     console.log(element);  
// })

// function printMe(element) {
//     console.log(element)
// }

// coding.forEach(printMe)

coding.forEach((element, index, arr) => {
    console.log(element, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((element) => {
    console.log(element["languageFileName"]);
    
})