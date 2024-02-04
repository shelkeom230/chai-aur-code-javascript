// Immediately Invoked Function expressions 

(function chai(){
    //named IIFE
    console.log("DB CONNNECTED");
})();

( (name)=>{
    //unnamed IIFE
    console.log(`DB connected 2 ${name}`);
}) ("Omkar")