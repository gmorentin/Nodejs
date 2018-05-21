const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

/*weather.getWeather(19.2684656,-103.7506397, (errorMessage, weatherResults) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(weatherResults.temperature, undefined, 2));
        console.log(JSON.stringify(weatherResults.apparentTemperature, undefined, 2));
    }
});*/

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        //console.log(JSON.stringify(results, undefined, 2));
        console.log(`Dirección: ${results.address}`)
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Temperatura: ${weatherResults.temperature} ºC`);
                console.log(`Sensación Térmica: ${weatherResults.apparentTemperature} ºF`);
            }
        });

    }
})

//console.log(argv);
//Como correr esta aplicacion "node app2.js -a '750 Calle 13 de Septiembre Colima 28987'"

