let http = require("http");
let num1 = 6;
let manejador = (solicitud, respuesta)=>{
    console.log("Recibimos una nueva petición");

    respuesta.end(`Esto es el valor ${num1}`);
    //console.log(solicitud);
}

let servidor = http.createServer(manejador);
servidor.listen("8000");