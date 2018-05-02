'use strict';

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}


/*function Person(firstname, lastname){
this.firstname=firstname
this.lastname=lastname
}

//Todo objeto tiene un prototipo
Person.prototype.greet=function(){
    console.log(`Hello ${this.firstname} ${this.lastname}`);
};*/

let jhon = new Person("John", "Doe");
let gus = new Person("Gustavo","Morentin");
gus.greet();
jhon.greet();

//lo que contienen los prototipos
console.log(jhon.__proto__);
console.log(gus.__proto__);

//compara dos prototipos
console.log(jhon.__proto__===gus.__proto__);

console.log(jhon.firstname);
console.log(jhon.lastname);
