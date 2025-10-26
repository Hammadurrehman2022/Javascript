// Immediately Invoked Function Expression (IIFE)

(function connectToDb() {
    //named IIFE
    console.log(`DataBase connected `); 
})();

( (name) => {
    console.log(`DataBase connected ${name} `); 
})("Hammd");