let util = require('util');

function Person(){//cuando la primer letra es mayuscula es constructor
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
    Person.call(this); //Se llaman los contructores de Person
    this.badgenumber = '1234';//se le agrega una propiedad a policeman ademas de las que ya tiene person
}

util.inherits(Policeman, Person);
let officer = new Policeman();
officer.greet();