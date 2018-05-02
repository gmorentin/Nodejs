
//object literal
let person= {
    firstname: 'Gustavo',//key/value pair
    lastname: 'Morentin',
    greet: function(){
        console.log('Hello, '+this.firstname + ' ' + this.lastname);
    }
};

person.greet();
console.log(person.firstname + ' ' + person.lastname);
console.log(person['firstname']);