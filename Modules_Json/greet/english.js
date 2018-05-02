let greetings=require('./grettings.json');

let greet = function(){
    console.log(greetings.en);
}

module.exports = greet;