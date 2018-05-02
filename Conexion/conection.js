
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '301198050913',
    database: 'cpremier',
    port: 3306
});

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion correcta.');
    }
});

//connection.query('SELECT * FROM edificio');

let query = connection.query('SELECT * FROM edificio', function (error, result, fields) {
    if (error) {
        throw error;
    } else {
        if (result.length > 0) {
            //console.log(result);
            console.log(fields[2].name);
           /* let num = 1;
            while (num < result.length) {
                console.log(result[num]);
                console.log(fields[0].name);
                num++;
            }*/

            //console.log(resultado[0].direccion + ' ' + resultado[0].apellido + ' / ' + resultado[0].biografia);
        } else {
            console.log('Registro no encontrado');
        }
    }
}
);
connection.end();