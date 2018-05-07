const request = require('request');
const yargs = require('yargs');

const argv = yargs.option({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
    .help()
    .alias('help', 'h')
    .argv;

//console.log(argv);
//Como correr esta aplicacion "node app2.js -a '750 Calle 13 de Septiembre Colima 28987'"
let encodeaddress = encodeURIComponent(argv.address);
request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address= ${encodeaddress}`, //${encodeURIComponent(argv.address)}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Google servers');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address');
    } else if (body.status === 'OK') {
        //console.log(JSON.stringify(body,undefined,2));
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitud: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitud: ${body.results[0].geometry.location.lng}`);
    }
});