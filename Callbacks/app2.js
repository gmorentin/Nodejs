//const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
})
//console.log(argv);
//Como correr esta aplicacion "node app2.js -a '750 Calle 13 de Septiembre Colima 28987'"
