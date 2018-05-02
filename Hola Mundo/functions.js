
//function statement
function greet(){
    console.log('Hi');
}
greet();

//function are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
let greetMe = function(){
    console.log('Hi Gustavo');
}
greetMe();

//it's first-class
logGreeting(greetMe);

//use a function expression to create a function on the fly
logGreeting(function(){
    console.log('Hello Gustavo!');
})
//or with arrow function
logGreeting(()=>{
    console.log('Hello Gustavo!');
});



