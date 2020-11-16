const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicGV0ZXJ2YXRsZXIiLCJhIjoiY2tlZHhra2xzMHc4bDJ6cnY5cnFuMG0xcSJ9.duKFBS7VlV1GPWq22kiQJQ`;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location : body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;