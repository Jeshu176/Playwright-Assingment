// Named Function
function userProfile(name){
    console.log(`Hello, ${name}!`);
    
}
userProfile("Chinthana")

// Arrow Function  

let double=(number)=>number*number
console.log(double(4));

// Anonymous Function 

setTimeout(function () {
console.log("This message is delayed by 2 seconds");}, 2000);

// Callback Function  

setTimeout(getUserData,2000)

function getUserData(){

    console.log("Call Back Function");
};