let obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'}); //le puedes mandar varios parametros separados por comas
obj.greet.apply({name: 'Jane Doe'}); //le puedes mandar un array de parametros