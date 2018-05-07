const request = require('request');

var geocodeAddress = (address, callback) => {
    let encodeaddress = encodeURIComponent(address);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address= ${encodeaddress}`, //${encodeURIComponent(argv.address)}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers');
            //console.log('Unable to connect to Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            //console.log(JSON.stringify(body,undefined,2));
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                logitude: body.results[0].geometry.location.lng
            })
            /*console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitud: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitud: ${body.results[0].geometry.location.lng}`);*/
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;