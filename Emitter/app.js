let Emitter = require('./Emitter'); //Nuestro Emitter
//let Emitter = require('events'); //El emitter de Javascript
let emtr = new Emitter();
let eventConfig = require('./config').events;

emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, someone said Hello. ');
});

emtr.on(eventConfig.GREET, () => console.log('A greeting ocurred!'));

console.log('Hello!');
emtr.emit(eventConfig.GREET);