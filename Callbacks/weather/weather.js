//c432c048660178010c53e6060f629b57
const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c432c048660178010c53e6060f629b57/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            //console.log(body.currently);
            //console.log(JSON.stringify(body,undefined,2));
            callback(undefined, {
                temperature: (body.currently.temperature-32)*0.5555555556,//convertido a celsius
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
            //console.log('Unable to fetch weather');
        }
    });
}

module.exports.getWeather = getWeather;



//console.log(`https://api.darksky.net/forecast/c432c048660178010c53e6060f629b57/${results.latitude},${results.logitude}`) //${encodeURIComponent(argv.address)}`,