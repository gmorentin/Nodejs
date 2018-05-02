'use strict';

let EventEmitter = require('events');
//let util = require('util');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(this.greeting + ': '+ data);
        //console.log(`${ this.greeting }: ${ data }`);
        this.emit('greet',data);
    }
}


/*//Constructor en donde inicializamos una varibale
function Greetr(){
    EventEmitter.call(this);
    this.greeting = 'Hello World!';
}

//El objeto Greetr hereda el comportamiento de EventEmitter
util.inherits(Greetr, EventEmitter);


//le añadimos una funcionalidad llamada greet a la cadena de prototipo del  constructor Greetr
Greetr.prototype.greet = function(data){
console.log(this.greeting + ': '+ data); //Se imprime lo que tiene el constructor
this.emit('greet',data); //Se llama la funcion greet
}*/

//Inicializamos un nuevo objeto del constructor Greetr
let greeter1 = new Greetr();

//es el comportamiento que pasa cuando se llama la funcion greet se llama
greeter1.on('greet', function(data){
    console.log('Someone greeted!: '+ data);
});

//se manda a llamar la funcion con el objeto que creamos
greeter1.greet('Tony');